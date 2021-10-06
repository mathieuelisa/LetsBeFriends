/* eslint-disable react-hooks/exhaustive-deps */
// Import styles
import "./styles.scss"

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
// Import ReactComponents
import Avatar from "../../Styledcomponents/Avatar"
import ButtonToggle from "../../Styledcomponents/ButtonToggle"
import EventCardSearch from "../../Styledcomponents/EventCardSearch"
import { resetInfosUser } from "../../../Redux/actions/profil"

// import pictures
// import avatarMicheline from "../../../assets/Img/micheline.jpg"

import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

// import actions types
import { SET_TOGGLE, RESET_TOGGLE } from '../../../Redux/actions/common';
import { setUserEventsById } from "../../../Redux/actions/event"
import axios from "axios"

function ListEventContainer(){
    const dispatch = useDispatch()

    const toggleAction = useSelector((state)=> state.common.toggleAction)
    const infosUser = useSelector((state)=>state.profil.infosUser)
    const idUser = useSelector((state)=>state.profil.infosUser.id)
    const dataEvents = useSelector((state)=>state.event.eventUserEvents)

    // Recherche des events du user
    const userDataEvents = dataEvents.filter(element => element.ownerId === infosUser.id)
    
    console.log("myResult:", userDataEvents)

useEffect(() => {
    GetUserEventsById()
  }, []);

    function handleClick(event){
        event.preventDefault()
        console.log("Tu as cliqué sur le bouton")
        dispatch({type: SET_TOGGLE})
    }

    // useEffect permettant de remettre le menu hamburger a false a chaque rendu
    useEffect(()=>{
        dispatch({type: RESET_TOGGLE})
    },[])

    const history = useHistory()
    // Fonction permettant de se logout
    function handleLogOut(){
    dispatch(resetInfosUser());
    history.push("/")
}

const optionsGet = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

const GetUserEventsById = () => {
    // console.log('Le loading dans GetAllEvents est à : ', loading )
    axios
      .get(`https://lets-be-friend.herokuapp.com/v1/users/${idUser}`, optionsGet)
      .then((response) => {
        dispatch(setUserEventsById(response.data.event));
        console.log("coucou voici ta reponse de ton API:", response.data.event)
      })
      .catch((error) =>
        console.log(`ERREUR : I can't all the data form the user ${idUser}`)
      )
  };

    return(
        <div className="list__container">
            <div className={toggleAction ? 'header__navbar__settings-open' : 'header__navbar__settings'}>
                <ButtonToggle 
                    className='settings__container--toggle' 
                    name='=' 
                    handleClick={handleClick}
                />
                {toggleAction ? 
                    <div className="header__hamburger">
                        <NavLink to="/" exact className="header__hamburger-titlePage">HOME</NavLink>
                        <NavLink to="/searchEvent" className="header__hamburger-titlePage">SEARCH EVENT</NavLink>
                        <NavLink to="/createEvent" className="header__hamburger-titlePage">CREATE EVENT</NavLink>
                        <NavLink to="/listEvent" className="header__hamburger-titlePage">MY EVENTS</NavLink>
                        <NavLink to="/profil" className="header__hamburger-titlePage">PROFIL</NavLink>
                        <NavLink to="/contact" className="header__hamburger-titlePage">CONTACT</NavLink>
                        {localStorage.getItem("user") ? <NavLink onClick={handleLogOut} exact to="/" className="header__hamburger-disconnect">DISCONNECT</NavLink>: ""}
                    </div>
                    : ""
                } 
            </div>

            <div className="mainListEvent__container">
                <div className="profil__container-avatars">
                        <Avatar 
                            customDiv={"profil__container-avatar"} 
                            customImg={"profil__container-pictures"} 
                            customPics={infosUser.imgUrl}
                        />
                </div>

                <div className="profil__container-data">
                    <div className="title__listContainer">
                        <div className="choice__listContainer">
                            <a href className="choice__listContainer-link"><h2>PAST</h2></a>
                        </div>
                        <div className="choice__listContainer">
                            <a href className="choice__listContainer-link"><h2>COMING SOON</h2></a>
                        </div>
                        <div className="choice__listContainer">
                            <a href className="choice__listContainer-link"><h2>MY EVENT</h2></a>
                        </div>
                        {/* Partie qui sera visible uniquement pour l'organisateur */}
                        <div className="choice__listContainer">
                            <a href className="choice__listContainer-link"><h2>ASKING</h2></a>
                        </div>

                    </div>


                    {userDataEvents?.map((event) => (
                        <EventCardSearch 
                            key={event.id} 
                            title={event.title}
                            imgUrl={event.imgUrl}
                            textConfig="profil__container-resultsForm-text"
                            classNameCard="profil__container-resultsForm"
                        />
                    ))}

                </div>        
            </div>
        </div>
    )
}

export default ListEventContainer
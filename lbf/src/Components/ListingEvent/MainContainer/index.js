/* eslint-disable react-hooks/exhaustive-deps */
// Import styles
import "./styles.scss"

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
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

function ListEventContainer(){
    const dispatch = useDispatch()

    // Conditions pour un rendu differents
    const [pastEvents, setPastEvents] = useState("")
    const [comingSoonEvents, setComingSoonEvents] = useState("")
    const [myEvents, setMyEvents] = useState("")
    const [askings, setAskings] = useState("")


    const toggleAction = useSelector((state)=> state.common.toggleAction)
    const infosUser = useSelector((state)=>state.profil.infosUser)
    
    const dataEvents = useSelector((state)=>state.event.eventUserEvents)

    console.log("popo",dataEvents)

    // Recherche des events du user
    const userDataEvents = dataEvents.filter(element => element.ownerId === infosUser.id)
    
    console.log("myResult:", userDataEvents)

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

  const handleClickPast = () =>{
        setPastEvents(!pastEvents)
        setMyEvents("")
        setComingSoonEvents("")
        setAskings("")
  }

  const handleClickComingSoon = () =>{
        setComingSoonEvents(!comingSoonEvents)
        setPastEvents("")
        setMyEvents("")
        setAskings("")
  }

  const handleClickEvents = () =>{
        setMyEvents(!myEvents)
        setComingSoonEvents("")
        setPastEvents("")
        setAskings("")
  }

  const handleClickAsking = () =>{
        setAskings(!askings)
        setComingSoonEvents("")
        setPastEvents("")
        setMyEvents("")
  }
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
                            <a onClick={handleClickPast} href className="choice__listContainer-link"><h2>PAST</h2></a>
                        </div>
                        <div className="choice__listContainer">
                            <a onClick={handleClickComingSoon} href className="choice__listContainer-link"><h2>COMING SOON</h2></a>
                        </div>
                        <div className="choice__listContainer">
                            <a onClick={handleClickEvents} href className="choice__listContainer-link"><h2>MY EVENT</h2></a>  
                        </div>
                        {/* Partie qui sera visible uniquement pour l'organisateur */}
                        <div className="choice__listContainer">
                            <a onClick={handleClickAsking} href className="choice__listContainer-link"><h2>ASKING</h2></a>
                        </div>

                    </div>

                    {myEvents && userDataEvents?.map((event) => (
                                    <EventCardSearch 
                                        key={event.id} 
                                        title={event.title}
                                        imgUrl={event.imgUrl}
                                        textConfig="profil__container-resultsForm-text"
                                        classNameCard="profil__container-resultsForm"
                                    />
                                ))

                            }

                    {comingSoonEvents && userDataEvents?.map((event) => (
                                    <EventCardSearch 
                                        key={event.id} 
                                        title={"Coming soon events"}
                                        imgUrl={event.imgUrl}
                                        textConfig="profil__container-resultsForm-text"
                                        classNameCard="profil__container-resultsForm"
                                    />
                                ))
                            }

                    {pastEvents && userDataEvents?.map((event) => (
                                    <EventCardSearch 
                                        key={event.id} 
                                        title={"Pasts events"}
                                        imgUrl={event.imgUrl}
                                        textConfig="profil__container-resultsForm-text"
                                        classNameCard="profil__container-resultsForm"
                                    />
                                ))
                            }

                    {askings && userDataEvents?.map((event) => (
                            <EventCardSearch 
                                key={event.id} 
                                title={"Askings events"}
                                imgUrl={event.imgUrl}
                                textConfig="profil__container-resultsForm-text"
                                classNameCard="profil__container-resultsForm"
                            />
                        ))
                    }
                </div>        
            </div>
        </div>
    )
}

export default ListEventContainer
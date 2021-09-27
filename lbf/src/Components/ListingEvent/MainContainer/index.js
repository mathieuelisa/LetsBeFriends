// Import styles
import "./styles.scss"

// Import ReactComponents
import Avatar from "../../Styledcomponents/Avatar"
import ButtonToggle from "../../Styledcomponents/ButtonToggle"
import EventCardSearch from "../../Styledcomponents/EventCardSearch"

// import pictures
import avatarMicheline from "../../../assets/Img/micheline.jpg"

import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux"

// import actions types
import { SET_TOGGLE, RESET_TOGGLE } from '../../../Redux/actions/common';
import { useEffect } from "react"


function ListEventContainer(){
    const dispatch = useDispatch()
    const toggleAction = useSelector((state)=> state.common.toggleAction)

    
    function handleClick(event){
        event.preventDefault()
        console.log("Tu as cliqué sur le bouton")
        dispatch({type: SET_TOGGLE})
    }

    // useEffect permettant de remettre le menu hamburger a false a chaque rendu
    useEffect(()=>{
        dispatch({type: RESET_TOGGLE})
    },)

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
                    </div>
                    : ""
                } 
            </div>

            <div className="mainListEvent__container">
                <div className="profil__container-avatars">
                        <Avatar 
                        customDiv={"profil__container-avatar"} 
                        customImg={"profil__container-pictures"} 
                        customPics={avatarMicheline}
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
                        {/* Partie qui sera visible uniquement pour l'organisateur */}
                        <div className="choice__listContainer">
                            <a href className="choice__listContainer-link"><h2>ASKING</h2></a>
                        </div>
                    </div>
                    <EventCardSearch 
                        classNameCard={"listEvent"}
                        infos={"searchEvent-infos"}
                        pictures={"listEvent-pictures"}
                        title={"Sortie culturelle"}
                        titleConfig={"searchEvent-title"}
                        language={"Roumain"}
                        placeLeft={"2 spots left"}

                    />

                    <EventCardSearch 
                        classNameCard={"listEvent"}
                        infos={"searchEvent-infos"}
                        pictures={"listEvent-pictures"}
                        title={"Tous chez julien"}
                        titleConfig={"searchEvent-title"}
                        language={"Japanese"}
                        placeLeft={"1 spot left"}
                    />

                </div>        
            </div>
        </div>
    )
}

export default ListEventContainer
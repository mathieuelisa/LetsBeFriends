/* eslint-disable react-hooks/exhaustive-deps */
// Import styles
import "./styles.scss"

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
// Import ReactComponents
import Avatar from "../../Styledcomponents/Avatar"
import ButtonToggle from "../../Styledcomponents/ButtonToggle"
import { resetInfosUser } from "../../../Redux/actions/profil"

import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

// import actions types
import { SET_TOGGLE, RESET_TOGGLE } from '../../../Redux/actions/common';
import ParticipateRequest from "../../Styledcomponents/ParticipateRequest"
import EventCardMyEvents from "../../Styledcomponents/EventCardMyEvents"

function ListEventContainer(){
    const dispatch = useDispatch()

    // Conditions pour un rendu differents
    const [pastEvents, setPastEvents] = useState("")
    const [comingSoonEvents, setComingSoonEvents] = useState("")
    const [myEvents, setMyEvents] = useState("")
    const [askings, setAskings] = useState("")
    

    const askingList = useSelector(state => state.event.askingList)
    const toggleAction = useSelector((state)=> state.common.toggleAction)
    const infosUser = useSelector((state)=>state.profil.infosUser)
    const events = useSelector((state)=>state.event.events)
    const dataEvents = useSelector((state)=>state.event.eventUserEvents)
    const dataPastEvents = []
    const dataComingEvents = []
    
    //console.log('data Events : ', dataEvents) 
    //console.log("Events:",events)
    console.log('La liste des askings requests : ', askingList)

    // Recherche des events du user
    function handleClick(event){
        event.preventDefault()
        dispatch({type: SET_TOGGLE})
    }

    // Fonction tri par date
    const isBeforeToday = (timeToCompare)=>{
        const today = new Date()
        const year = Number(timeToCompare.slice(0,4))
        // console.log(year)
        const month = Number(timeToCompare.slice(5, 7))
        // console.log(month)
        const day = Number(timeToCompare.slice(8,10))
        // console.log(day)
        const hours = Number(timeToCompare.slice(11 , 13))
        // console.log(hours)
        const minutes = Number(timeToCompare.slice(14, 16))
        // console.log(minutes)
        if(year < today.getUTCFullYear()) return true
        else if (year > today.getUTCFullYear()) return false
        if(month < today.getMonth()+1) return true
        else if(month > today.getMonth()+1) return false
        if(day < today.getDay()+3) return true
        else if(day > today.getDay()+3) return false
        if(hours < today.getUTCHours()+2) return true
        else if(hours > today.getUTCHours()+2) return false
        if(minutes < today.getUTCMinutes()) return true
        else if(minutes > today.getUTCMinutes()) return false
        else return false
    }
 
    for (const event of dataEvents) {
        if(isBeforeToday(event.startingDate)) {
            dataPastEvents.push(event)
        } else {
            dataComingEvents.push(event)
        }
    }

    //console.log("Tous les évènements antérieurs à aujourd'hui  : ", dataPastEvents)
    console.log("Tous les évènements ultérieurs à aujourd'hui  : ", dataComingEvents)

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

  const handleClickPast = (e) =>{
      e.preventDefault();
        setPastEvents(!pastEvents)
        setMyEvents("")
        setComingSoonEvents("")
        setAskings("")
  }

  const handleClickComingSoon = (e) =>{
    e.preventDefault();
        setComingSoonEvents(!comingSoonEvents)
        setPastEvents("")
        setMyEvents("")
        setAskings("")
  }

  const handleClickEvents = (e) =>{
    e.preventDefault();
        setMyEvents(!myEvents)
        setComingSoonEvents("")
        setPastEvents("")
        setAskings("")
  }

  const handleClickAsking = (e) =>{
      e.preventDefault();
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
                        <NavLink to="/profil" className="header__hamburger-titlePage">PROFIL</NavLink>
                        <NavLink to="/createEvent" className="header__hamburger-titlePage">CREATE EVENT</NavLink>
                        <NavLink to="/searchEvent" className="header__hamburger-titlePage">SEARCH EVENT</NavLink>
                        <NavLink to="/listEvent" className="header__hamburger-titlePage">MY EVENTS</NavLink>
                        <NavLink to="/contact" className="header__hamburger-titlePage">CONTACT</NavLink>
                        {localStorage.getItem("user") ? <NavLink onClick={handleLogOut} exact to="/" className="header__hamburger-disconnect">DISCONNECT</NavLink>: ""}
                    </div>
                    : ""
                } 
            </div>

            <div className="mainListEvent__precontainer">
                <div className='mainListEvent__precontainer__container'>
                    <div className='mainListEvent__precontainer__container-presentation'>Hi {infosUser.firstname}, you can find below your events calendar.<br/><br/> If you're organizing events, check the asking section to accept/decline the other people participations requests </div>
                    <div className='mainListEvent__precontainer__container__display'>
                        <div className="profil__container-avatars">
                                <Avatar 
                                    customDiv={"profil__container-avatar"} 
                                    customImg={"profil__container-pictures"} 
                                    customPics={infosUser.imgUrl}
                                />
                        </div>

                        <div className="mainListEvent__container-data">
                            <div className="title__listContainer">
                                <div className="choice__listContainer">
                                    <a onClick={handleClickPast} href className="choice__listContainer-link"><h2>PAST</h2></a>
                                </div>
                                <div className="choice__listContainer">
                                    <a onClick={handleClickComingSoon} href className="choice__listContainer-link"><h2>COMING SOON</h2></a>
                                </div>
                                {/* <div className="choice__listContainer">
                                    <a onClick={handleClickEvents} href className="choice__listContainer-link"><h2>MY EVENT</h2></a>  
                                </div> */}
                                {/* Partie qui sera visible uniquement pour l'organisateur */}
                                <div className="choice__listContainer">
                                    <a onClick={handleClickAsking} href className="choice__listContainer-link"><h2>ASKING</h2></a>
                                </div>

                            </div>

                            {/* {myEvents && dataEvents.map((event) => (
                                            <EventCardMyEvents 
                                                key={event.id} 
                                                title={event.title}
                                                imgUrl={event.imgUrl}
                                                textConfigDescription="mainListEvent__container-resultsForm-description"
                                                description={event.description}
                                                textConfig="profil__container-resultsForm-text"
                                                classNameCard="profil__container-resultsForm"
                                                eventDateStart={event.startingDate}
                                                eventDateEnd={event.endingDate}
                                            />
                                        ))

                                    } */}

                            {comingSoonEvents && dataComingEvents?.map((event) => (
                                            <EventCardMyEvents 
                                                key={event.id} 
                                                title={event.title}
                                                imgUrl={event.imgUrl}
                                                description={event.description}
                                                textConfig="profil__container-resultsForm-text"
                                                classNameCard="profil__container-resultsForm"
                                                eventDateStart={event.startingDate.slice(0,10)}
                                                eventHourStart={event.startingDate.slice(11,16)}
                                                eventDateEnd={event.endingDate.slice(0,10)}
                                                eventHourEnd={event.endingDate.slice(11,16)}
                                                placesLeft={event.placesLeft}
                                            />
                                        ))
                                    }

                            { !dataPastEvents ? <><p>Tu n'as pas d'évènements passés</p></> : <>{pastEvents && dataPastEvents.map((event) => (
                                            <EventCardMyEvents 
                                                key={event.id} 
                                                title={"Pasts events"}
                                                imgUrl={event.imgUrl}
                                                textConfig="profil__container-resultsForm-text"
                                                classNameCard="profil__container-resultsForm"
                                                eventDateStart={event.startingDate.slice(0,10)}
                                                eventHourStart={event.startingDate.slice(11,16)}
                                                eventDateEnd={event.endingDate.slice(0,10)}
                                                eventHourEnd={event.endingDate.slice(11,16)}
                                                placesLeft={event.placesLeft}
                                            />
                                        ))
                                    }</>} 

                            {askings && askingList[0].participants.map((participant) => (
                                    <ParticipateRequest 
                                        key={participant.id} 
                                        firstname={participant.firstname}
                                        lastname={participant.lastname}
                                        description={participant.description}
                                        title={askingList[0].title[0]}
                                        placesLeft={askingList[0].placesleft[0]}
                                        imgUrl={participant.imgUrl}
                                        textConfig="profil__container-resultsForm-text"
                                        classNameCard="profil__container-resultsForm"
                                    />
                                    
                                ))
                            }
                        </div> 
                    </div>    
                </div>           
            </div>
        </div>
    )
}

export default ListEventContainer
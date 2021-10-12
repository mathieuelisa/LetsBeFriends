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

// import icons
import Couronne from "../../../assets/Logo/couronne.png"

function ListEventContainer(){
    const dispatch = useDispatch()

    // Conditions pour un rendu differents
    const [pastEvents, setPastEvents] = useState(false)
    const [comingSoonEvents, setComingSoonEvents] = useState(false)
    const [askings, setAskings] = useState(false)

    const askingList = useSelector(state => state.event.askingList)
    const toggleAction = useSelector((state)=> state.common.toggleAction)
    const infosUser = useSelector((state)=>state.profil.infosUser)
    const events = useSelector((state)=>state.event.events)
    const dataEvents = useSelector((state)=>state.event.eventUserEvents)
    const [dataPastEvents, setDataPastEvents] = useState([]);
    const [dataComingEvents, setDataComingEvents] = useState([]);
    
    console.log('data past Events : ', dataPastEvents) 
    //console.log('Infos User : ', infosUser) 
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
 
    // for (const event of dataEvents) {
    //     if(isBeforeToday(event.startingDate)) {
    //         setDataPastEvents([...dataPastEvents, event])
    //     } else {
    //         setDataComingEvents([...dataComingEvents, event])
    //     }
    // }
   



    // useEffect permettant de remettre le menu hamburger a false a chaque rendu
    useEffect(()=>{
        dispatch({type: RESET_TOGGLE})
        console.log('Data events depuis le useEffect : ', dataEvents)
        setDataPastEvents(dataEvents.filter((event) => isBeforeToday(event.startingDate)));
        setDataComingEvents(dataEvents.filter((event) => !isBeforeToday(event.startingDate)));
    },[])

    const history = useHistory()
    // Fonction permettant de se logout
    function handleLogOut(){
    dispatch(resetInfosUser());
    history.push("/")
}

    const arraypastevents = dataPastEvents.map((event) => (
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
            placesLeft={event.placesleft}
        />
    ))

    const arraycomingsoon = dataComingEvents?.map((event) => (
        <EventCardMyEvents 
            key={event.id} 
            title={event.title}
            imgUrl={event.imgUrl}
            description={event.description}
            textConfig="profil__container-resultsForm-text"
            classNameCard={ (event.ownerId == infosUser.id) ? "profil__container-resultsForm--myEvent ": "profil__container-resultsForm"}
            eventDateStart={event.startingDate.slice(0,10)}
            eventHourStart={event.startingDate.slice(11,16)}
            eventDateEnd={event.endingDate.slice(0,10)}
            eventHourEnd={event.endingDate.slice(11,16)}
            placesLeft={event.placesLeft}
            image={ (event.ownerId == infosUser.id) ? Couronne : ""}
            imageConfiguration="profil__container-resultsForm-image"
        />
    ))

    const arrayaskinglist = askingList.map((eventList) => {
        return eventList.participants.map((participant) => {
            return(
            <ParticipateRequest 
                key={participant.id} 
                firstname={participant.firstname}
                email={participant.email}
                gender={participant.gender}
                lastname={participant.lastname}
                description={participant.description}
                title={eventList.title[0]}
                imgUrl={participant.imgUrl}
                classNameDescription="profil__container-resultsForm-description"
                textConfig="profil__container-resultsForm-text"
                classNameCard="profil__container-resultsForm"
                classNameInfos="profil__container-resultsForm-displayInfos"
            />
            
            )
        })

})
    
    
  const handleClickPast = (e) =>{
      e.preventDefault();
        
        console.log('handleClickPast')
        setComingSoonEvents(false)
        setAskings(false)
        setPastEvents(true)
  }

  const handleClickComingSoon = (e) =>{
    e.preventDefault();
    console.log('handleClickComingSoon')
        setPastEvents(false)
        
        setAskings(false)
        setComingSoonEvents(true)
  }

  const handleClickAsking = (e) =>{
      e.preventDefault();
      console.log('handleClickAsking')
        setComingSoonEvents(false)
        setPastEvents(false)
        
        setAskings(true)
  }
  
  console.log("Tous les évènements antérieurs à aujourd'hui  : ", dataPastEvents)
  console.log("Tous les évènements ultérieurs à aujourd'hui  : ", dataComingEvents)
  console.log("Tous les asking requests : ", askingList)
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
                    <div className='mainListEvent__precontainer__container-presentation'>Hi {infosUser.firstname}, you can find below your events calendar.<br/><br/> If you're organizing events ( <img className="profil__container-resultsForm-imageText" alt="Logo" src={Couronne}></img> ), check the asking section to accept/decline the other people participations requests </div>
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
                                <div clas-sName="choice__listContainer">
                                    <a onClick={handleClickPast} href className="choice__listContainer-link"><h2>PAST</h2></a>
                                </div>
                                <div className="choice__listContainer">
                                    <a onClick={handleClickComingSoon} href className="choice__listContainer-link"><h2>COMING SOON</h2></a>
                                </div>
                                {/* <div className="choice__listContainer">
                                    <a onClick={handleClickEvents} href className="choice__listContainer-link"><h2>MY EVENT</h2></a>  
                                </div> */}
                                <div className="choice__listContainer">
                                    <a onClick={handleClickAsking} href className="choice__listContainer-link"><h2>ASKING</h2></a>
                                </div>

                            </div>

                            {pastEvents ? arraypastevents : ""}
                            {comingSoonEvents ? arraycomingsoon : ""}
                            {askings ? arrayaskinglist : ""}
                            

                        </div> 
                    </div>    
                </div>           
            </div>
        </div>
    )
}

export default ListEventContainer
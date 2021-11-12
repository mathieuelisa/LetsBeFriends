/* eslint-disable react-hooks/exhaustive-deps */
// Import styles
import "./styles.scss"

import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import ReactComponents
import Avatar from "../../Styledcomponents/Avatar"
import ButtonToggle from "../../Styledcomponents/ButtonToggle"

import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

// import actions types
import { SET_TOGGLE, RESET_TOGGLE, resetAskingList } from '../../../Redux/actions/common';
import { resetInfosUser } from "../../../Redux/actions/profil"
import ParticipateRequest from "../../Styledcomponents/ParticipateRequest"
import EventCardMyEvents from "../../Styledcomponents/EventCardMyEvents"

// import icons
import Couronne from "../../../assets/Logo/couronne.png"
import { resetDataEvents } from "../../../Redux/actions/event";

toast.configure()

function ListEventContainer() {
    const dispatch = useDispatch()

    const askingList = useSelector(state => state.event.askingList)
    const toggleAction = useSelector((state)=> state.common.toggleAction)
    const infosUser = useSelector((state)=>state.profil.infosUser)
    //const events = useSelector((state)=>state.event.events)
    const dataEvents = useSelector((state)=>state.event.eventUserEvents)
  
    // Conditions pour un rendu differents
    const [pastEvents, setPastEvents] = useState(false)
    const [comingSoonEvents, setComingSoonEvents] = useState(false)
    const [askings, setAskings] = useState(false)
    const [scrollIcons, setScrollIcons] = useState(false)
    const [dataPastEvents, setDataPastEvents] = useState([]);
    const [dataComingEvents, setDataComingEvents] = useState([]);
    const [RequestList, setRequestList] = useState([])
    const [updateRequestList, setUpdateRequestList] = useState(false)

    const optionsGet = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      };
    //console.log('data past Events : ', dataPastEvents) 
    //console.log('La liste des askings list : ', askingList)

    // Fonction tri par date
    const isBeforeToday = (timeToCompare)=>{
        const today = new Date()
        const year = Number(timeToCompare.slice(0,4))
        const month = Number(timeToCompare.slice(5, 7))
        const day = Number(timeToCompare.slice(8,10))
        const hours = Number(timeToCompare.slice(11 , 13))
        const minutes = Number(timeToCompare.slice(14, 16))

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
    // useEffect permettant de remettre le menu hamburger a false a chaque rendu
    useEffect(()=>{
        dispatch({type: RESET_TOGGLE})
        //console.log('Data events depuis le useEffect : ', dataEvents)
        setDataPastEvents(dataEvents.filter((event) => isBeforeToday(event.startingDate)));
        setDataComingEvents(dataEvents.filter((event) => !isBeforeToday(event.startingDate)));
        setRequestList(askingList)
    },[])
   

    const history = useHistory()
    // Fonction permettant de se logout
    function handleLogOut(){
        dispatch(resetInfosUser())
        dispatch(resetAskingList())
        dispatch(resetDataEvents())
        //faire un dispatch pour Askinglist, data events, ...
        window.localStorage.clear();
        history.push("/")
    }

    const arraypastevents = dataPastEvents.map((event) => (
        <EventCardMyEvents 
            key={event.id} 
            title={event.title}
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

    const arraycomingsoon = dataComingEvents.map((event) => (
        <EventCardMyEvents 
            key={event.id} 
            title={event.title}
            imgUrl={event.imgUrl}
            description={event.description}
            textConfig="profil__container-resultsForm-text"
            classNameCard={ (event.ownerId === infosUser.id) ? "profil__container-resultsForm--myEvent ": "profil__container-resultsForm"}
            eventDateStart={event.startingDate.slice(0,10)}
            eventHourStart={event.startingDate.slice(11,16)}
            eventDateEnd={event.endingDate.slice(0,10)}
            eventHourEnd={event.endingDate.slice(11,16)}
            placesLeft={event.placesLeft}
            image={ (event.ownerId === infosUser.id) ? Couronne : ""}
            imageConfiguration="profil__container-resultsForm-image"
        />
    ))

    const arrayRequestList = RequestList.map((eventList) => {
        return eventList.participants.map((participant) => {
            return(
            <ParticipateRequest  
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
                emailConfig="profil__container-resultsForm-email"
                handleAccept={() => handleAccept(participant.id, eventList.eventId, participant.firstname)}
                handleDecline={() => handleDecline(participant.id, eventList.eventId, participant.firstname)}
                buttonRefused="buttonRefused"
                buttonAccept="buttonAccept"
            />
            
            )
        })

    })
    
    
  const handleClickPast = (e) =>{
      e.preventDefault();
        //console.log('handleClickPast')
        setComingSoonEvents(false)
        setAskings(false)
        setPastEvents(true)
  }

  const handleClickComingSoon = (e) =>{
    e.preventDefault();
    //console.log('handleClickComingSoon')
        setPastEvents(false)
        setAskings(false)
        setComingSoonEvents(true)
        setScrollIcons(true)
  }

  const handleClickAsking = (e) =>{
      e.preventDefault();
      //console.log('handleClickAsking')
        setComingSoonEvents(false)
        setPastEvents(false)
        setAskings(true)
        setScrollIcons(true)
  }

  const handleAccept = (participant_id, event_id, firstname) => {
    //console.log("participantID : ", participant_id)
    //console.log("eventId : ", event_id)
    const RequestListUpdated = RequestList
    const eventRequest = RequestList.find(event => event.eventId === event_id)
    const participantsListUpdated = eventRequest.participants.filter(participant => participant.id !== participant_id)
    eventRequest.participants = participantsListUpdated
    const RequestListIndex = RequestList.findIndex(event => event.eventId === event_id)
    RequestListUpdated[RequestListIndex] = eventRequest

    setRequestList(RequestListUpdated)
    requestAccepted(event_id, participant_id)
    toast.success( `${firstname}'s request accepted'`, {position: toast.POSITION.BOTTOM_LEFT})
  } 

  const handleDecline = (participant_id, event_id, firstname) => {

    //console.log("participantID : ", participant_id)
   // console.log("eventId : ", event_id)
    const RequestListUpdated = RequestList
    const eventRequest = RequestList.find(event => event.eventId === event_id)
    const participantsListUpdated = eventRequest.participants.filter(participant => participant.id !== participant_id)
    eventRequest.participants = participantsListUpdated
    const RequestListIndex = RequestList.findIndex(event => event.eventId === event_id)
    RequestListUpdated[RequestListIndex] = eventRequest

    setRequestList(RequestListUpdated)
    setUpdateRequestList(!updateRequestList)
   // console.log("RequestList Updated after declining request ?: ", RequestList) 

    requestDeclined(event_id, participant_id);
    toast.info( `${firstname}'s request declined'`, {position: toast.POSITION.BOTTOM_LEFT})

  }
      // Recherche des events du user
      function handleClick(event){
        event.preventDefault()
        dispatch({type: SET_TOGGLE})
    }

  const requestAccepted = (eventId, userId) => {

    //console.log("La Requete de confoirmation est lancée avec le body : ", {"eventId": eventId,"userId": userId })
    axios
    .post(
      "https://lets-be-friend.herokuapp.com/v1/events/request/confirm",
      {
        "eventId": eventId,
        "userId": userId
      },
      optionsGet,
    )
    .then((response) => {
      console.log("Voici la réponse de l API pour l'acceptation de la demande de participation:", response.data);
    })
    .catch((error) => console.log("Error confirmation de participation "));
  }

  const requestDeclined = (eventId, userId) => {
   // console.log("La Requete de refus est lancée avec le body : ", {"eventId": eventId,"userId": userId })
    axios
    .delete(
      "https://lets-be-friend.herokuapp.com/v1/events/request/confirm",
      {data: {
        "eventId": eventId,
        "userId": userId
      }}, optionsGet
    )
    .then((response) => {
      console.log("Voici la réponse de l API pour le refus de la demande participation:", response.data);
    })
    .catch((error) => console.log("La Requete de refus est lancée avec le body : ", {"eventId": eventId,"userId": userId })
    );
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
                    <div className='mainListEvent__precontainer__container-presentation'>Hi {infosUser.firstname}, you can find below your events calendar.<br/><br/> If you're organizing events ( <img className="profil__container-resultsForm-imageText" alt="Logo" src={Couronne}></img> ), check the asking section to accept/decline the other people participations requests </div>
                    <div className='mainListEvent__precontainer__container__display'>
                        <div className="profil__container-avatars">
                                <Avatar 
                                    customDiv={"profil__container-avatar"} 
                                    customImg={"profil__container-pictures"} 
                                    customPics={infosUser.img_url}
                                />
                        </div>

                        <div className="mainListEvent__container-data">
                            <div className="title__listContainer">
                                <div className="choice__listContainer">
                                    <a onClick={handleClickPast} href className="choice__listContainer-link"><h2>PAST EVENTS</h2></a>
                                </div>
                                <div className="choice__listContainer">
                                    <a onClick={handleClickComingSoon} href className="choice__listContainer-link"><h2>UPCOMING EVENTS</h2></a>
                                </div>
                                {/* <div className="choice__listContainer">
                                    <a onClick={handleClickEvents} href className="choice__listContainer-link"><h2>MY EVENT</h2></a>  
                                </div> */}
                                <div className="choice__listContainer">
                                    <a onClick={handleClickAsking} href className="choice__listContainer-link"><h2>REQUESTS</h2></a>
                                </div>

                            </div>
                            <div className="display-cards">
                                {pastEvents ? arraypastevents : ""}
                                {comingSoonEvents ? arraycomingsoon : ""}
                                {askings ? arrayRequestList : ""}
                            </div>

                        </div> 
                    </div> 

                {scrollIcons == true ? 
                <> <div className="choice__listContainer-scrollIcon">
                        <h1>scroll down</h1>
                    </div>  
                </> : ""}

                </div>           
            </div>          
        </div>
    )
}

export default ListEventContainer
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
//Import React components
import Input from "../../Profil/Input"
import EventCardSearch from "../../Styledcomponents/EventCardSearch"
import ButtonToggle from '../../Styledcomponents/ButtonToggle'
//Import Tools
import DatePicker from "react-datepicker"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//Import styles
import "./styles.scss"
import "./datepicker.scss"
// Import axios
import axios from 'axios'


// import actions types
import { SET_TOGGLE, RESET_TOGGLE } from '../../../Redux/actions/common';
import { setAllEvents } from '../../../Redux/actions/event';

function SearchEventContainer(){

    const events = useSelector(state => state.event.events)
    const fieldsSearch = useSelector(state => state.event.fieldsSearch)

    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedEndDate, setselectendDate] = useState(null)

    const dispatch = useDispatch()
    const toggleAction = useSelector((state)=> state.common.toggleAction)

    const optionsGet = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }

    function handleClick(event){
        event.preventDefault()
        console.log("Tu as cliqué sur le bouton")
        dispatch({type: SET_TOGGLE})
    }

    const GetAllEvents = () => {
        axios.get('https://lets-be-friend.herokuapp.com/v1/events', optionsGet)
        .then((response) => {
            //console.log('La liste des évéènements est : ', response.data);
            dispatch(setAllEvents(response.data));
        }).catch(
            (error) => console.log('error'),
          );
    }
    // useEffect permettant de remettre le menu hamburger a false a chaque rendu + Get tous les évènements
    useEffect(()=>{
        dispatch({type: RESET_TOGGLE})
        GetAllEvents();
        //console.log('La variable events est : ', events);
    },[])

    const history = useHistory()
    // Function permettant de se logout en reinitialisant le localStorage
        function handleLogOut(){
        localStorage.clear()
        history.push("/home")
    }

    //console.log('events: ', events);

    return(
        <div className="searchEvent__container">
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

            <div className="searchEvent__container-form">
                <div className="searchEvent__container-searchForm">
                   <form id="searchForm">
                        <div className="searchEvent__container-infosDetails-location">
                            <label>City: </label>
                            <input className="mySearchInputs" type="text" value={fieldsSearch.city}/>
                        </div>

                        <div className="searchEvent__container-infosDetails-location">
                            <label>Event: </label>
                                <Input 
                                    name={"Soirée BBQ"} 
                                    name2={"Atelier Cuisine"} 
                                    name3={"Soirée Jeux"}
                                    name4={"Sortie culturelle"}
                                />
                        </div>
                        {/* Date from */}
                        <div className="searchEvent__container-infosDetails-location">
                            <label>From: </label>
                                <DatePicker 
                                    className="mySearchInputs"
                                    selected={selectedEndDate} 
                                    onChange={date=>setselectendDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    minDate={new Date()}
                                    isClearable
                                />
                        </div>
                        {/* Date to */}
                        <div className="searchEvent__container-infosDetails-location">
                            <label>To: </label>
                                <DatePicker 
                                    className="mySearchInputs"
                                    selected={selectedDate} 
                                    onChange={date=>setSelectedDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    minDate={new Date()}
                                    isClearable
                                />
                        </div>

                        <div className="searchEvent__container-infosDetails-location">
                            <label>Event: </label>
                                <Input 
                                    name={"English"} 
                                    name2={"Japanese"} 
                                    name3={"Portuguese"}
                                    name4={"Spanish"}
                                />
                        </div>
                   </form>

                   <div className="createEvent__container-eventTitle-button">
                        <button type="submit" form="searchForm" className="myButton">LETS GO</button>
                    </div>
                </div>

                <div className="searchEvent__container-resultsForm">
                    {/* Cards for searchPage */}
                    {events.map((event) => ( <EventCardSearch key={event.id} {...event} classNameCard='searchEvent'/> ))}
                </div>
            </div>
                {/* Component Leaflet  */}
                <MapContainer center={[48.858370, 2.294481]} zoom={13} scrollWheelZoom={true}>
                
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {events.map((event, i) => {  
                        if( event.latitude>0 && 
                            event.latitude<84 && 
                            event.longitude>0 && 
                            event.longitude<150 
                        )  {
                            return (
                                <Marker key={event.id} position={[event.latitude, event.longitude]}>
                                    <Popup >
                                        <EventCardSearch key={event.id} {...event} classNameCard='leaflet-popup-content-wrapper__searchEvent'/>
                                    </Popup>        
                                </Marker>)
                        }
                    })}
                </MapContainer>

        </div>
    )
}

export default SearchEventContainer;
import { useEffect, useState } from "react"
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

import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
// import actions types
import { SET_TOGGLE, RESET_TOGGLE } from '../../../Redux/actions/common';

function SearchEventContainer(){
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedEndDate, setselectendDate] = useState(null)

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
    },[])


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
                    </div>
                    : ""
                } 
            </div>

            <div className="searchEvent__container-form">
                <div className="searchEvent__container-searchForm">
                   <form id="searchForm">
                        <div className="searchEvent__container-infosDetails-location">
                            <label>City: </label>
                            <input className="mySearchInputs" type="text"/>
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
                    <EventCardSearch 
                        classNameCard={"searchEvent"}
                        infos={"searchEvent-infos"}
                        pictures={"searchEvent-pictures"}
                        title={"Atelier cuisine"}
                        titleConfig={"searchEvent-title"}
                        language={"English"}
                        placeLeft={"1 spot left"}
                    />
               
                    <EventCardSearch 
                        classNameCard={"searchEvent"}
                        infos={"searchEvent-infos"}
                        pictures={"searchEvent-pictures"}
                        title={"Soirée XBOX"}
                        titleConfig={"searchEvent-title"}
                        language={"Roumain"}
                        placeLeft={"2 spots left"}
                    />

                    <EventCardSearch 
                        classNameCard={"searchEvent"}
                        infos={"searchEvent-infos"}
                        pictures={"searchEvent-pictures"}
                        title={"Sortie culturelle"}
                        titleConfig={"searchEvent-title"}
                        language={"Japanese"}
                        placeLeft={"2 spots left"}
                    />

                    <EventCardSearch 
                        classNameCard={"searchEvent"}
                        infos={"searchEvent-infos"}
                        pictures={"searchEvent-pictures"}
                        title={"Tous chez julien"}
                        titleConfig={"searchEvent-title"}
                        language={"Japanese"}
                        placeLeft={"1 spot left"}
                    />

                </div>
            </div>
                {/* Component Leaflet  */}
                <MapContainer center={[48.858370, 2.294481]} zoom={13} scrollWheelZoom={true}>
                
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                        <Marker position={[48.858370, 2.294481]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                </MapContainer>

        </div>
    )
}

export default SearchEventContainer;
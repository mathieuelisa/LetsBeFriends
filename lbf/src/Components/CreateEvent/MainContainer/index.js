import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
//Import React components
import Input from "../../Profil/Input"
import ButtonToggle from "../../Styledcomponents/ButtonToggle"
import DatePicker from "react-datepicker"
// Import styles
import "./styles.scss"
// Import pictures
import imgEvent from "../../../assets/Img/sport.png"

import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';


// import actions types
import { SET_TOGGLE, RESET_TOGGLE } from '../../../Redux/actions/common';

function CreateEventContainer(){
    // States for calendar
    const [selectedDate, setSelectedDate] = useState(null)

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

    const history = useHistory()

    function handleLogOut(){
        localStorage.clear()
        history.push("/home")
    }

    return(
        <div className="createEvent__container">
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

            <div className="mainCreateEvent__container">
                <div className="createEvent__container-infosDetails">
                    <form id="registerForm"> 
                        <div className="createEvent__container-infosDetails-location" id="div-location">
                            <label>Location: </label>
                            <input className="myInputs" type="text"/>
                        </div>

                        <div className="createEvent__container-infosDetails-calendar">
                        <label>Date: </label>
                            <DatePicker 
                                className="myInputs"
                                selected={selectedDate} 
                                onChange={date=>setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                isClearable
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-location">
                            <label>Theme: </label>
                            <input className="myInputs" type="text"/>
                        </div>

                        <div className="createEvent__container-infosDetails-location">
                            <label>Language: </label>
                            <Input 
                                name={"FRENCH"} 
                                name2={"ENGLISH"} 
                                name3={"JAPANESE"}
                                name4={"ROUMAIN"}
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-location">
                            <label>Nombre de participants: </label>
                            <Input 
                                name={"1"} 
                                name2={"2"} 
                                name3={"3"}
                                name4={"4"}
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-location">
                            <label>Description:</label>
                                <textarea className="myInputs" type="text"/>
                        </div>
                    </form>
                </div>

                <div className="createEvent__container-eventTitle">
                    <div className="createEvent__container-eventTitle-title">
                        <h1>Journée biking</h1>
                    </div>
                    
                    <div className="createEvent__container-eventTitle-img">
                        <img className="createEvent-img" src={imgEvent} alt="imageEvent" />
                    </div>

                    <div className="createEvent__container-eventTitle-button">
                        <button type="submit" form="registerForm" className="myButton">LETS GO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateEventContainer
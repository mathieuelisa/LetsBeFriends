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
    const [selectedEndDate, setselectendDate] = useState(null)
    const [fieldsCreate, setFieldsCreate] = useState({
        location:"",
        zipCode:"",
        city:"",
        country:"",
        tag:"",
        description:"",
        language:"",
        participants:""
    })

    function handleFieldsCreateChange(e){
        e.preventDefault()
            setFieldsCreate({
                ...fieldsCreate,
                [e.target.name]: e.target.value
            })
            console.log("test:", fieldsCreate )
    }

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
                            <input 
                                name="location"
                                className="myInputs" 
                                type="text"
                                value={fieldsCreate.location}
                                onChange={handleFieldsCreateChange}
                            />
                        </div>
                        <div className="createEvent__container-infosDetails-location" id="div-location">
                            <label>Zip code: </label>
                            <input
                                name="zipCode"
                                className="myInputs" 
                                type="number"
                                value={fieldsCreate.zipCode}
                                onChange={handleFieldsCreateChange}
                            />
                        </div>
                        <div className="createEvent__container-infosDetails-location" id="div-location">
                            <label>City: </label>
                            <input
                                name="city"
                                className="myInputs" 
                                type="text"
                                value={fieldsCreate.city}
                                onChange={handleFieldsCreateChange}
                            />
                        </div>
                        <div className="createEvent__container-infosDetails-location" id="div-location">
                            <label>Country: </label>
                            <input
                                name="country"
                                className="myInputs" 
                                type="text"
                                value={fieldsCreate.country}
                                onChange={handleFieldsCreateChange}
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-calendar">
                        <label className="createEvent__container-infosDetails-calendar-label" >Date from: </label>
                            <DatePicker 
                                className="myInputs"
                                selected={selectedDate} 
                                onChange={date=>setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                isClearable
                                showTimeInput
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-calendar">
                        <label className="createEvent__container-infosDetails-calendar-label">Date to: </label>
                            <DatePicker 
                                className="myInputs"
                                selected={selectedEndDate} 
                                onChange={date=>setselectendDate(date)}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                isClearable
                                showTimeInput
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-location">
                            <label>Theme: </label>
                            <input
                                name="tag"
                                className="myInputs" 
                                type="text"
                                value={fieldsCreate.tag}
                                onChange={handleFieldsCreateChange}
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-location">
                            <label>Language: </label>
                            <select 
                                name='language' 
                                value={fieldsCreate.language} 
                                onChange={handleFieldsCreateChange}>
                                    <option></option>
                                    <option>English</option>
                                    <option>French</option>
                                    <option>Spanish</option>
                                    <option>Japanese</option>
                                    <option>Mandarin</option>
                                    <option>Russian</option>
                                    <option>Italian</option>
                            </select>
                        </div>

                        <div className="createEvent__container-infosDetails-location">
                            <label>Nombre de participants: </label>
                            <select 
                                className="createEvent__container-infosDetails-location"
                                name='participants' 
                                value={fieldsCreate.participants} 
                                onChange={handleFieldsCreateChange}>
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>

                            </select>
                        </div>

                        <div className="createEvent__container-infosDetails-location">
                            <label>Description:</label>
                                <textarea
                                    name="description"
                                    className="myInputs" 
                                    type="text"
                                    value={fieldsCreate.description}
                                    onChange={handleFieldsCreateChange}
                                />
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
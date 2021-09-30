/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, React } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
//Import React components
import EventCardSearch from "../../Styledcomponents/EventCardSearch"
import ButtonToggle from '../../Styledcomponents/ButtonToggle'
//Import Tools
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
//Import styles
import "./styles.scss"
// Import axios
import axios from 'axios'


// import actions types
import { SET_TOGGLE, RESET_TOGGLE } from '../../../Redux/actions/common';
import { setAllEvents } from '../../../Redux/actions/event';

function SearchEventContainer(){
    const toggleAction = useSelector((state)=> state.common.toggleAction)
    const events = useSelector(state => state.event.events)
    const [fieldsSearch, setFieldsSearch] = useState({
        city: '',
        eventTag: [''],
        language: [''],
        dateFrom: {
            formatISO: "",
            formatString: ""
        },
        dateTo: {
            formatISO: "",
            formatString: ""
        }
    })

    const dispatch = useDispatch()


    const optionsGet = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }


    function handleFieldSearchChange(e) {
        e.preventDefault()
        if (e.target.name == "dateTo" || e.target.name == "dateFrom") {
            let date = e.target.value
            let formatDate = new Date(date)
            setFieldsSearch({
                ...fieldsSearch,
                [e.target.name]: {
                    formatISO: formatDate.toISOString(),
                    formatString: date
                }
            })
        } else if (e.target.name == 'eventTag' || e.target.name == 'language'){
            setFieldsSearch({
                ...fieldsSearch,
                [e.target.name]: [e.target.name].push(e.target.value), 
            })
        } else {
            setFieldsSearch({
                ...fieldsSearch,
                [e.target.name]: e.target.value
            })
    }
    const handleChangeFieldsSearchTag = (e) => {
        e.preventDefault();
        setFieldsSearch({
            ...fieldsSearch,
            [e.target.name]: [e.target.name].push(e.target.value), 
        })
    }

    const handleChangeFieldsSearchText = (e) => {
        e.preventDefault();
        setFieldsSearch({
            ...fieldsSearch,
            [e.target.name]: e.target.value, 
        })
    }

    function handleClick(event){
        event.preventDefault()
        console.log("Tu as cliqué sur le bouton")
        dispatch({type: SET_TOGGLE})
    }

     const handleSubmitForm = (e) => {
        e.preventDefault();
        searchEvent([], ['English'], "2021-10-20T20:49:12.000Z", "2021-11-09T05:31:49.000Z");
    }

    const GetAllEvents = () => {
        axios.get('https://lets-be-friend.herokuapp.com/v1/events', optionsGet)
        .then((response) => {
            dispatch(setAllEvents(response.data));
        }).catch(
            (error) => console.log('error'),
          );
    }

    const searchEvent = (tagName, languageName, startingDate, endingDate) => {
        console.log('tagName', tagName)
        axios.post('https://lets-be-friend.herokuapp.com/v1/events/search', {
            "tagName": tagName,
            "languageName": languageName,
            "startingDate" : startingDate,
            "endingDate": endingDate
        }, optionsGet )
        .then((response) => {
            console.log('Voici la réponse de l API pour recherche d evenements :', response.data);
            dispatch(setAllEvents(response.data));
        }).catch(error => console.log('Error recherche event '));
    }
    
    
    // useEffect permettant de remettre le menu hamburger a false a chaque rendu + Get tous les évènements
   

    const history = useHistory()
    // Function permettant de se logout en reinitialisant le localStorage
        function handleLogOut(){
        localStorage.clear()
        history.push("/home")
    }

    useEffect(()=>{
        dispatch({type: RESET_TOGGLE})
        GetAllEvents()
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
                            {localStorage.getItem("user") ? <NavLink onClick={handleLogOut} exact to="/" className="header__hamburger-disconnect">DISCONNECT</NavLink>: ""}
                    </div>
                    : ""
                } 
            </div>

            <div className="searchEvent__container-form">
                <div className="searchEvent__container-searchForm">
                   <form id="searchForm" onSubmit={handleSubmitForm}>
                        <div className="searchEvent__container-infosDetails-location">
                            <label>City: </label>
                            <input name='city' className="mySearchInputs" type="text" value={fieldsSearch.city} onChange={handleFieldSearchChange} />
                        </div>

                        <div className="searchEvent__container-infosDetails-location">
                            <label>Event: </label>
                                <select name='eventTag' value={fieldsSearch.eventTag} onChange={handleFieldSearchChange}>
                                    <option></option>
                                    <option>Soirée BBQ</option>
                                    <option>Atelier Cuisine</option> 
                                    <option>Soirée jeux</option> 
                                    <option>Sortie culturelle</option>
                                    <option>Sortie Cinéma</option>
                                    <option>Moment café</option>
                                    <option>Couisine</option>  
                                </select>
                        </div>
                        {/* Date from */}
                        <div className="searchEvent__container-infosDetails-location">
                            <label>From: </label>
                                <input 
                                    name='dateTo'
                                    className="mySearchInputs"
                                    onChange={handleFieldSearchChange}
                                    value={fieldsSearch.dateFrom}
                                />
                        </div>
                        {/* Date to */}
                        <div className="searchEvent__container-infosDetails-location">
                            <label>To: </label>
                                <input 
                                    name='dateFrom'
                                    className="mySearchInputs"
                                    value={fieldsSearch.dateTo}
                                    onChange={handleFieldSearchChange}               
                                />
                        </div>

                        <div className="searchEvent__container-infosDetails-location">
                            <label>Language: </label>
                                <select name='language' value={fieldsSearch.language} onChange={handleChangeFieldsSearchTag}>
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
                   </form>

                   <div className="createEvent__container-eventTitle-button">
                        <button type="submit" form="searchForm" className="myButton">LETS GO</button>
                    </div>
                </div>

                <div className="searchEvent__container-resultsForm">
                    {/* Cards for searchPage */}
                    {events.map((event) => ( <EventCardSearch key={event.id} {...event} classNameCard='searchEvent__container-resultsForm__searchEvent'/> ))}
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
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, React } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
//Import React components
import EventCardSearch from "../../Styledcomponents/EventCardSearch"
import ButtonToggle from '../../Styledcomponents/ButtonToggle'
import Tag from "../../Styledcomponents/Tag";
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
    const [tagOpened, setTagOpened] = useState(false);
    const [fieldsSearch, setFieldsSearch] = useState({
        city: '',
        eventTags: [],
        languages: [],
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

    console.log('INitialisation fieldsSearch: ', fieldsSearch)

 

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
        } else if (e.target.name == 'eventTags'){
            setFieldsSearch({ ...fieldsSearch,
                eventTags: [...fieldsSearch.eventTags, e.target.value] })
        } else if (e.target.name == 'languages'){
            setFieldsSearch({ ...fieldsSearch,
                languages: [...fieldsSearch.languages, e.target.value] })
        }else {
            setFieldsSearch({
                ...fieldsSearch,
                [e.target.name]: e.target.value
            })
        }
        
    }

    // const handleChangeFieldsSearchTag = (e) => {
    //     e.preventDefault();
    //     setFieldsSearch({
    //         ...fieldsSearch,
    //         [e.target.name]: [e.target.name].push(e.target.value), 
    //     })
    // }

    // const handleChangeFieldsSearchText = (e) => {
    //     e.preventDefault();
    //     setFieldsSearch({
    //         ...fieldsSearch,
    //         [e.target.name]: e.target.value, 
    //     })
    // }

    function handleClick(event){
        event.preventDefault()
        console.log("Tu as cliqué sur le bouton")
        dispatch({type: SET_TOGGLE})
    }

    const handleClickClosedTag = () => {
        setTagOpened(false);
    }
     const handleSubmitForm = (e) => {
        e.preventDefault();
        searchEvent(fieldsSearch.eventTags,fieldsSearch.languages, fieldsSearch.dateFrom.formatISO, fieldsSearch.dateTo.formatISO);
    }

    const GetAllEvents = () => {
        axios.get('https://lets-be-friend.herokuapp.com/v1/events', optionsGet)
        .then((response) => {
            dispatch(setAllEvents(response.data));
            console.log('La liste de tous les events : ', response.data)
        }).catch(
            (error) => console.log('error'),
          );
    }

    const displayTags = (e) => {
        console.log('Tes dans la callback displayTags' );
        setTagOpened(true);
    }

    const searchEvent = (tagName, languagesName, startingDate, endingDate) => {
       // console.log('tagName', tagName)
        axios.post('https://lets-be-friend.herokuapp.com/v1/events/search', {
            "tagName": tagName,
            "languageName": languagesName,
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
                                <select
                                    className="searchEvent__container-select" 
                                    name='eventTags' 
                                    value={fieldsSearch.eventTags} 
                                    onChange={handleFieldSearchChange} 
                                >
                                    <option></option>
                                    {events.map((event) => (<option>{event.tags[0].name}</option>))}
                                    {/*
                                    <option id='Soirée BBQ'>Soirée BBQ</option>
                                    <option id='Atelier Cuisine'>Atelier Cuisine</option> 
                                    <option id='Soirée jeux'>Soirée jeux</option> 
                                    <option id='Sortie culturelle'>Sortie culturelle</option>
                                    <option id='Sortie Cinéma'>Sortie Cinéma</option>
                                    <option id='Moment café'>Moment café</option>
                                    <option id='Couisine'>Couisine</option>   */}
                                </select>
                        </div>
                        {/* Date from */}
                        <div className="searchEvent__container-infosDetails-location">
                            <label>From: </label>
                                <input 
                                    name='dateFrom'
                                    type='datetime-local'
                                    className="mySearchInputs"
                                    onChange={handleFieldSearchChange}
                                    value={fieldsSearch.dateFrom.formatString}
                                />
                        </div>
                        {/* Date to */}
                        <div className="searchEvent__container-infosDetails-location">
                            <label>To: </label>
                                <input 
                                    name='dateTo'
                                    type='datetime-local'
                                    className="mySearchInputs"
                                    value={fieldsSearch.dateTo.formatString}
                                    onChange={handleFieldSearchChange}               
                                />
                        </div>

                        <div className="searchEvent__container-infosDetails-location">
                            <label>languages: </label>
                                <select
                                className="searchEvent__container-select" 
                                name='languages' 
                                value={fieldsSearch.languages} 
                                onChange={handleFieldSearchChange} 
                                onClick={displayTags}>
                                    
                                    <option></option>
                                    {events.map((event) => (<option>{event.languages[0].name}</option>))}
                                    {/* <option>English</option>
                                    <option>French</option> 
                                    <option>Spanish</option> 
                                    <option>Japanese</option>
                                    <option>Mandarin</option>
                                    <option>Russian</option>
                                    <option>Italian</option>   */}
                                </select>
                        </div>
                            <div className='searchEvent__container-infosDetails-location__tag-selected'>
                                    {tagOpened && fieldsSearch.languages.map((tag) => (<Tag handleClick={handleClickClosedTag} tag={tag} name={tag} />)) }
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
                        if( event.latitude > 0 && 
                            event.latitude < 84 && 
                            event.longitude > 0 && 
                            event.longitude < 150 
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
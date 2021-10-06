/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, React, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
//Import React components
import EventCardSearch from "../../Styledcomponents/EventCardSearch";
import ButtonToggle from "../../Styledcomponents/ButtonToggle";
import Tag from "../../Styledcomponents/Tag";
import Button from '../../Styledcomponents/index'
import { resetInfosUser } from "../../../Redux/actions/profil";
//Import Tools
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

//Import styles
import "./styles.scss";
// Import axios
import axios from "axios";
// Import loading icons
import Loader from "../../Styledcomponents/Loader";
// import actions types
import { SET_TOGGLE, RESET_TOGGLE } from "../../../Redux/actions/common";
import { setAllEvents } from "../../../Redux/actions/event";
import ButtonToggleResult from "../../Styledcomponents/ButtonToggleResult";

function SearchEventContainer() {
  const toggleAction = useSelector((state) => state.common.toggleAction);
  const events = useSelector((state) => state.event.events);
  const allLanguages = useSelector((state) => state.common.allLanguages);
  const allEventTags = useSelector((state) => state.event.eventTags);
  const infosUser = useSelector((state) => state.profil.infosUser);
  const eventCardRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [openSearch, setOpenSearch] = useState(true)
  const [openResults, setOpenResults] = useState(true)
  const [fieldsSearch, setFieldsSearch] = useState({
    city: "",
    eventTags: [],
    selectedTags: [],
    languages: [],
    selectedLanguages: [],
    dateFrom: {
      formatISO: "",
      formatString: "",
    },
    dateTo: {
      formatISO: "",
      formatString: "",
    },
  });
  const provider = new OpenStreetMapProvider();
    const SearchField = () => {
    const map = useMap();
    const searchControl = new GeoSearchControl({
      provider: provider,
      autoComplete: true,
    }).addTo(map)

    
    useEffect(() => {
      map.addControl(searchControl);
      return () => {
        map.removeControl(searchControl);
      }
    }, []);
    return null;
  };

  const dispatch = useDispatch();
  const optionsGet = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  
  //Fonctionnalité, Cliquez pour rediriger vers la carte
  //const eventRedirection = useRef(null);
  
  //console.log("Tous les events:", events);
  // console.log("tout les tags:", fieldsSearch.eventTags);
  // console.log("Initialisation fieldsSearch: ", fieldsSearch);
  
  // useEffect pour recuperer tout les evenements a chaque refresh de la page
  useEffect(() => {
    dispatch({ type: RESET_TOGGLE });
  }, []);
  
  // Fonction permettant de rendre les champs controllés en fonction de l'input choisi
  function handleFieldSearchChange(e) {
    e.preventDefault();
    if (e.target.name == "dateTo" || e.target.name == "dateFrom") {
      let date = e.target.value;
      let formatDate = new Date(date);
      setFieldsSearch({
        ...fieldsSearch,
        [e.target.name]: {
          formatISO: formatDate.toISOString(),
          formatString: date,
        },
      });
    } else if (e.target.name == "eventTags" && e.target.value !== null) {
      setFieldsSearch({
        ...fieldsSearch,
        selectedTags: [...fieldsSearch.selectedTags, e.target.value],
      });
    } else if (e.target.name == "languages" && e.target.value !== null) {
      setFieldsSearch({
        ...fieldsSearch,
        selectedLanguages: [...fieldsSearch.selectedLanguages, e.target.value],
      });
    }  else if (e.target.name == "city" && e.target.value !== null) {
      setFieldsSearch({
        ...fieldsSearch,
        [e.target.name]: e.target.value,
      });
      
    } else {
      setFieldsSearch({
        ...fieldsSearch,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handleClick(event) {
    event.preventDefault();
    dispatch({ type: SET_TOGGLE });
  }

  const handleClickResults = (e) => {
    e.preventDefault();
    setOpenResults(!openResults)
  }

  //Fonction permettant de fermer les tags de l'onglet "languages" et "events"
  const handleClickClosedTag = (tag) => {
    setFieldsSearch({
      ...fieldsSearch,
      selectedLanguages: [
        ...fieldsSearch.selectedLanguages.filter(
          (language) => language !== tag
        ),
      ],
      selectedTags: [
        ...fieldsSearch.selectedTags.filter((events) => events !== tag),
      ],
    });
  };

  // Fonction permettant la soumission du formulaire
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if(fieldsSearch.selectedTags == null && fieldsSearch.selectedLanguages == null && fieldsSearch.dateFrom.formatISO == null && fieldsSearch.dateTo.formatISO == null) {
      GetAllEvents();
    }
    searchEvent(
      fieldsSearch.selectedTags,
      fieldsSearch.selectedLanguages,
      fieldsSearch.dateFrom.formatISO,
      fieldsSearch.dateTo.formatISO
    );
  };

  const handleClickParticipate = () => {
    console.log('Vous avez recup l event avec l id : ', eventCardRef.current.value)
    //userWantToParticipate();
  }

  const userWantToParticipate = () => {
    axios
    .post(
      "https://lets-be-friend.herokuapp.com/v1/events/search",
      {
        "user_id": infosUser.id,
        //"event_id": ,
      },
      optionsGet
    )
    .then((response) => {
      console.log(
        "Voici la réponse de l API pour recherche d evenements :",
        response.data
      );
      dispatch(setAllEvents(response.data));
    })
    .catch((error) => console.log("Error recherche event "));
  } 
  // Fonction afin de recuperer l'ensemble des events à partir de l'API
  const GetAllEvents = () => {
    setLoading(true);
    axios
      .get("https://lets-be-friend.herokuapp.com/v1/events", optionsGet)
      .then((response) => {
        dispatch(setAllEvents(response.data));
      })
      .catch((error) =>
        console.log("ERREUR : Je n'arrive pas à recuperer les evenements")
      ).finally(setLoading(false))};
  

  const searchEvent = (tagName, languagesName, startingDate, endingDate) => {
    setLoading(true);
    axios
      .post(
        "https://lets-be-friend.herokuapp.com/v1/events/search",
        {
          tagName: tagName,
          languageName: languagesName,
          startingDate: startingDate,
          endingDate: endingDate,
        },
        optionsGet
      )
      .then((response) => {
        console.log("Voici la réponse de l API pour recherche d evenements :",  response.data);
        if(!response.data[0].id) { 
          setOpenSearch(false)
          console.log('Aucun évènements ne correspond à votre recherche !')
        } else {
        dispatch(setAllEvents(response.data));
      }})
      .catch((error) => console.log("Error recherche event "))
      .finally(setLoading(false))
    
  };
  const history = useHistory();
  // Function permettant de se logout en reinitialisant le localStorages
  function handleLogOut() {
    dispatch(resetInfosUser());
    history.push("/");
  }

    //console.log("test asynchrone")
return (
    <div className="searchEvent__container">
      <div className={toggleAction? "header__navbar__settings-open": "header__navbar__settings"}>
        <ButtonToggle className="settings__container--toggle" name="=" handleClick={handleClick}/>
        {toggleAction ? (
          <div className="header__hamburger">
            <NavLink to="/" exact className="header__hamburger-titlePage">HOME</NavLink>
            <NavLink to="/searchEvent" className="header__hamburger-titlePage">SEARCH EVENT</NavLink>
            <NavLink to="/createEvent" className="header__hamburger-titlePage">CREATE EVENT</NavLink>
            <NavLink to="/listEvent" className="header__hamburger-titlePage">MY EVENTS</NavLink>
            <NavLink to="/profil" className="header__hamburger-titlePage">PROFIL</NavLink>
            <NavLink to="/contact" className="header__hamburger-titlePage">CONTACT</NavLink>
            {localStorage.getItem("user") ? (
              <NavLink onClick={handleLogOut} exact to="/" className="header__hamburger-disconnect">DISCONNECT</NavLink>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="searchEvent__container-form">
        <div className={openResults ? "searchEvent__container-searchForm" : 'searchEvent__container-searchForm--closed'}>
          <form id="searchForm" onSubmit={handleSubmitForm}>
            <div className="searchEvent__container-infosDetails-location">
              <label>City: </label>
              <input
                name="city"
                className="mySearchInputs"
                type="text"
                value={fieldsSearch.city}
                onChange={handleFieldSearchChange}
              />
            </div>
            <div className="searchEvent__container-infosDetails-location">
              <label>Event: </label>
              <select
                className="searchEvent__container-select"
                name="eventTags"
                value={fieldsSearch.eventTags}
                onChange={handleFieldSearchChange}
              >
                <option></option>

                {allEventTags.map((tag) => (
                  <option>{tag.name}</option>
                ))}
              </select>
            </div>
            <div className="searchEvent__container-infosDetails-location__tag-selected">
              {fieldsSearch.selectedTags.map((tag) => (
                <Tag handleClick={() => handleClickClosedTag(tag)} name={tag} />
              ))}
            </div>
            {/* Date from */}
            <div className="searchEvent__container-infosDetails-location">
              <label>From: </label>
              <input
                name="dateFrom"
                type="datetime-local"
                className="mySearchInputs"
                onChange={handleFieldSearchChange}
                value={fieldsSearch.dateFrom.formatString}
              />
            </div>
            {/* Date to */}
            <div className="searchEvent__container-infosDetails-location">
              <label>To: </label>
              <input
                name="dateTo"
                type="datetime-local"
                className="mySearchInputs"
                value={fieldsSearch.dateTo.formatString}
                onChange={handleFieldSearchChange}
              />
            </div>
            <div className="searchEvent__container-infosDetails-location">
              <label>languages: </label>
              <select
                className="searchEvent__container-select"
                name="languages"
                value={fieldsSearch.languages}
                onChange={handleFieldSearchChange}
              >
                <option></option>

                {allLanguages.map((language) => (
                  <option>{language.name}</option>
                ))}
              </select>
            </div>
            <div className="searchEvent__container-infosDetails-location__tag-selected">
              {fieldsSearch.selectedLanguages.map((tag) => (
                <Tag handleClick={() => handleClickClosedTag(tag)} name={tag} />
              ))}
            </div>
          </form>
          <div className="createEvent__container-eventTitle-button">
            <button type="submit" form="searchForm" className="myButton">
              LETS GO
            </button>
          </div>
        </div>
        <ButtonToggleResult name='^' className={openResults ? 'display-result' : 'display-result--open'} handleClick={handleClickResults} />
        {loading && <Loader />}
        <div className={openResults ? "searchEvent__container-resultsForm" : "searchEvent__container-resultsForm--open"}>
          {/* Cards for searchPage */}
          {{openSearch} && events?.map((event) => (
            <EventCardSearch key={event.id} {...event} classNameCard="searchEvent__container-resultsForm__searchEvent"/>
          ))}
        </div>
      </div>
      {/* Component Leaflet  */}
      <MapContainer center={[48.85837, 2.294481]} zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         <SearchField value={fieldsSearch.city} name= 'city'/>
        {{openSearch} && events?.map((event) => (
          <Marker key={event.id} position={[event.latitude, event.longitude]}>
            <Popup>
              <EventCardSearch key={event.id} ref={eventCardRef} {...event} classNameCard="leaflet-popup-content-wrapper__searchEvent"/>
              <div className='leaflet-popup-content-wrapper__searchEvent__description'>{event.description}</div>
              <button className='leaflet-popup-content-wrapper__searchEvent__button' onClick={handleClickParticipate} >I would like to Participate</button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
export default SearchEventContainer;

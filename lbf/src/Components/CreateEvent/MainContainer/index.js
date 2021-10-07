//Import React components
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tag from "../../Styledcomponents/Tag";
// import Input from "../../Profil/Input"
import ButtonToggle from "../../Styledcomponents/ButtonToggle";
import { resetInfosUser } from "../../../Redux/actions/profil";
// Import styles
import "./styles.scss";
// Import pictures
import imgEvent from "../../../assets/Img/sport.png";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
// import actions types
import { SET_TOGGLE, RESET_TOGGLE } from "../../../Redux/actions/common";
// import Axios
import axios from "axios";


function CreateEventContainer() {
  const allLanguages = useSelector((state)=>state.common.allLanguages)
  const allEvents = useSelector((state)=>state.event.eventTags)

  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [selectedEventTags, setSelectedEventTags] = useState([])
  // Message a la suite de la creation d'un event
  const [messageAfterSubmitted, setMessageAfterSubmitted] = useState("")
  // Condition en fonction de la creation et la soumission d"un event
  const [isSubmitted, setIsSubmitted] = useState(false)

  const infosUser = useSelector((state)=>state.profil.infosUser)

  console.log("pipipipip", infosUser)
  
  const [fieldsCreate, setFieldsCreate] = useState({
    title:"",
    location: "",
    zipCode: "",
    city: "",
    country: "",
    description: "",
    participants: "",
    dateFrom: {
      formatISO: "",
      formatString: "",
    },
    dateTo: {
      formatISO: "",
      formatString: "",
    },
  });

  console.log("Languages in Profil Page:", selectedLanguages);
  console.log("Events in Profil Page: ", selectedEventTags);

  function handleFieldsCreateChange(e) {
    e.preventDefault();

    if (e.target.name == "dateTo" || e.target.name == "dateFrom") {
      let date = e.target.value;
      let formatDate = new Date(date);
      setFieldsCreate({
        ...fieldsCreate,
        [e.target.name]: {
          formatISO: formatDate.toISOString(),
          formatString: date,
        },
      });

    } else if (e.target.name == "eventTags" && e.target.value !== null) {
      const newTagsAdded = allEvents.find((events)=> (events.name  == e.target.value))
        setSelectedEventTags([...selectedEventTags, newTagsAdded])
    } else if (e.target.name == "language" && e.target.value !== null) {
      const newLanguageAdded = allLanguages.find((language) => (language.name == e.target.value))
        setSelectedLanguages([...selectedLanguages, newLanguageAdded])
    } else {
      setFieldsCreate({
        ...fieldsCreate,
        [e.target.name]: e.target.value,
      });
    }
  }

  // console.log(fieldsCreate);

  const dispatch = useDispatch();
  const toggleAction = useSelector((state) => state.common.toggleAction);
  
  function handleClick(event) {
    event.preventDefault();
      dispatch({ type: SET_TOGGLE });
  }

  // useEffect permettant de remettre le menu hamburger a false a chaque rendu
  useEffect(() => {
    dispatch({ type: RESET_TOGGLE });
  }, []);

  const history = useHistory();

  function handleLogOut() {
    dispatch(resetInfosUser());
    history.push("/");
  }

  const handleClickClosedLanguage = (language) => {
    setSelectedLanguages(selectedLanguages.filter(selectedlanguage => selectedlanguage.name !== language.name))
  };

  const handleClickClosedEvents = (events) => {
    setSelectedEventTags(selectedEventTags.filter(selectedEventTags => selectedEventTags.name !== events.name))
  };

  const optionsGet = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const handleSubmitForm = (e) =>{
    e.preventDefault()
    createEvent()
    setMessageAfterSubmitted("Thank you your event has been created")
    setIsSubmitted(true)
  }

  const createEvent = () => {
    console.log('Le body de la requete create event : ', {
    "title": fieldsCreate.title,
    "starting_date": fieldsCreate.dateFrom.formatISO,
    "ending_date": fieldsCreate.dateTo.formatISO,
    "places_left":  Number(fieldsCreate.participants),
    "description": fieldsCreate.description,
    "city": fieldsCreate.city,
    "country": fieldsCreate.country,
    "zipCode": fieldsCreate.zipCode,
    "location": fieldsCreate.location,
    "user_id": infosUser.id,
    "eventLanguage": selectedLanguages.map(language => language.id),
    "tagId": selectedEventTags.map(tag => tag.id)
    
  })
    axios
      .post(
        "https://lets-be-friend.herokuapp.com/v1/events",
        {
          "title": fieldsCreate.title,
          "city": fieldsCreate.city,
          "country": fieldsCreate.country,
          "location": fieldsCreate.location,
          "user_id": infosUser.id,
          "zipCode": fieldsCreate.zipCode,
          "description": fieldsCreate.description,
          "eventLanguage": selectedLanguages.map(language => language.id),
          "tagId": selectedEventTags.map(tag => tag.id),
          "starting_date": fieldsCreate.dateFrom.formatISO,
          "ending_date": fieldsCreate.dateTo.formatISO,
          "places_left": Number(fieldsCreate.participants) 
        },
        optionsGet
      )
      .then((response) => {
        console.log("API CREATE:", response.data)
      })
      .catch((error) => console.log("Error de create event"));
  };

  return (
    <div className="createEvent__container">

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
              ) : ("")}
          </div>
        ) : ("")}

      </div>
      <div className="mainCreateEvent__container">

        {!isSubmitted ? 
        <>
        <div className="createEvent__container-infosDetails">
          <form id="registerForm" onSubmit={handleSubmitForm}>
            <div className="globale">

{/* Left part of the form */}
              <div className="first">
                  <div className="createEvent__container-infosDetails-location" id="div-location">
                      <label>Title: </label>
                      <input
                        name="title"
                        className="myInputs"
                        type="text"
                        value={fieldsCreate.title}
                        onChange={handleFieldsCreateChange}
                      />
                    </div>

                    <div
                      className="createEvent__container-infosDetails-location"
                      id="div-location"
                    >
                      <label>Location: </label>
                      <input
                        name="location"
                        className="myInputs"
                        type="text"
                        value={fieldsCreate.location}
                        onChange={handleFieldsCreateChange}
                      />
                    </div>
                    <div
                      className="createEvent__container-infosDetails-location"
                      id="div-location"
                    >
                      <label>Zip code: </label>
                      <input
                        name="zipCode"
                        className="myInputs"
                        type="number"
                        value={fieldsCreate.zipCode}
                        onChange={handleFieldsCreateChange}
                      />
                    </div>
                    <div
                      className="createEvent__container-infosDetails-location"
                      id="div-location"
                    >
                      <label>City: </label>
                      <input
                        name="city"
                        className="myInputs"
                        type="text"
                        value={fieldsCreate.city}
                        onChange={handleFieldsCreateChange}
                      />
                    </div>
                    <div
                      className="createEvent__container-infosDetails-location"
                      id="div-location"
                    >
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
                      <label className="createEvent__container-infosDetails-calendar-label">
                        Date from:{" "}
                      </label>
                      <input
                        type="datetime-local"
                        name="dateFrom"
                        className="myInputs"
                        value={fieldsCreate.dateFrom.formatString}
                        onChange={handleFieldsCreateChange}
                      />
                    </div>
                    <div className="createEvent__container-infosDetails-calendar">
                      <label className="createEvent__container-infosDetails-calendar-label">
                        Date to:{" "}
                      </label>
                      <input
                        type="datetime-local"
                        name="dateTo"
                        className="myInputs"
                        value={fieldsCreate.dateTo.formatString}
                        onChange={handleFieldsCreateChange}
                      />
                    </div>
                    <div className="createEvent__container-infosDetails-location">
                      <label>Theme: </label>
                        <select
                          className="myInputs"
                          name="eventTags"
                          value={fieldsCreate.eventTags}
                          onChange={handleFieldsCreateChange}
                        >
                          <option></option>
                            {allEvents.map((event)=>(
                                <option>{event.name}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="searchEvent__container-infosDetails-location__tag-selected">
                      {selectedEventTags.map((events) => (
                        <Tag handleClick={() =>handleClickClosedEvents(events)} name={events.name} />
                      ))}
                    </div>

                    <div className="createEvent__container-infosDetails-location">
                      <label>Language: </label>
                        <select
                          className="myInputs"
                          name="language"
                          value={selectedLanguages}
                          onChange={handleFieldsCreateChange}
                        >
                          <option></option>
                            {allLanguages.map((language)=>(
                              <option>{language.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="searchEvent__container-infosDetails-location__tag-selected">
                      {selectedLanguages.map((language) => (
                        <Tag handleClick={() =>handleClickClosedLanguage(language)} name={language.name} />
                      ))}
                    </div>

                    <div className="createEvent__container-infosDetails-participants">
                      <label>Nombre de participants: </label>
                      <select
                        className="createEvent__container-infosDetails-location"
                        name="participants"
                        value={fieldsCreate.participants}
                        onChange={handleFieldsCreateChange}
                      >
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
                  </div>

{/* Right part of the form */}
                  <div className="second">
                      <div className="createEvent__container-eventTitle-img">
                        <img className="createEvent-img" src={imgEvent} alt="imageEvent" />
                      </div>

                      <div className="createEvent__container-eventTitle-button">
                          <button type="submit" form="registerForm" className="myButton">LETS GO</button>
                      </div>
                  </div>

            </div>
          </form>
        </div>
          </>
           : 
        <>
              <div className="mainCreateEvent__container-success">
                {messageAfterSubmitted}
              </div>
        </>
        }
      </div>
    </div>
  );
}
export default CreateEventContainer;
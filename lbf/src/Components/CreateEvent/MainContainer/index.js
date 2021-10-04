import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//Import React components
// import Input from "../../Profil/Input"
import ButtonToggle from "../../Styledcomponents/ButtonToggle";
// Import styles
import "./styles.scss";
// Import pictures
import imgEvent from "../../../assets/Img/sport.png";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

// import actions types
import { SET_TOGGLE, RESET_TOGGLE } from "../../../Redux/actions/common";

function CreateEventContainer() {
  const [fieldsCreate, setFieldsCreate] = useState({
    location: "",
    zipCode: "",
    city: "",
    country: "",
    description: "",
    eventTags: [],
    language: [],
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

      console.log("test", fieldsCreate.eventTags);
    } else if (e.target.name == "eventTags") {
      setFieldsCreate({
        ...fieldsCreate,
        eventTags: [...fieldsCreate.eventTags, e.target.value],
      });
    } else if (e.target.name == "language") {
      setFieldsCreate({
        ...fieldsCreate,
        language: [...fieldsCreate.language, e.target.value],
      });
    } else {
      setFieldsCreate({
        ...fieldsCreate,
        [e.target.name]: e.target.value,
      });
    }
  }

  console.log(fieldsCreate);

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
    localStorage.clear();
    history.push("/home");
  }

  return (
    <div className="createEvent__container">
      <div
        className={
          toggleAction
            ? "header__navbar__settings-open"
            : "header__navbar__settings"
        }
      >
        <ButtonToggle
          className="settings__container--toggle"
          name="="
          handleClick={handleClick}
        />

                    <form id="registerForm">
                        <div className="createEvent__container-infosDetails-location" id="div-location">
                            <label className="createEvent__container-label">Location: </label>
                            <input
                                name="location"
                                className="myInputs"
                                type="text"
                                value={fieldsCreate.location}
                                onChange={handleFieldsCreateChange}
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-location" id="div-location">
                            <label className="createEvent__container-label">ZipCode: </label>
                            <input
                                name="zipCode"
                                className="myInputs"
                                type="number"
                                value={fieldsCreate.zipCode}
                                onChange={handleFieldsCreateChange}
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-location" id="div-location">
                            <label className="createEvent__container-label">City: </label>
                            <input
                                name="city"
                                className="myInputs"
                                type="text"
                                value={fieldsCreate.city}
                                onChange={handleFieldsCreateChange}
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-location" id="div-location">
                            <label className="createEvent__container-label">Country: </label>
                            <input
                                name="country"
                                className="myInputs"
                                type="text"
                                value={fieldsCreate.country}
                                onChange={handleFieldsCreateChange}
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-calendar">
                            <label className="createEvent__container-infosDetails-calendar-label" >From: </label>
                            <input 
                                type="datetime-local"
                                name="dateFrom"
                                className="myInputs"
                                value={fieldsCreate.dateFrom.formatString}
                                onChange={handleFieldsCreateChange}
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-calendar">
                            <label className="createEvent__container-infosDetails-calendar-label">To: </label>
                            <input 
                                type="datetime-local"
                                name="dateTo"
                                className="myInputs"
                                value={fieldsCreate.dateTo.formatString}
                                onChange={handleFieldsCreateChange}
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-location" id="createEvent__label">
                            <label className="createEvent__container-label">Theme: </label>
                            <select 
                                className="myInputs"
                                name='eventTags' 
                                value={fieldsCreate.eventTags} 
                                onChange={handleFieldsCreateChange} >
                                    <option></option>
                                    <option >Soirée BBQ</option>
                                    <option >Atelier Cuisine</option>
                                    <option >Soirée jeux</option>
                                    <option >Sortie culturelle</option>
                                    <option >Sortie Cinéma</option>
                                    <option >Moment café</option>
                                    <option >Couisine</option>
                                </select>
                        </div>

                        <div className="createEvent__container-infosDetails-location" id="createEvent__label">
                            <label className="createEvent__container-label">Language: </label>
                            <select
                                className="myInputs"
                                id="createEvent__label"
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

                        <div className="createEvent__container-infosDetails-location" id="createEvent__label" >
                            <label className="createEvent__container-label">Nombre de participants: </label>
                            <select
                                className="createEvent__container-infosDetails-location"
                                id="createEvent__label"
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

            <div className="createEvent__container-infosDetails-location">
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

                        <div className="createEvent__container-infosDetails-location" id="createEvent-textArea">
                            <label>Description:</label>
                            <textarea
                                name="description"
                                className="myInputs"
                                id="createEvent-textArea-width"
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
            <button type="submit" form="registerForm" className="myButton">
              LETS GO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEventContainer;

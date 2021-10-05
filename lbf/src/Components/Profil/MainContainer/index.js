//eslint-disable react-hooks/exhaustive-deps
// Import styles
import "./styles.scss";
//import ReactComponents
import ButtonToggle from "../../Styledcomponents/ButtonToggle";
import Avatar from "../../Styledcomponents/Avatar";
import Tag from "../../Styledcomponents/Tag";
import { resetInfosUser } from "../../../Redux/actions/profil";
// Import Modules
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
//Actions
import avatarMicheline from "../../../assets/Img/micheline.jpg";
import { useDispatch, useSelector } from "react-redux";
// import actions types
import {
  SET_TOGGLE,
  RESET_TOGGLE,
  setLanguages,
  setLanguagesToLearn,
} from "../../../Redux/actions/common";
import { setEventTags } from "../../../Redux/actions/event";
import { useEffect, useState } from "react";

function ProfilContainer() {
  const infosUser = useSelector((state) => state.profil.infosUser);
  
  const [fieldsCreateProfil, setFieldsCreateProfil] = useState({
    firstname: infosUser.firstname,
    lastname: infosUser.lastname,
    city: infosUser.city,
    mail: infosUser.email,
    language_spoken: [],
    language_toLearn: [],
    age: infosUser.age,
    description: infosUser.description,
  });
  
  const optionsAxios = useSelector((state) => state.common.optionsAxios);
  const allLanguages = useSelector((state) => state.common.allLanguages);
  
  const [myLearningLanguages, setMyLearningLanguages] = useState([]);
  const [myLanguagesSpoken, setMyLanguagesSpoken] = useState([]);
 //const [myNewLearningLanguagesSelected, setMyNewLearningLanguagesSelected] = useState(myLearningLanguages);
  //const [myNewLanguagesSpokenSelected, setNewMyLanguagesSpokenSelected] = useState(myLanguagesSpoken);
  const initializeMyLanguages = () => {
      setMyLanguagesSpoken(infosUser.speakingLanguage);
      setMyLearningLanguages(infosUser.learningLanguage);
  }
  console.log('user Infos : ', infosUser)

  console.log('myLearningLanguages : ', myLearningLanguages)
  //console.log('myLanguagesSpoken : ', myLanguagesSpoken)
  //console.log('allLanguages : ', allLanguages)
  //console.log("infos page profil: ", infosUser)
  //console.log("Tous les event Tag : ", allEventTags);
  //  function permettant d'obtenir plusieurs valeurs dans une valeur sous forme de tableau
  function handleFielsProfilChange(e) {
    if (e.target.name == "language_spoken" && e.target.value !== null) {
      setFieldsCreateProfil({
        ...fieldsCreateProfil,
        language_spoken: [...fieldsCreateProfil.language_spoken,  e.target.value],
      });
      const newLanguageSpokenAdded = allLanguages.find((language) => (language.name == e.target.value))
      setMyLanguagesSpoken([...myLanguagesSpoken, newLanguageSpokenAdded]);
    } else if (e.target.name == "language_toLearn" && e.target.value !== null) {
      // setFieldsCreateProfil({
      //   ...fieldsCreateProfil,
      //   language_toLearn: [...fieldsCreateProfil.language_toLearn, e.target.value],
      // });
      const newLearningLanguageAdded = allLanguages.find((language) => (language.name == e.target.value))
      setMyLearningLanguages([...myLearningLanguages, newLearningLanguageAdded]);
    } else {
      setFieldsCreateProfil({
        ...fieldsCreateProfil,
        [e.target.name]: e.target.value,
      });
    }
  }

  useEffect(() => {
    dispatch({ type: RESET_TOGGLE });
    getLanguages();
    getEventsTags();
    initializeMyLanguages();
  }, []);

  //console.log(fieldsCreateProfil)
  function handleSubmit(e) {
    e.preventDefault();
    updateProfil();
  }
  const dispatch = useDispatch();

  const toggleAction = useSelector((state) => state.common.toggleAction);
  
  function handleClick(event) {
    event.preventDefault();
    //console.log("Tu as cliqué sur le bouton");
    dispatch({ type: SET_TOGGLE });
  }
//Fonction permettant de fermer les tags de l'onglet "learning languages" 
  const handleClickClosedTagLearningLanguage = (language) => {
   console.log('newLearningLanguageCanceled : ', language)
      setMyLearningLanguages(myLearningLanguages.filter(learningLanguage => learningLanguage.name !== language.name))
  };
  //Fonction permettant de fermer les tags de l'onglet " languages spoken" 
  const handleClickClosedTagLanguageSpoken = (language) => {
    console.log('newLanguageSpokenCanceled : ', language)
       setMyLanguagesSpoken(myLanguagesSpoken.filter(languageSpoken => languageSpoken.name !== language.name))
   };

  // useEffect permettant de remettre le menu hamburger a false a chaque rendu
  const history = useHistory();

  function handleLogOut() {
    dispatch(resetInfosUser());
    history.push("/");
  }

  const getLanguages = () => {
    axios
      .get("https://lets-be-friend.herokuapp.com/v1/languages", optionsAxios)
      .then((response) => {
        console.log(
          "Voici la réponse de l API les tous Languages :",
          response.data
        );
        dispatch(setLanguages(response.data));
        dispatch(setLanguagesToLearn(response.data));
      })
      .catch((error) => console.log("Error recherche users "));
  };
  
  const getEventsTags = () => {
    axios
      .get("https://lets-be-friend.herokuapp.com/v1/tags", optionsAxios)
      .then((response) => {
        dispatch(setEventTags(response.data));
      })
      .catch((error) => console.log("Error recherche users "));
  };


  const updateProfil = () => {
      console.log('Body de la Request : ', {
        "id": infosUser.id,
        "firstname": fieldsCreateProfil.firstname,
        "lastname": fieldsCreateProfil.lastname,
        "email": fieldsCreateProfil.mail,
        "bio": fieldsCreateProfil.description,
        "age": fieldsCreateProfil.age,
        "learningLanguage": myLearningLanguages.map(language => language.id),
        "speakingLanguage": myLanguagesSpoken.map(language => language.id),
        "city": fieldsCreateProfil.city,
    })
      axios.patch('https://lets-be-friend.herokuapp.com/v1/users', {
          "id": infosUser.id,
          "firstname": fieldsCreateProfil.firstname,
          "lastname": fieldsCreateProfil.lastname,
          "gender": fieldsCreateProfil.gender,
          "email": fieldsCreateProfil.mail,
          "description": fieldsCreateProfil.description,
          "age": fieldsCreateProfil.age,
          "learningLanguage": myLearningLanguages.map(language => language.id),
          "speakingLanguage": myLanguagesSpoken.map(language => language.id),
          "city": fieldsCreateProfil.city
      }, optionsAxios)
          .then((response) => {
              console.log('Voici la réponse de l API pour l update du profil :', response.data);
              //dispatch(setAllEvents(response.data));
          }).catch(error => console.log('Error recherche event '));
      }

  return (
    <div className="profil__container">
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
        {toggleAction ? (
          <div className="header__hamburger">
            <NavLink to="/" exact className="header__hamburger-titlePage">
              HOME
            </NavLink>
            <NavLink to="/searchEvent" className="header__hamburger-titlePage">
              SEARCH EVENT
            </NavLink>
            <NavLink to="/createEvent" className="header__hamburger-titlePage">
              CREATE EVENT
            </NavLink>
            <NavLink to="/listEvent" className="header__hamburger-titlePage">
              MY EVENTS
            </NavLink>
            <NavLink to="/profil" className="header__hamburger-titlePage">
              PROFIL
            </NavLink>
            <NavLink to="/contact" className="header__hamburger-titlePage">
              CONTACT
            </NavLink>
            {localStorage.getItem("user") ? (
              <NavLink
                onClick={handleLogOut}
                exact
                to="/"
                className="header__hamburger-disconnect"
              >
                DISCONNECT
              </NavLink>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="mainProfil__container">
        <div className="profil__container-avatars">
          <Avatar
            customDiv={"profil__container-avatar"}
            customImg={"profil__container-pictures"}
            customPics={infosUser.imgUrl}
          />
          <h2 className="profil-genre">No binary</h2>
          <h2 className="profil-telNumber">Tel: 07 85 11 25 18</h2>
          <button
            form="myProfilForm"
            type="submit"
            className="myButton-deleted"
            id="deletedButton"
          >
            DELETE MY ACCOUNT
          </button>
        </div>
        <form
          className="profil__container-data"
          id="myProfilForm"
          onSubmit={handleSubmit}
        >
          <div className="profil__container-data">
            <div className="myInputs-profilPage">
              <label className="myInputs-ProfilPage-label">Firstname:</label>
              <input
                className="myInputs-profilPage-input"
                name="firstname"
                type="text"
                value={fieldsCreateProfil.firstname}
                onChange={handleFielsProfilChange}
                placeholder={fieldsCreateProfil.firstname}
              />
            </div>
            <div className="myInputs-profilPage">
              <label className="myInputs-ProfilPage-label">Lastname:</label>
              <input
                className="myInputs-profilPage-input"
                name="lastname"
                type="text"
                value={fieldsCreateProfil.lastname}
                onChange={handleFielsProfilChange}
                placeholder={fieldsCreateProfil.lastname}
              />
            </div>
            <div className="myInputs-profilPage">
              <label className="myInputs-ProfilPage-label">Age:</label>
              <input
                className="myInputs-profilPage-input"
                name="age"
                type="number"
                value={fieldsCreateProfil.age}
                onChange={handleFielsProfilChange}
                placeholder={fieldsCreateProfil.age}
              />
            </div>
            <div className="myInputs-profilPage">
              <label className="myInputs-ProfilPage-label">City:</label>
              <input
                className="myInputs-profilPage-input"
                name="adress"
                type="text"
                value={fieldsCreateProfil.city}
                onChange={handleFielsProfilChange}
                placeholder={fieldsCreateProfil.city}
              />
            </div>
            <div className="myInputs-profilPage">
              <label className="myInputs-ProfilPage-label">Mail:</label>
              <input
                className="myInputs-profilPage-input"
                name="mail"
                type="email"
                value={fieldsCreateProfil.email}
                onChange={handleFielsProfilChange}
                placeholder={fieldsCreateProfil.email}
              />
            </div>
            <div className="myInputs-profilPage">
              <label className="myInputs-ProfilPage-label">
                Language spoken:
              </label>
              <select
                className="myInputs-profilPage-input"
                name="language_spoken"
                value={fieldsCreateProfil.language_spoken}
                onChange={handleFielsProfilChange}
              >
                <option></option>
                {allLanguages.map((language) => (
                  <option>{language.name}</option>
                ))}
                {/* <option>English</option>
                                        <option>French</option>
                                        <option>Spanish</option>
                                        <option>Japanese</option>
                                        <option>Mandarin</option>
                                        <option>Russian</option>
                                        <option>Italian</option> */}
              </select>
            </div>
            <div className="searchEvent__container-infosDetails-location__tag-selected">
              {myLanguagesSpoken.map((language) => (
                <Tag handleClick={() => handleClickClosedTagLanguageSpoken(language)} key={language.id} name={language.name} />
              ))}
            </div>
            <div className="myInputs-profilPage">
              <label className="myInputs-ProfilPage-label">
                Language to learn:
              </label>
              <select
                className="myInputs-profilPage-input"
                name="language_toLearn"
                value={myLearningLanguages}
                onChange={handleFielsProfilChange}
              >
                <option></option>
                {allLanguages.map((language) => (
                  <option>{language.name}</option>
                ))}
                {/* <option>English</option>
                                        <option>French</option>
                                        <option>Spanish</option>
                                        <option>Japanese</option>
                                        <option>Mandarin</option>
                                        <option>Russian</option>
                                        <option>Italian</option> */}
              </select>
            </div>
            <div className="searchEvent__container-infosDetails-location__tag-selected">
              {myLearningLanguages.map((language) => (
                <Tag handleClick={() => handleClickClosedTagLearningLanguage(language)} key={language.id} name={language.name} />
              ))}
            </div>
            <div
              className="myInputs-profilPage"
              id="profil__description-textArea"
            >
              <label className="myInputs-ProfilPage-label">Description:</label>
              <div className="profil__textContent">
                <textarea
                  type="textarea"
                  className="profil__textContent-text"
                  name="description"
                  value={fieldsCreateProfil.description}
                  onChange={handleFielsProfilChange}
                  placeholder={fieldsCreateProfil.description}
                />
              </div>
            </div>
            <div className="profil__myButtons">
              <button type="submit" className="myButton-validate" >
                VALIDATE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ProfilContainer;
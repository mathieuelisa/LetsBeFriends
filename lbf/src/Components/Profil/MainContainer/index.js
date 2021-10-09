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

  // Pictures post cloudinary
  const [imageUrl, setImageUrl] = useState("")

  console.log("voici l'url de mon image:", imageUrl)

  const infosUser = useSelector((state) => state.profil.infosUser);

  console.log("les datas de mon store user", infosUser)
  
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

  console.log("ce qui ya dans fieldsCreateProfil", fieldsCreateProfil)
  
  const optionsAxios = useSelector((state) => state.common.optionsAxios);
  const allLanguages = useSelector((state) => state.common.allLanguages);
  
  const [myLearningLanguages, setMyLearningLanguages] = useState([]);
  const [myLanguagesSpoken, setMyLanguagesSpoken] = useState([]);

  // Message a la suite de la creation d'un event
  const [messageAfterSubmitted, setMessageAfterSubmitted] = useState("")
  // Condition en fonction de la creation et la soumission d"un event
  const [isSubmitted, setIsSubmitted] = useState(false)


  const initializeMyLanguages = () => {
      setMyLanguagesSpoken(infosUser.speakingLanguage);
      setMyLearningLanguages(infosUser.learningLanguage);
  }

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
    setMessageAfterSubmitted("Your profil have been updated")
    setIsSubmitted(true)
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

  let myVariable = {
    "id": infosUser.id,
          "firstname": fieldsCreateProfil.firstname,
          "lastname": fieldsCreateProfil.lastname,
          "gender": fieldsCreateProfil.gender,
          "email": fieldsCreateProfil.mail,
          "description": fieldsCreateProfil.description,
          "age": fieldsCreateProfil.age,
          "learningLanguage": myLearningLanguages.map(language => language.id),
          "speakingLanguage": myLanguagesSpoken.map(language => language.id),
          "city": fieldsCreateProfil.city,
          "img_url": imageUrl,
  }

  // Fonction stripped permettant de supprimer les strings vide pour update un profil avec uniquement une photo ou uniquement un input
  const stripped = Object.fromEntries(Object.entries(myVariable).filter(value => value[1]))

  const updateProfil = () => {
      console.log('Body de la Request : ', {
        "id": infosUser.id,
        "firstname": fieldsCreateProfil.firstname,
        "lastname": fieldsCreateProfil.lastname,
        "email": fieldsCreateProfil.mail,
        "description": fieldsCreateProfil.description,
        "age": fieldsCreateProfil.age,
        "learningLanguage": myLearningLanguages.map(language => language.id),
        "speakingLanguage": myLanguagesSpoken.map(language => language.id),
        "city": fieldsCreateProfil.city,
        "img_url": imageUrl
    })

      axios.patch('https://lets-be-friend.herokuapp.com/v1/users', stripped, optionsAxios)
        .then((response) => {
            console.log('Voici la réponse de l API pour lupdate du profil :', response.data);
        }).catch(error => console.log('Error recherche event '));
      }

      const uploadImage = (e) =>{
        const files = e.target.files[0]    
        const formData = new FormData();
              formData.append("file", files)
              formData.append("upload_preset", "dev_setups")
    
          axios.post(
            "https://api.cloudinary.com/v1_1/lbfcloud/image/upload",formData)
            .then(res=>setImageUrl(res.data.secure_url))
            .then(response=>console.log("la reponse de cloudinary:", response.data))
            .catch((err)=>console.log(err))
        }

  return (
    <div className="profil__container">

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
        ) : (
          ""
        )}
      </div>
      <div className="mainProfil__container">
      {!isSubmitted ? 
        <>
        <div className="profil__container-avatars">
          <Avatar
            customDiv={"profil__container-avatar"}
            customImg={"profil__container-pictures"}
            // customPics={infosUser.imgUrl}
            customPics={infosUser.imgUrl}
          />
            <input className="createEvent__container-eventTitle-uploadInput" type="file" onChange={uploadImage}/> 
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
        <form className="profil__container-data" id="myProfilForm" onSubmit={handleSubmit}>
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
export default ProfilContainer;
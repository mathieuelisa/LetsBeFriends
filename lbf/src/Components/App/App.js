import { Route, Switch } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setAllEvents, setEventTags } from "../../Redux/actions/event"
import { setLanguages, setLanguagesToLearn } from "../../Redux/actions/common"
// Import styles
import './app.scss';
// Components
import HomePage from '../Home';
import ProfilPage from "../Profil";
import ContactPage from "../Contact";
import CreateEventPage from "../CreateEvent";
import SearchEventPage from "../SearchEvent";
import ListEventPage from "../ListingEvent";
import ErrorPage from "../Error404";


function App() {

    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()
    const events = useSelector((state) => state.event.events);
    const allLanguages = useSelector((state) => state.common.allLanguages);
    const allEventTags = useSelector((state) => state.event.eventTags);
    const optionsAxios = useSelector((state) => state.common.optionsAxios);

    const GetAllEvents = () => {
        axios
          .get("https://lets-be-friend.herokuapp.com/v1/events", optionsAxios)
          .then((response) => {
            dispatch(setAllEvents(response.data));
            console.log("La liste de tous les events : ", response.data);
          })
          .catch((error) =>
            console.log("ERREUR : Je n'arrive pas à recuperer les evenements")
          )
      };
      
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

       useEffect(() => {
         GetAllEvents();
         getLanguages();
         getEventsTags();
        }, [])

      if(events !== null && allLanguages !== null && allEventTags !== null && loader == false) {
           setLoader(!loader);
       }





  return (
    {loader} && <div className="App">
    <Switch> 
        <Route path="/" exact>
            <HomePage />
        </Route>

        <Route path="/profil" exact>
            <ProfilPage />
        </Route>

        <Route path="/createEvent" exact>
            <CreateEventPage />
        </Route>

        <Route path="/searchEvent" exact>
            <SearchEventPage />
        </Route>

        <Route path="/listEvent" exact>
            <ListEventPage />
        </Route>

        <Route path="/contact" exact>
            <ContactPage />
        </Route>

        <Route>
            <ErrorPage />
        </Route>
    </Switch>

    </div>
  );
    
}

export default App;

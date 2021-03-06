import { Route, Switch } from "react-router-dom"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setAllEvents, setEventTags, setUserEventsById, setAskingList } from "../../Redux/actions/event"
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
import MentionsPage from "../MentionsLegales"


function App() {

    const [loader, setLoader] = useState(false)
    
    const dispatch = useDispatch()
    const events = useSelector((state) => state.event.events);
    const allLanguages = useSelector((state) => state.common.allLanguages);
    const allEventTags = useSelector((state) => state.event.eventTags);
    const optionsAxios = useSelector((state) => state.common.optionsAxios);
    const idUser = useSelector((state)=>state.profil.infosUser.id)
    const askingList = useSelector(state => state.event.askingList)
    const dataEvents  = useSelector(state => state.event.dataEvents)

    const GetAllEvents = () => {
        axios
          .get("https://lets-be-friend.herokuapp.com/v1/events", optionsAxios)
          .then((response) => {
            console.log("All events APP: ", response.data)
            dispatch(setAllEvents(response.data));
          })
          .catch((error) =>
            console.log("ERREUR : I can't get all the events")
          )
      };
      
      const getLanguages = () => {
        axios
          .get("https://lets-be-friend.herokuapp.com/v1/languages", optionsAxios)
          .then((response) => {
            dispatch(setLanguages(response.data));
            dispatch(setLanguagesToLearn(response.data));
          })
          .catch((error) => console.log("Error about languages"));
      };
      
      const getEventsTags = () => {
        axios
          .get("https://lets-be-friend.herokuapp.com/v1/tags", optionsAxios)
          .then((response) => {
            dispatch(setEventTags(response.data));
          })
          .catch((error) => console.log("Error about tags"));
      };

      const GetUserEventsById = () => {
        axios
          .get(`https://lets-be-friend.herokuapp.com/v1/users/${idUser}`, optionsAxios)
          .then((response) => {
            dispatch(setUserEventsById(response.data.event));
            console.log("MyEvents APP: ", response.data.event)
          })
          .catch((error) => {
            console.log(`ERREUR : I can't catch all the data form the user ${idUser}`)
            dispatch(setUserEventsById([]))
          })
      };

      const getAskingRequestToMyEvents = () => {
        axios
        .get(`https://lets-be-friend.herokuapp.com/v1/events/request/${idUser}`, optionsAxios)
        .then((response) => {
          dispatch(setAskingList(response.data));
          console.log("askingList APP: ", response.data)
        })
        .catch((error) => {
          //console.log(`ERREUR : I can't catch all the data from the user ${infosUser.id}`)
          console.log('Message error: ', error)
          dispatch(setAskingList([]))
      
        }) 
      }

       useEffect(() => {
         GetAllEvents();
         getLanguages();
         getEventsTags();
         GetUserEventsById();
         getAskingRequestToMyEvents();
        }, [])


      if(events !== null && allLanguages !== null && allEventTags !== null && askingList.length > 0 && loader === false && askingList !== undefined && dataEvents !== null) {
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

        <Route path="/mentions" exact>
            <MentionsPage />
        </Route>

        <Route>
            <ErrorPage />
        </Route>
    </Switch>

    </div>
  );
    
}

export default App;

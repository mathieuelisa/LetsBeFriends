import { Route, Switch } from "react-router-dom"
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

    // const commonLoading = useSelector((state)=> state.common.loading) // true when App is first initialized
    // // en theorie il faut plutot un ENUM qu'un booléen : IS_LOADING/NOT_LOADING/LOADED   (voir documentation REDUX)

    // if(commonLoading) {
    //     return <LoadingApp />
    // } else {
  return (
    <div className="App">
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
            <ErrorPage/>
            </Route>
    </Switch>

    </div>
  );
    
}

export default App;

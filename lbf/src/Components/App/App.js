import { Route } from "react-router-dom"
// Import styles
import './app.scss';
// Components
import HomePage from '../Home';
import ProfilPage from "../Profil";
import ContactPage from "../Contact";
import CreateEventPage from "../CreateEvent";
import SearchEventPage from "../SearchEvent";
import ListEventPage from "../ListingEvent";

function App() {
  return (
   
    <div className="App">
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
    </div>
  );
}

export default App;

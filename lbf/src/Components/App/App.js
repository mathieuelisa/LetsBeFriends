import { Route } from "react-router-dom"

import HomePage from '../Home';
import ProfilPage from "../Profil";
import ContactPage from "../Contact";
import './app.scss';
import CreateEventPage from "../CreateEvent";
import SearchEventPage from "../SearchEvent";

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

      <Route path="/contact" exact>
          <ContactPage />
      </Route>

      <Route path="/searchEvent" exact>
          <SearchEventPage />
      </Route>
    </div>
  );
}

export default App;

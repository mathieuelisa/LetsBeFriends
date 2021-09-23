import { Route } from "react-router-dom"

import HomePage from '../Home';
import ProfilPage from "../Profil";
import ContactPage from "../Contact";
import './app.scss';
import CreateEventPage from "../CreateEvent";

function App() {
  return (
   
    <div className="App">
      <Route path="/" exact>
          <HomePage />
      </Route>

      <Route path="/profil" exact>
          <ProfilPage />
      </Route>

      <Route>
          <CreateEventPage path="/searchEvent" exact/>
      </Route>

      <Route path="/contact" exact>
          <ContactPage />
      </Route>
    </div>
  );
}

export default App;

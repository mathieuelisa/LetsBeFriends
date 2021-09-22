import { Route } from "react-router-dom"

import HomePage from '../Home';
import ProfilPage from "../Profil";
import ContactPage from "../Contact";
import './app.scss';

function App() {
  return (
    // Ici devra etre mis l'ensemble des pages de notre site sous forme de Routes
    <div className="App">

    <Route path="/" exact>
        <HomePage />
    </Route>

    <Route path="/profil" exact>
        <ProfilPage />
    </Route>

    <Route path="/contact" exact>
        <ContactPage />
    </Route>
    </div>
  );
}

export default App;

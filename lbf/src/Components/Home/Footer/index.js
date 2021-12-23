import "./styles.scss";

//import React Composants
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="styles">
    <div className="mentions">
      <Link to="/contact" className="mentions__contact">
        Contact
      </Link>
      <Link to="/mentions" className="mentions__legales">
        Mentions Légales
      </Link>
    </div>
  </div>
);

export default Footer;

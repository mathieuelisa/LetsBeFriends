import "./styles.scss";
// Import components
import ButtonModal from "../../Styledcomponents";
import ButtonToggle from "../../Styledcomponents/ButtonToggle";

import PropTypes from "prop-types";
// Import modules
import { NavLink } from "react-router-dom";
// Import actions
import { SET_TOGGLE, RESET_TOGGLE } from "../../../Redux/actions/common";
import { resetInfosUser } from "../../../Redux/actions/profil";
// Import modules
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../../../assets/Logo/LOGO_LBF.png"

// Import react reveal components
import Fade from 'react-reveal/Fade';

toast.configure()

const Header = ({ openModalLogin, openModalSignup }) => {
  const dispatch = useDispatch();
  const toggleAction = useSelector((state) => state.common.toggleAction);

  const infosUser = useSelector((state) => state.profil.infosUser);

  function handleClick(event) {
    event.preventDefault();
    dispatch({ type: SET_TOGGLE });

    if (toggleAction == true ) {
      document.body.setAttribute('style', `overflow: null`)
    } else {
      document.body.setAttribute('style', `overflow: hidden`)
    }
  }

  // useEffect permettant de remettre le menu hamburger a false a chaque rendu
  useEffect(() => {
    dispatch({ type: RESET_TOGGLE });
  }, []);

  // useEffect permettant d'avoir le titre de l'application dans le navigateur
  useEffect(() => {
    document.title ="Let's Be Friends | Website for having fun while learning a new language...";
  }, []);

  const history = useHistory();

  function handleLogOut() {
    dispatch(resetInfosUser());
    toast.success(`${infosUser.firstname}, you are logged out !`, {position: toast.POSITION.BOTTOM_LEFT})
    
    history.push("/");
  }
 
  return (
    <div className="header">
      <Fade delay={1500} duration={2000}>
        <div className="header__container">
          <img className="header__container-logo" alt="logo" src={Logo}/>
        </div>
      </Fade>
      <div className="header__navbar">
        {/* Si un user est stocké dans un localstorage ca affichera son prenom et retirera les boutons login et sign up */}
        {infosUser.firstname ? (
          <a className="header__navbar__nameOfUser">
              Hi {infosUser.firstname}{" "}
          </a>
        ) : (
          <>
            <ButtonModal
              openModal={openModalLogin}
              className="header__navbar__login"
              name="LOGIN"
            />
            <ButtonModal
              openModal={openModalSignup}
              className="header__navbar__signup"
              name="SIGN UP"
            />
          </>
        )}

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

          {/* Lorsque la classe open est active l'ensemble des NavLink sont disponible */}
          {toggleAction ? (
            <div className="header__hamburger">
              {infosUser.firstname ? (
                <>
                  <NavLink to="/" exact className="header__hamburger-titlePage">HOME</NavLink>
                  <NavLink to="/profil" className="header__hamburger-titlePage">PROFIL</NavLink>
                  <NavLink to="/createEvent" className="header__hamburger-titlePage">CREATE EVENT</NavLink>
                  <NavLink to="/searchEvent" className="header__hamburger-titlePage">SEARCH EVENT</NavLink>
                  <NavLink to="/listEvent" className="header__hamburger-titlePage">MY EVENTS</NavLink>
                  <NavLink to="/contact" className="header__hamburger-titlePage">CONTACT</NavLink>
                  <NavLink onClick={handleLogOut} to="/" className="header__hamburger-disconnect">DISCONNECT</NavLink>
                </>
              ) : (
                <>
                  <NavLink to="/" exact className="header__hamburger-titlePage">HOME</NavLink>
                  <NavLink to="/contact" className="header__hamburger-titlePage">CONTACT</NavLink>
                </>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  openModalLogin: PropTypes.func.isRequired,
  openModalSignup: PropTypes.func.isRequired,
};

export default Header;

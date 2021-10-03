/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable react-hooks/exhaustive-deps */
import './styles.scss';
import ButtonModal from '../../Styledcomponents';
import ButtonToggle from '../../Styledcomponents/ButtonToggle';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { SET_TOGGLE, RESET_TOGGLE } from '../../../Redux/actions/common';
import { resetInfosUser } from '../../../Redux/actions/profil';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Header = ({ openModalLogin, openModalSignup }) => {

const dispatch = useDispatch()
const toggleAction = useSelector((state)=> state.common.toggleAction)

const infosUser = useSelector(state => state.profil.infosUser)

  function handleClick(event){
    event.preventDefault()
    console.log("Tu as cliqué sur le bouton")
    dispatch({type: SET_TOGGLE})
}

  // useEffect permettant de remettre le menu hamburger a false a chaque rendu
  useEffect(()=>{
    dispatch({type: RESET_TOGGLE})
  },[])

  // useEffect permettant d'avoir le titre de l'application dans le navigateur
  useEffect(() => {
    document.title = "Let's Be Friends | Website for having fun while learning a new language..." 
  }, []);

  const history = useHistory()

    function handleLogOut(){
      dispatch(resetInfosUser());
      history.push("/")
  }


//let myFirstName = useSelector((state)=>state.profil.myName)

  return (
    <div className='header'>
      <h1 className='header__logo'>LBF</h1>
      <div className='header__navbar'>
      {/* Si un user est stocké dans un localstorage ca affichera son prenom et retirera les boutons login et sign up */}
        {infosUser.firstname ? <a href className='header__navbar__nameOfUser'>Hi {infosUser.firstname} </a> : 
        <>
          <ButtonModal openModal={openModalLogin} className='header__navbar__login' name='LOGIN' /> 
          <ButtonModal openModal={openModalSignup} className='header__navbar__signup' name='SIGN UP' />
        </>
        }
        
        <div className={toggleAction ? 'header__navbar__settings-open' : 'header__navbar__settings'}>
          <ButtonToggle 
            className='settings__container--toggle' 
            name='=' 
            handleClick={handleClick}
          />

          {/* Lorsque la classe open est active l'ensemble des NavLink sont disponible */}
         {toggleAction ? 
         <div className="header__hamburger">
            <NavLink to="/" exact className="header__hamburger-titlePage">HOME</NavLink>
            <NavLink to="/searchEvent" className="header__hamburger-titlePage">SEARCH EVENT</NavLink>
            <NavLink to="/createEvent" className="header__hamburger-titlePage">CREATE EVENT</NavLink>
            <NavLink to="/listEvent" className="header__hamburger-titlePage">MY EVENTS</NavLink>
            <NavLink to="/profil" className="header__hamburger-titlePage">PROFIL</NavLink>
            <NavLink to="/contact" className="header__hamburger-titlePage">CONTACT</NavLink>
            {infosUser.firstname ? <NavLink onClick={handleLogOut} to="/" className="header__hamburger-disconnect">DISCONNECT</NavLink>: ""}
         </div>
         : ""} 

        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  openModalLogin: PropTypes.func.isRequired,
  openModalSignup: PropTypes.func.isRequired,
};

export default Header;


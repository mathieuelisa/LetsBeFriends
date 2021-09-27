import './styles.scss';
import ButtonModal from '../../Styledcomponents';
import ButtonToggle from '../../Styledcomponents/ButtonToggle';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import { SET_TOGGLE } from '../../../Redux/actions/common';

import { useDispatch, useSelector } from "react-redux"



const Header = ({ openModalLogin, openModalSignup }) => {

const dispatch = useDispatch()
const toggleAction = useSelector((state)=> state.common.toggleAction)

  function handleClick(event){
    event.preventDefault()
    console.log("Tu as cliqué sur le bouton")
    dispatch({type: SET_TOGGLE})
}

  return (
    <div className='header'>
      <h1 className='header__logo'>LBF</h1>
      <div className='header__navbar'>
        <ButtonModal openModal={openModalLogin} className='header__navbar__login' name='LOGIN' />
        <ButtonModal openModal={openModalSignup} className='header__navbar__signup' name='SIGN UP' />
        <div className={toggleAction ? 'header__navbar__settings-open' : 'header__navbar__settings'}>
          <ButtonToggle 
            className='settings__container--toggle' 
            name='=' 
            handleClick={handleClick}
          />
         {toggleAction ? 
         <div className="header__hamburger">
            <NavLink to="/" exact className="header__hamburger-titlePage">HOME</NavLink>
            <NavLink to="/searchEvent" className="header__hamburger-titlePage">SEARCH EVENT</NavLink>
            <NavLink to="/createEvent" className="header__hamburger-titlePage">CREATE EVENT</NavLink>
            <NavLink to="/listEvent" className="header__hamburger-titlePage">MY EVENTS</NavLink>
            <NavLink to="/profil" className="header__hamburger-titlePage">PROFIL</NavLink>
            <NavLink to="/contact" className="header__hamburger-titlePage">CONTACT</NavLink>
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


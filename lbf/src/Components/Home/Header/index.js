import './styles.scss';
import ButtonModal from '../../Styledcomponents';
import ButtonToggle from '../../Styledcomponents/ButtonToggle';
import PropTypes from 'prop-types';

import { SET_TOGGLE } from '../../../Redux/actions/common';

import { useDispatch, useSelector } from "react-redux";


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


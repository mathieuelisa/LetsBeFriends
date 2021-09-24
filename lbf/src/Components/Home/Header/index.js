import './styles.scss';
import ButtonModal from '../../Styledcomponents';
import ButtonToggle from '../../Styledcomponents/ButtonToggle';
import PropTypes from 'prop-types';

import { SET_TOGGLE } from '../../../Redux/actions/common';

import { useDispatch, useSelector } from "react-redux"


const Header = ({ openModalLogin, openModalSignup }) => {

const dispatch = useDispatch()
const toggleAction = useSelector((state)=> state.toggleAction)

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
        {/* <div className={`settings__container${toggleAction ? ' open' : "" }`}> */}
        {/* <Button className='header__navbar__hamburger' name='='  /> */}
          {/* <ButtonToggle className='header__navbar__hamburger' classNameDiv='searchEvent-button-menuhome' name='=' handleClick={handleClick}/> */}
          <ButtonToggle 
            className='settings__container--toggle' 
            classNameDiv={`settings__container${toggleAction ? ' open' : "" }`} 
            name='=' 
            handleClick={handleClick}
          />
        {/* </div> */}
      </div>
    </div>
  );
}

Header.propTypes = {
  openModalLogin: PropTypes.func.isRequired,
  openModalSignup: PropTypes.func.isRequired,
};

export default Header;


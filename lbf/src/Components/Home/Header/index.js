import './styles.scss';
import ButtonModal from '../../Styledcomponents';
import ButtonToggle from '../../Styledcomponents/ButtonToggle';
import PropTypes from 'prop-types';

// React-Redux
// import {useSelector, useDispatch} from 'react-redux';
// //Actions
// import { setToggleMenu } from '../../Redux/actions/';


const Header = ({ openModalLogin, openModalSignup }) => {

  // const toggleMenu = useSelector(state => state.toggleMenu);
  // const dispatch = useDispatch();


  return (
    <div className='header'>
      <h1 className='header__logo'>LBF</h1>
      <div className='header__navbar'>
        <ButtonModal openModal={openModalLogin} className='header__navbar__login' name='LOGIN' />
        <ButtonModal openModal={openModalSignup} className='header__navbar__signup' name='SIGN UP' />
        {/* <Button className='header__navbar__hamburger' name='='  /> */}
        <ButtonToggle className='header__navbar__hamburger' classNameDiv='searchEvent-button-menuhome' name='='/>
      </div>
    </div>
  );
}

Header.propTypes = {
  openModalLogin: PropTypes.func.isRequired,
  openModalSignup: PropTypes.func.isRequired,
};

export default Header;


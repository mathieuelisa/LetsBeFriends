import './styles.scss';
import Button from '../../Styledcomponents';
import PropTypes from 'prop-types';


const Header = ({ openModalLogin, openModalSignup }) => (
  <div className='header'>
    <h1 className='header__logo'>LBF</h1>
    <div className='header__navbar'>
      <Button openModal={openModalLogin} className='header__navbar__login' name='LOGIN' />
      <Button openModal={openModalSignup} className='header__navbar__signup' name='SIGN UP' />
      <Button className='header__navbar__hamburger' name='=' />
    </div>
  </div>
);

Header.propTypes = {
  openModalLogin: PropTypes.func.isRequired,
  openModalSignup: PropTypes.func.isRequired,
};

export default Header;


import './styles.scss';
import Button from '../../Styledcomponents';
import PropTypes from 'prop-types';


const Header = ({ openModal }) => (
  <div className='header'>
    <h1 className='header__logo'>LBF</h1>
    <div className='header__navbar'>
      <Button openModal={openModal} className='header__navbar__login' name='LOGIN' />
      <Button className='header__navbar__signup' name='SIGN UP' />
      <Button className='header__navbar__hamburger' name='=' />
    </div>
  </div>
);

Header.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Header;


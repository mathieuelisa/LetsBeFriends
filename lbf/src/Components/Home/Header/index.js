import './styles.scss';
import Button from '../../Styledcomponents';


const Header = () => (
  <div className='header'>
    <h1 className='header__logo'>LBF</h1>
    <div className='header__navbar'>
      <Button className='header__navbar__login' name='Login' />
      <Button className='header__navbar__signup' name='Sign Up' />
      <Button className='header__navbar__hamburger' name='=' />
    </div>
  </div>
);

export default Header;
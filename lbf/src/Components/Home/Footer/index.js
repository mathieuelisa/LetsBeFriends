import './styles.scss';

//import React Composants
import Caroussel from '../Slider/Slider';

const Footer = () => (
  <div className='styles'>
    <Caroussel />
    <div className='mentions'>
        <h3><a className='mentions__contact' href='/contact'>Contact</a></h3>
        <h3><a className='mentions__legales' href='/contact'>Mentions Légales</a></h3>
    </div>
  </div>
);

export default Footer;

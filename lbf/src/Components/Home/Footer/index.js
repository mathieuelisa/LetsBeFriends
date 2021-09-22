import './styles.scss';

//import React Composants
import Caroussel from '../Caroussel';

const Footer = () => (
  <div className='styles'>
    <Caroussel />

    <div className='mentions'>
        <h3>Contact</h3>
        <h3>Mentions Légales</h3>
    </div>
  </div>
);

export default Footer;
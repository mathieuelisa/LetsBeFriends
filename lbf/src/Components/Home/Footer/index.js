import './styles.scss';

//import React Composants
import Caroussel from '../Caroussel';
import Button from '../../Styledcomponents'

const Footer = () => (
  <div className='styles'>
    <Caroussel />
    <div className='mentions'>
        <h3><Button className='mentions__contact' name='Contact'/></h3>
        <h3><Button className='mentions__legales' name='Mention Légales'/></h3>
    </div>
  </div>
);

export default Footer;
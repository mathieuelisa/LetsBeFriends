// import './button.scss';
import PropTypes from 'prop-types';
import React from 'react'


//Robz: J'ai rajouté plusieurs props à Button pour qu'il soit configurable. On peut utiliser celles que l'on veut.

const Button = ({ openModal, showModal, className, name, URL }) => {
    
    let link = '';

    if(URL) {
        link = URL;
    }
    
    return (
        // toujours mettre un href sur un anchor sinon erreur lors de la lecture
    <a href={link} className={className}>{name} onClick={openModal} </a>
);}

Button.propTypes = {
    openModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    URL: PropTypes.string.isRequired,
  };

export default Button;
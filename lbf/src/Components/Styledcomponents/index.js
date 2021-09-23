// import './button.scss';
import PropTypes from 'prop-types';
import React from 'react'


//Robz: J'ai rajouté plusieurs props à Button pour qu'il soit configurable. On peut utiliser celles que l'on veut.

const Button = ({ openModal, className, name, url }) => {
    
    let link = '';

    if(url) {
        link = url;
    }
    const changeModal = (e) => {
        e.preventDefault();
        openModal();
    }


    return (
        // toujours mettre un href sur un anchor sinon erreur lors de la lecture
    <a href={link} className={className} onClick={changeModal}>{name}</a>
);}

Button.propTypes = {
    openModal: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    URL: PropTypes.string,
  };

export default Button;
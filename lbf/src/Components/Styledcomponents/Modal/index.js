import './styles.scss';
import PropTypes from 'prop-types';
import React from 'react'
import Button from '../../Styledcomponents'

//React components
import Input from '../Input';


const Modal = ({ showModal }) => (
  <div className='modal-container'>
    {showModal ? (
        <div className='modal-container__modal'>
            <form className='modal-container__modal__form'>
                <Input type='email' value='' placeHolder='Email' classNameInput='modal-container__modal__form__input-login' classNameDiv='div-input-login'/>
                <Input type='password' value='' placeHolder='Password' classNameInput='modal-container__modal__form__input-login' classNameDiv='div-input-login'/>
                <input type="checkbox" id="remember" name="remember" checked />
                <label for="remember">Remember Me</label>
                <Button className='button-login' name='Login' />
                <Button className='cant-login' name="Can\'t Log in ?" />
                <div className='not-registred'>
                    <span>Not registred</span> 
                    <Button className='not-registred__signup' />
                </div>
            </form>           
        </div>) : null}
  </div>
);

Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
}

export default Modal;
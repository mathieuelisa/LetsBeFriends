
//Styles
import './styles.scss';
//Dependencies
import PropTypes from 'prop-types';
//React
//React Components
import Button from '../../Styledcomponents'

//React components
import Input from '../Input';


const Modal = ({ showModalLogin, showModalSignup, openModalLogin, openModalSignup }) => {


    return (
    <div className='modal-container'>
        {(showModalLogin || showModalSignup) ? (
            <div className='modal-container__modal'>                
                    {/* Login Form */}
                    {showModalLogin ? (

                        <form className='modal-container__modal__formlogin'>
                            <h1>Login</h1>
                            <Input type='email' value='' placeHolder='Email' classNameInput='modal-container__modal__formlogin__input-login' classNameDiv='div-input-login'/>
                            <Input type='password' value='' placeHolder='Password' classNameInput='modal-container__modal__formlogin__input-login' classNameDiv='div-input-login'/>
                            <input type="checkbox" id="remember" name="remember" checked />
                            <label for="remember">Remember Me</label>
                            <Button className='button-login' name='Login' />
                            <Button className='cant-login' name="Can\'t Log in ?" />
                            <div className='not-registred'>
                                <span>Not registred</span> 
                                <Button className='not-registred__signup' />
                            </div>
                        </form>
                    ) : 
                    
                        <form className='modal-container__modal__formsignup'>
                            <h1>Sign Up</h1>
                            <Input type='email' value='' placeHolder='Email' classNameInput='modal-container__modal__formsignup__input-login' classNameDiv='div-input-login'/>
                            <Input type='password' value='' placeHolder='Password' classNameInput='modal-container__modal__formsignup__input-login' classNameDiv='div-input-login'/>
                            <input type="checkbox" id="remember" name="remember" checked />
                            <label for="remember">Remember Me</label>
                            <Button className='button-login' name='Login' />
                            <Button className='cant-login' name="Can\'t Log in ?" />
                            <div className='not-registred'>
                                <span>Not registred</span> 
                                <Button className='not-registred__signup' />
                            </div>
                        </form>
                    }
            </div>) : null}
    </div>
    );
}

Modal.propTypes = {
    showModalLogin: PropTypes.bool.isRequired,
    showModalSignup: PropTypes.bool.isRequired,
    openModalLogin: PropTypes.func.isRequired, 
    openModalSignup: PropTypes.func.isRequired,
}

export default Modal;
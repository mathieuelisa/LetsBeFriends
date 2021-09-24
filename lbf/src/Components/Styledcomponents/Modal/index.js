
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
                            <div className='modal-container__modal__formlogin__remember'> 
                                <input type="checkbox" id="remember" name="remember" checked />
                                <label className='modal-container__modal__formlogin__remember--label' for="remember">Remember Me</label>
                            </div>
                            <Button className='modal-container__modal__formlogin__button--login' name='Login' />
                        </form>
                    ) : 
                    
                        <form className='modal-container__modal__formsignup'>
                            <h1>Sign Up</h1>
                            <div className='modal-container__modal__formsignup__name'>
                                <Input type='firstname' value='' placeHolder='Firstname' classNameInput='modal-container__modal__formsignup__name--firstname' classNameDiv='div-input-login'/>
                                <Input type='lastname' value='' placeHolder='Lastname' classNameInput='modal-container__modal__formsignup__name--lastname' classNameDiv='div-input-login'/>
                            </div>
                            <Input type='email' value='' placeHolder='Email' classNameInput='modal-container__modal__formsignup--email' classNameDiv='div-input-login'/>
                            <Input type='password' value='' placeHolder='Password' classNameInput='modal-container__modal__formsignup--password' classNameDiv='div-input-login'/>
                            <Input type='password' value='' placeHolder='Confirm Password' classNameInput='modal-container__modal__formsignup--password' classNameDiv='div-input-login'/>
                            
                            
                            <div className='modal-container__modal__formsignup__terms'>
                                <input type="checkbox" id= "terms" name="terms" checked />
                                <label className='modal-container__modal__formsignup__terms--label' for="remember">I accept the Term of Use & Privacy Policy</label>
                            </div>
                            <Button className='button-sign' name='Sign' />
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
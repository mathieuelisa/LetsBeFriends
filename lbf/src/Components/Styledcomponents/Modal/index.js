//Actions
import { setFieldIdentification, setCheckboxRemember, setCheckboxTerms, submitLogin } from '../../../Redux/actions/profil'
//Styles
import './styles.scss';
//Dependencies
import PropTypes from 'prop-types';
//Redux
import { useSelector, useDispatch } from 'react-redux'
//React Components
//React components
import Input from '../Input';


const Modal = ({ showModalLogin, showModalSignup, openModalLogin, openModalSignup }) => {

    const { emailLogin, passwordLogin } = useSelector(state => state.profil.login);
    const { emailSignup, passwordSignup, confirmedPassword, firstName, lastName, gender } = useSelector(state => state.profil.signup);
    const { termsAccepted, isRemembered } = useSelector(state => state.profil);

    const dispatch = useDispatch();

    //CallNack de l'event onChange général à tous les champs controllés 
    //ex utilisation: setFieldIdentification(valeur du champ: antoine.dupont@gmail.com, name: email, type: signup )
    
    const handleChangeField = (e) => {
        dispatch(setFieldIdentification(e.target.value, e.target.name, e.target.typeform));
    }

    //Action update boolean Acceptation des terms
    const handleCheckboxTerms = () => {
        dispatch(setCheckboxTerms())
    }

    //Action  update boolean Remember me
    const handleCheckboxRemember = () => {
        dispatch(setCheckboxRemember())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitLogin());
    }

    return (
    <div className='modal-container'>
        {(showModalLogin || showModalSignup) ? (
            <div className='modal-container__modal'>                
                    {/* Login Form */}
                    {showModalLogin ? (

                        <form className='modal-container__modal__formlogin' onSubmit={handleSubmit}>
                            <h1>Login</h1>
                            <Input 
                                name='email'
                                type='email'
                                typeform='login' 
                                value={emailLogin} 
                                onChange={handleChangeField} 
                                placeHolder='Email' 
                                classNameInput='modal-container__modal__formlogin__input-login' 
                                classNameDiv='div-input-login'
                            />
                            <Input 
                            name='password'
                            type='password'
                            typeform='login' 
                            value={passwordLogin} 
                            onChange={handleChangeField} 
                            placeHolder='Password' 
                            classNameInput='modal-container__modal__formlogin__input-login' classNameDiv='div-input-login'/>
                            <div className='modal-container__modal__formlogin__remember'> 
                                <input type="checkbox" id="remember" name="remember" {...isRemembered ? 'checked' : 'unchecked'} onClick={handleCheckboxRemember} />
                                <label className='modal-container__modal__formlogin__remember--label' htmlFor="remember">Remember Me</label>
                            </div>
                            <button type="submit" className='modal-container__modal__formlogin__button--login' name='Login' />
                        </form>
                    ) : 
                    
                        <form className='modal-container__modal__formsignup'>
                            <h1>Sign Up</h1>
                            <div className='modal-container__modal__formsignup__name'>
                                <Input name='firstname' type='text' typeform='signup' value={firstName} placeHolder='Firstname' classNameInput='modal-container__modal__formsignup__name--firstname' classNameDiv='div-input-login' onChange={handleChangeField} />
                                <Input name='lastname' type='text' typeform='signup' value={lastName} placeHolder='Lastname' classNameInput='modal-container__modal__formsignup__name--lastname' classNameDiv='div-input-login' onChange={handleChangeField} />
                            </div>
                            <Input name='email' type='email' typeform='signup' value={emailSignup} placeHolder='Email' classNameInput='modal-container__modal__formsignup--email' classNameDiv='div-input-login' onChange={handleChangeField} />
                            <Input name='password' type='password' typeform='signup' value={passwordSignup} placeHolder='Password' classNameInput='modal-container__modal__formsignup--password' classNameDiv='div-input-login' onChange={handleChangeField}  />
                            <Input name='confirmedPassword' type='password' typeform='signup' value={confirmedPassword} placeHolder='Confirm Password' classNameInput='modal-container__modal__formsignup--password' classNameDiv='div-input-login' onChange={handleChangeField} />
                            <Input name='gender' type='text' typeform='signup' value={gender} placeHolder='Gender' classNameInput='modal-container__modal__formsignup--password' classNameDiv='div-input-login' onChange={handleChangeField} />
                            
                            
                            <div className='modal-container__modal__formsignup__terms'>
                                <input type="checkbox" id= "terms" name="terms" {...termsAccepted ? 'checked' : 'unchecked'} onClick={handleCheckboxTerms} />
                                <label className='modal-container__modal__formsignup__terms--label' htmlFor="remember">I accept the Term of Use & Privacy Policy</label>
                            </div>
                            <button type='submit' className='button-sign' name='Sign' />
                        </form>
                    }
            </div>) : null}
    </div>
    );
}

Modal.propTypes = {
    showModalLogin: PropTypes.bool.isRequired,
    showModalSignup: PropTypes.bool.isRequired,
    //openModalLogin: PropTypes.func.isRequired, 
    //openModalSignup: PropTypes.func.isRequired,
}

export default Modal;
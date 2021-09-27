//Actions
// import { setFieldIdentification, setCheckboxRemember, setCheckboxTerms, submitLogin, submitSignUp} from '../../../Redux/actions/profil'
// import {submitLogin, submitSignUp} from '../../../Redux/actions/profil'
//Styles
import './styles.scss';
//Dependencies
import PropTypes from 'prop-types';
//Redux
// import { useSelector, useDispatch } from 'react-redux'
//React Components
import Input from '../Input';
import { useState } from 'react';


const Modal = ({ showModalLogin, showModalSignup  }) => {
    const [login, setLogin] = useState({
        email:"",
        password:""
    })
    const [signUp, setSignUp] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmedPassword:"",
        gender:""
    }) 


    // const { emailLogin, passwordLogin } = useSelector(state => state.profil.login);
    // const { emailSignup, passwordSignup, confirmedPassword, firstName, lastName, gender } = useSelector(state => state.profil.signup);
    // const { termsAccepted, isRemembered } = useSelector(state => state.profil);

    // const dispatch = useDispatch();

    //CallNack de l'event onChange général à tous les champs controllés 
    //ex utilisation: setFieldIdentification(valeur du champ: antoine.dupont@gmail.com, name: email, type: signup )
    
    // Ne pas utiliser redux mais un useState
    // const handleChangeField = (e) => {
    //     console.log(e.target.value)
    //     console.log(e.target.name)
    //     // console.log(e.target.label)
    //     // dispatch(setFieldIdentification(e.target.value, e.target.name, e.target.label));
    //     dispatch(setFieldIdentification(e.target.value, e.target.name));
    // }

    //Action update boolean Acceptation des terms
    // const handleCheckboxTerms = () => {
    //     dispatch(setCheckboxTerms())
    // }

    // //Action  update boolean Remember me
    // const handleCheckboxRemember = () => {
    //     dispatch(setCheckboxRemember())
    // }

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        console.log(e.target.name)
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
        // dispatch(submitLogin(e.target.value, e.target.name));
    }
    const handleSubmitSignup = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        console.log(e.target.name)
        setSignUp({
            ...login,
            [e.target.name]: e.target.value
        })
        // dispatch(submitSignUp(e.target.value, e.target.name));
    }

    return (
    <div className='modal-container'>
        {(showModalLogin || showModalSignup) ? (
            <div className='modal-container__modal'>                
                    {/* Login Form */}
                    {showModalLogin ? (

                        <form className='modal-container__modal__formlogin' onSubmit={handleSubmitLogin}>
                            <h1>Login</h1>
                            <Input 
                                type='email'
                                name='email'
                                // label='login' 
                                value={login.email} 
                                onChange={handleSubmitLogin} 
                                placeHolder='Email' 
                                classNameInput='modal-container__modal__formlogin__input-login' 
                                classNameDiv='div-input-login'
                            />

                            <Input 
                                name='password'
                                type='password'
                                // label='login' 
                                value={login.password} 
                                onChange={handleSubmitLogin} 
                                placeHolder='Password' 
                                classNameInput='modal-container__modal__formlogin__input-login' classNameDiv='div-input-login'
                            />
                            <div className='modal-container__modal__formlogin__remember'> 
                                {/* <input 
                                    type="checkbox" 
                                    id="remember" 
                                    name="remember" {...isRemembered ? 'checked' : 'unchecked'} 
                                    onClick={handleCheckboxRemember} 
                                /> */}
                                <label className='modal-container__modal__formlogin__remember--label' htmlFor="remember">Remember Me</label>
                            </div>
                            <button type="submit" className='modal-container__modal__formlogin__button--login' name='Login' />
                        </form>
                    ) : 
                    
                        <form className='modal-container__modal__formsignup' onSubmit={handleSubmitSignup}>
                            <h1>Sign Up</h1>
                            <div className='modal-container__modal__formsignup__name'>
                                <Input 
                                    name='firstname'
                                    type='text' 
                                    label='signup' 
                                    value={signUp.firstname} 
                                    placeHolder='Firstname'
                                    classNameInput='modal-container__modal__formsignup__name--firstname' 
                                    classNameDiv='div-input-login' 
                                    onChange={handleSubmitSignup}
                                />
                                <Input 
                                    name='lastname' 
                                    type='text' 
                                    label='signup' 
                                    value={signUp.lastname} 
                                    placeHolder='Lastname' 
                                    classNameInput='modal-container__modal__formsignup__name--lastname' 
                                    classNameDiv='div-input-login' 
                                    onChange={handleSubmitSignup}
                                />
                            </div>
                                <Input 
                                    name='email' 
                                    type='email' 
                                    label='signup' 
                                    value={signUp.email} 
                                    placeHolder='Email' 
                                    classNameInput='modal-container__modal__formsignup--email' 
                                    classNameDiv='div-input-login' 
                                    onChange={handleSubmitSignup} 
                                />
                                <Input 
                                    name='password' 
                                    type='password' 
                                    label='signup' 
                                    value={signUp.password} 
                                    placeHolder='Password' 
                                    classNameInput='modal-container__modal__formsignup--password' 
                                    classNameDiv='div-input-login' 
                                    onChange={handleSubmitSignup}
                                />
                                <Input 
                                    name='confirmedPassword' 
                                    type='password' 
                                    label='signup' 
                                    value={signUp.confirmedPassword} 
                                    placeHolder='Confirm Password' 
                                    classNameInput='modal-container__modal__formsignup--password' 
                                    classNameDiv='div-input-login' 
                                    onChange={handleSubmitSignup} 
                                />
                                <Input 
                                    name='gender' 
                                    type='text' 
                                    label='signup' 
                                    value={signUp.gender} 
                                    placeHolder='Gender' 
                                    classNameInput='modal-container__modal__formsignup--password' 
                                    classNameDiv='div-input-login' 
                                    onChange={handleSubmitSignup} 
                                />
                            
                            
                            <div className='modal-container__modal__formsignup__terms'>
                                {/* <input 
                                    type="checkbox" 
                                    id= "terms" 
                                    name="terms" {...termsAccepted ? 'checked' : 'unchecked'} 
                                    onClick={handleCheckboxTerms} 
                                /> */}
                                <label 
                                    className='modal-container__modal__formsignup__terms--label' 
                                    htmlFor="remember">I accept the Term of Use & Privacy Policy
                                </label>
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
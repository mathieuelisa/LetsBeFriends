//Actiions
import { submitLogin } from '../../../Redux/actions/profil'
//Styles
import './styles.scss';
//Dependencies
import PropTypes from 'prop-types';
import axios from 'axios'
//Redux
import { useDispatch } from 'react-redux'
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

    const [isCheckedLogin,setIsCheckedLogin] = useState(false)
    const [isCheckedSignUp,setIsCheckedSignUp] = useState(false)
    const dispatch = useDispatch();

    const optionsPost = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
    const optionsGet = {
        method: 'get',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }

    // const { emailLogin, passwordLogin } = useSelector(state => state.profil.login);
    // const { emailSignup, passwordSignup, confirmedPassword, firstName, lastName, gender } = useSelector(state => state.profil.signup);
    // const { termsAccepted, isRemembered } = useSelector(state => state.profil);

    // const dispatch = useDispatch();

    //CallNack de l'event onChange général à tous les champs controllés 
    //ex utilisation: setFieldIdentification(valeur du champ: antoine.dupont@gmail.com, name: email, type: signup )
    
    //Ne pas utiliser redux mais un useState
 

    //Action update boolean Acceptation des terms
    // const handleCheckboxTerms = () => {
    //     dispatch(setCheckboxTerms())
    // }

    // const handleCheckboxRemember = () => {
    //     dispatch(setCheckboxRemember())
    // }

    const handleChangeLogin = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        console.log(e.target.name)
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
      
    }
    
    const handleChangeSignup = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        console.log(e.target.name)
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value
        })
       
    }

    const handleSubmitLogin = (e) => {
        
        e.preventDefault();
        console.log('Votre forumlaire : ')
        axios.post('https://lets-be-friend.herokuapp.com/v1/users/login', {
            "email": login.email,
            "password": login.password
        }, optionsPost)
        .then((response) => {
            console.log(response.data);
        })
    }

    const handleSubmitSignUp = (e) => {
        
        e.preventDefault();
        console.log('Votre forumlaire : ')
        axios.post('https://lets-be-friend.herokuapp.com/v1/users', {
            "firstname": signUp.firstname,
            "lastname": signUp.lastname,
            "email": signUp.email,
            "password": signUp.password,
            "confirmPassword": signUp.confirmedPassword,
            "gender": signUp.gender
        }, optionsPost)
        .then((response) => {
            console.log(response.data);
        })
    }

                // firstname: signUp.firstname,
            // lastname: signUp.lastname,
            // email: signUp.email,
            // password: signUp.password,
            // confirmPassword: signUp.confirmedPassword,
            // gender: signUp.gender,

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
                                value={login.email} 
                                onChange={handleChangeLogin} 
                                placeHolder='Email' 
                                classNameInput='modal-container__modal__formlogin__input-login' 
                                classNameDiv='div-input-login'
                            />

                            <Input 
                                name='password'
                                type='password'
                                label='login' 
                                value={login.password} 
                                onChange={handleChangeLogin} 
                                placeHolder='Password' 
                                classNameInput='modal-container__modal__formlogin__input-login' classNameDiv='div-input-login'
                            />
                            <div className='modal-container__modal__formlogin__remember'> 
                            <input 
                                type="checkbox"
                                id="remember"
                                checked={isCheckedLogin} 
                                onChange={(e)=>{setIsCheckedLogin(e.target.checked)}} 
                            />
                                <label className='modal-container__modal__formlogin__remember--label' htmlFor="remember">Remember Me</label>
                            </div>
                            <button type="submit" className='modal-container__modal__formlogin__button--login' name='Login' />
                        </form>
                    ) : 
                    
                        <form className='modal-container__modal__formsignup' onSubmit={handleSubmitSignUp}>
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
                                    onChange={handleChangeSignup}
                                />
                                <Input 
                                    name='lastname' 
                                    type='text' 
                                    label='signup' 
                                    value={signUp.lastname} 
                                    placeHolder='Lastname' 
                                    classNameInput='modal-container__modal__formsignup__name--lastname' 
                                    classNameDiv='div-input-login' 
                                    onChange={handleChangeSignup}
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
                                    onChange={handleChangeSignup} 
                                />
                                <Input 
                                    name='password' 
                                    type='password' 
                                    label='signup' 
                                    value={signUp.password} 
                                    placeHolder='Password' 
                                    classNameInput='modal-container__modal__formsignup--password' 
                                    classNameDiv='div-input-login' 
                                    onChange={handleChangeSignup}
                                />
                                <Input 
                                    name='confirmedPassword' 
                                    type='password' 
                                    label='signup' 
                                    value={signUp.confirmedPassword} 
                                    placeHolder='Confirm Password' 
                                    classNameInput='modal-container__modal__formsignup--password' 
                                    classNameDiv='div-input-login' 
                                    onChange={handleChangeSignup} 
                                />
                                <Input 
                                    name='gender' 
                                    type='text' 
                                    label='signup' 
                                    value={signUp.gender} 
                                    placeHolder='Gender' 
                                    classNameInput='modal-container__modal__formsignup--password' 
                                    classNameDiv='div-input-login' 
                                    onChange={handleChangeSignup} 
                                />
                            
                            
                            <div className='modal-container__modal__formsignup__terms'>                                
                                <input 
                                type="checkbox"
                                id="terms"
                                checked={isCheckedSignUp} 
                                onChange={(e)=>{setIsCheckedSignUp(e.target.checked)}} 
                            />
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
}

export default Modal;
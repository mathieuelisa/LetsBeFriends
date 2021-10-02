//Import Actions
import { setPseudo,setInfosUser } from '../../../Redux/actions/profil'
//Import Styles
import './styles.scss';
//Dependencies
import PropTypes from 'prop-types';
import axios from 'axios'
//React Components
import Input from '../Input';
import { useState } from 'react';
//Redux
import { useDispatch, useSelector } from 'react-redux';

const getData = () =>{
    let dataProfil = localStorage.getItem("user")
    if(dataProfil){
        return JSON.parse(dataProfil)
    } else{
        return ""
    }
}

const Modal = ({ showModalLogin, showModalSignup  }) => {
    const [login, setLogin] = useState(getData())
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
    const infosUser = useSelector(state => state.profil.infosUser)

    const dispatch = useDispatch()

    const optionsPost = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }

    const handleChangeLogin = (e) => {
        e.preventDefault();
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }
    
    const handleChangeSignup = (e) => {
        e.preventDefault();
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
            // Gestion du localstorage 
            if(response.data){
                localStorage.setItem("user", JSON.stringify(response.data))
                localStorage.setItem("userDate", Date.now())
                dispatch(setPseudo(response.data.firstname))
                dispatch(setInfosUser(response.data))
            }
        }).catch(error => console.error(error))
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

    // Recuperation de la valeur afin de l'afficher par la suite
        const nameUser = useSelector((state)=>state.profil.myName)
        
    return (
    <div className='modal-container'>
        {(showModalLogin || showModalSignup) ? (
            <div className='modal-container__modal'>                
                    {/* Login Form */}
                    {showModalLogin ? (
                        <form className='modal-container__modal__formlogin' onSubmit={handleSubmitLogin}>
                            {infosUser.firstname ? <h1>Bonjour {nameUser}</h1> : <h1>Login</h1>}
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
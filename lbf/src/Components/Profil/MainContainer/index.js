/* eslint-disable react-hooks/exhaustive-deps */
// Import styles
import "./styles.scss"
import Input from "../Input"

//import ReactComponents
import ButtonToggle from "../../Styledcomponents/ButtonToggle"
import Avatar from "../../Styledcomponents/Avatar"

import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

import avatarMicheline from "../../../assets/Img/micheline.jpg"

import { useDispatch, useSelector } from "react-redux"

// import actions types
import { SET_TOGGLE, RESET_TOGGLE } from '../../../Redux/actions/common';
import { useEffect } from "react";


function ProfilContainer(){

const dispatch = useDispatch()
const toggleAction = useSelector((state)=> state.common.toggleAction)

    function handleClick(event){
        event.preventDefault()
        console.log("Tu as cliqué sur le bouton")
        dispatch({type: SET_TOGGLE})
    }
    
    // useEffect permettant de remettre le menu hamburger a false a chaque rendu
    useEffect(()=>{
        dispatch({type: RESET_TOGGLE})
    },[]);

    const history=useHistory()

    function handleLogOut(){
        localStorage.clear()
        history.push("/home")
    }

    return(
        <div className="profil__container">
            <div className={toggleAction ? 'header__navbar__settings-open' : 'header__navbar__settings'}>
                <ButtonToggle 
                className='settings__container--toggle' 
                name='=' 
                handleClick={handleClick}
                />

                {toggleAction ? 
                <div className="header__hamburger">
                    <NavLink to="/home" exact className="header__hamburger-titlePage">HOME</NavLink>
                    <NavLink to="/searchEvent" className="header__hamburger-titlePage">SEARCH EVENT</NavLink>
                    <NavLink to="/createEvent" className="header__hamburger-titlePage">CREATE EVENT</NavLink>
                    <NavLink to="/listEvent" className="header__hamburger-titlePage">MY EVENTS</NavLink>
                    <NavLink to="/profil" className="header__hamburger-titlePage">PROFIL</NavLink>
                    <NavLink to="/contact" className="header__hamburger-titlePage">CONTACT</NavLink>
                    {localStorage.getItem("user") ? <NavLink onClick={handleLogOut} to="/home" className="header__hamburger-disconnect">DISCONNECT</NavLink>: ""}
                </div>
                : ""} 
            </div>

            <div className="mainProfil__container">
                <div className="profil__container-avatars">
                    <Avatar 
                    customDiv={"profil__container-avatar"} 
                    customImg={"profil__container-pictures"} 
                    customPics={avatarMicheline}
                    />
                    <h2 className="profil-genre">No binary</h2>
                    <h2 className="profil-telNumber">Tel: 07 85 11 25 18</h2>
                </div>

                <div className="profil__container-data">
                    <Input name={"PROFIL MODIFIER"} name2={"PASSWORD MODIFIER"}/>
                    <p>Micheline</p>
                    <p>Michaudiere</p>
                    <p>Paris, 20eme</p>
                    <p>pipo@gmail.com</p>
                    <p>Language speakin: FRENCH</p>
                    <p>Language to learn: RUSSIAN</p>
                    <p>Age: 22</p>
                    <p>Description:</p>

                    <div className="profil__textContent">
                        <textarea type="textarea" className="profil__textContent-text" name="description" value="This is a description."> Salut j'aime les brebis </textarea>
                    </div>
                </div>
            </div>
            </div>

    )
}

export default ProfilContainer
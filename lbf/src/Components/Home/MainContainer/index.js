// React
<<<<<<< HEAD
import React, {useState} from 'react'
=======
import React, {useState, useEffect, useRef, useCallback } from 'react';
// Styles
import "./styles.scss"
import "../../../assets/Fonts/Surfing2.woff"
// import "../../../assets/Fonts/capital.woff2"
import wallpaper from "../../../assets/Wallpaper/wallpaper.jpg"
>>>>>>> 7b650d5fe5574adb432ea3b52a545c5613064868
//React Components
import Modal from "../../Styledcomponents/Modal"
import Header from "../Header"
//Import styles
import "./styles.scss"
//Import fonts
import "../../../assets/Fonts/Surfing2.woff"
//Import pictures
import wallpaper from "../../../assets/Wallpaper/wallpaper.jpg"

function MainContainer(){

    const [ModalLogin, setModalLogin] = useState(false);
    const [ModalSignup, setModalSignup] = useState(false);

    const modalRef = useRef();

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setModalLogin(false);
            setModalSignup(false);
        }
    }
    
    const openModalLogin = (prev) => {
        setModalLogin(prev => !prev);
    }
    const openModalSignup = (prev) => {
        setModalSignup(prev => !prev);
    }
    return(
        <div className="main__container" style={{backgroundImage:`url(${wallpaper})`}} >

            <div className="main__container-overlay" ref={modalRef} onClick={closeModal}>
                <Header openModalLogin={openModalLogin} openModalSignup={openModalSignup} />
                <Modal showModalLogin={ModalLogin} showModalSignup={ModalSignup} openModalLogin={openModalLogin} openModalSignup={openModalSignup} />
                <div className="main__container-text">
                    <h3 className="main__container--secondTitle">The simpliest way to meet people and train languages !</h3>
                    <h1 className="main__container--title">LETS BE FRIENDS</h1>
                </div>
            </div>
        </div>
    )
}

export default MainContainer;
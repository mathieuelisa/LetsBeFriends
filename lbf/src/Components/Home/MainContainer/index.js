// React
import React, {useState} from 'react'

// Styles
import "./styles.scss"
import "../../../assets/Fonts/Surfing2.woff"
// import "../../../assets/Fonts/capital.woff2"
import wallpaper from "../../../assets/Wallpaper/wallpaper.jpg"
//React Components
import Modal from "../../Styledcomponents/Modal"
import Header from "../Header"

function MainContainer(){

    const [ModalLogin, setModalLogin] = useState(false);
    const [ModalSignup, setModalSignup] = useState(false);
    
    const openModalLogin = () => {
        setModalLogin(prev => !prev);
    }
    const openModalSignup = () => {
        setModalSignup(prev => !prev);
    }
    return(
        <div className="main__container" style={{backgroundImage:`url(${wallpaper})`}}>

            <div className="main__container-overlay">
                <Header openModalLogin={openModalLogin} openModalSignup={openModalSignup} />
                <Modal showModalLogin={ModalLogin} showModalSignup={ModalSignup} />
                <div className="main__container-text">
                    <h3 className="main__container--secondTitle">The simpliest way to meet people and train languages !</h3>
                    <h1 className="main__container--title">LETS BE FRIENDS</h1>
                </div>
            </div>

        </div>
    )
}

export default MainContainer
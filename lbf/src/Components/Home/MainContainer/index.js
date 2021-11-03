// React
import React, { useState, useRef } from "react";
//Import styles
import "./styles.scss";
//Import fonts
import "../../../assets/Fonts/Surfing2.woff";
//Import pictures
import wallpaper from "../../../assets/Wallpaper/wallpaper.jpg";
// Import images
import title from "../../../assets/Img/title.png"
import subtitle from "../../../assets/Img/subtitle.png"
import titlePhone from "../../../assets/Img/titlePhone.png"
//React Components
import Modal from "../../Styledcomponents/Modal";
import Header from "../Header";
// Import react reveal components
import Fade from 'react-reveal/Fade';



function MainContainer() {
  const [openModale, setOpenModale] = useState("");

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenModale();
    }
  };

  const openModalLogin = (prev) => {
    setOpenModale(openModale === "login" ? "" : "login");
  };
  const openModalSignup = (prev) => {
    setOpenModale(openModale === "signup" ? "" : "signup");
  };

  return (
    <div className="main__container" style={{ backgroundImage: `url(${wallpaper})` }}>
      <div
        className="main__container-overlay"
        ref={modalRef}
        onClick={closeModal}
      >
        <Header
          openModalLogin={openModalLogin}
          openModalSignup={openModalSignup}
        />
        <Modal openModale={openModale} />
        <div className="main__container-text">
    <Fade delay={800}>
          <div>
            <img className="main__container-image1" src={subtitle} alt="logo" />
          </div>
    </Fade>

    <Fade duration={2000}>
          <div className="main__container-divTitle"  >
            <img className="main__container-image2" src={title} alt="logo" />
            <img className="main__container-image3" src={titlePhone} alt="logo" />
          </div>
    </Fade>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

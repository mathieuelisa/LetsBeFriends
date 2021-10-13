import React from "react";
// Import styles
import "./styles.scss";
// Import icons
import leftArrow from '../../../assets/Icons/previous.png'
import rightArrow from '../../../assets/Icons/next.png' 

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="Carrousel" />
    </button>
  );
}
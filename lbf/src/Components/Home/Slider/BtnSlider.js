import React from "react";
import "./styles.scss";
import leftArrow from '../../../assets/Icons/left-arrow.svg'
import rightArrow from '../../../assets/Icons/right-arrow.svg' 

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt="Carrousel" />
    </button>
  );
}
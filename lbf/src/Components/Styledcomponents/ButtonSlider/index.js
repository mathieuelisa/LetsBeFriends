import '../../Home/Slider/styles.scss'
import React from 'react'
import leftArrow from '../../../assets/Icons/left-arrow.svg'
import rightArrow from '../../../assets/Icons/right-arrow.svg' 

export default function ButtonSlider(direction, moveSlide) {
    console.log(direction, moveSlide)
    return(
        <button className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        onClick={moveSlide} >
            <img src={direction === "next" ? rightArrow : leftArrow} alt='Button Slider' />
        </button>
    );
}
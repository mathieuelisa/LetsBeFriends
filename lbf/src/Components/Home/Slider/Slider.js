import React, {useState} from 'react'
import { useSelector } from 'react-redux'
// Import components
import BtnSlider from './BtnSlider'
import EventCard from '../../Styledcomponents/EventCard'
// Import styles
import './styles.scss'

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)
    const events = useSelector(state => state.event.events)

    const nextSlide = () => {
        if(slideIndex !==5){
            // events.length
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === 5){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(6)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <>
        
        <div className="container-slider">
            {events.map((obj, index) => {
                return (
                    <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <EventCard {...obj}/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
        </>
    )
}
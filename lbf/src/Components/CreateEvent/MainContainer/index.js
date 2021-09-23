import { useState } from "react"

import Calendar from "react-calendar"

import "./styles.scss"
import imgEvent from "../../../assets/Img/sport.png"
import Input from "../../Profil/Input"
import Button from "../../Styledcomponents"

function CreateEventContainer(){
    // States for calendar
    const [date, setDate] = useState(new Date())

        const onChange = date => {
            setDate(date)
        }

    return(
        <div className="createEvent__container">
            <Button className='toggle' name='=' />
            <div className="mainCreateEvent__container">
                <div className="createEvent__container-infosDetails">
                    <form id="registerForm"> 
                        <div className="createEvent__container-infosDetails-location" id="div-location">
                            <label>Location: </label>
                            <input className="myInputs" type="text"/>
                        </div>

                        <div className="createEvent__container-infosDetails-calendar">
                            <Calendar onChange={onChange} value={date} />
                            {console.log(date)}
                        </div>

                        <div className="createEvent__container-infosDetails-location">
                            <label>Theme: </label>
                            <input className="myInputs" type="text"/>
                        </div>

                        <div className="createEvent__container-infosDetails-location">
                            <label>Language: </label>
                            <Input 
                            name={"FRENCH"} 
                            name2={"ENGLISH"} 
                            name3={"JAPANESE"}
                            name4={"ROUMAIN"}
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-location">
                        <label>Nombre de participants: </label>
                        <Input 
                            name={"1"} 
                            name2={"2"} 
                            name3={"3"}
                            name4={"4"}
                            />
                        </div>

                        <div className="createEvent__container-infosDetails-location">
                            <label>Description:</label>
                            <textarea className="myInputs" type="text"/>
                        </div>
                    </form>
                </div>

                <div className="createEvent__container-eventTitle">
                    <div className="createEvent__container-eventTitle-title">
                        <h1>Journée biking</h1>
                    </div>
                    
                    <div className="createEvent__container-eventTitle-img">
                        <img className="createEvent-img" src={imgEvent} alt="imageEvent" />
                    </div>

                    <div className="createEvent__container-eventTitle-button">
                        <button type="submit" form="registerForm" className="myButton">LETS GO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateEventContainer
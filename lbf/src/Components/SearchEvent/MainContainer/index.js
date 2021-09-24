import { useState } from "react"
//Import React components
import Input from "../../Profil/Input"

import DatePicker from "react-datepicker"

//Import styles
import "./styles.scss"
import "./datepicker.scss"

function SearchEventContainer(){
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedEndDate, setselectendDate] = useState(null)
    return(
        <div className="searchEvent__container">
            <div className="searchEvent__container-form">
                <div className="searchEvent__container-searchForm">
                   <form id="searchForm">
                        <div className="searchEvent__container-infosDetails-location">
                            <label>City: </label>
                            <input className="mySearchInputs" type="text"/>
                        </div>

                        <div className="searchEvent__container-infosDetails-location">
                            <label>Event: </label>
                                <Input 
                                    name={"Soirée BBQ"} 
                                    name2={"Atelier Cuisine"} 
                                    name3={"Soirée Jeux"}
                                    name4={"Sortie culturelle"}
                                />
                        </div>
                        {/* Date from */}
                        <div className="searchEvent__container-infosDetails-location">
                            <label>From: </label>
                                <DatePicker 
                                    className="mySearchInputs"
                                    selected={selectedEndDate} 
                                    onChange={date=>setselectendDate(date)}
                                    dateFormat="dd/MM/yyyy"
                                    minDate={new Date()}
                                    isClearable
                                />
                        </div>
                        {/* Date to */}
                        <div className="searchEvent__container-infosDetails-location">
                            <label>To: </label>
                            <DatePicker 
                            className="mySearchInputs"
                                selected={selectedDate} 
                                onChange={date=>setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                minDate={new Date()}
                                isClearable
                            />
                        </div>

                        <div className="searchEvent__container-infosDetails-location">
                            <label>Event: </label>
                            <Input 
                                name={"English"} 
                                name2={"Japanese"} 
                                name3={"Portuguese"}
                                name4={"Spanish"}
                            />
                        </div>
                   </form>

                   <div className="createEvent__container-eventTitle-button">
                        <button type="submit" form="searchForm" className="myButton">LETS GO</button>
                    </div>
                </div>

                <div className="searchEvent__container-resultsForm">
                    <div className="searchEvent">
                        
                    </div>
                </div>
            </div>

            <div className="searchEvent__container-leaflet">
                <h1>LEAFLET</h1>
            </div>
        </div>
    )
}

export default SearchEventContainer
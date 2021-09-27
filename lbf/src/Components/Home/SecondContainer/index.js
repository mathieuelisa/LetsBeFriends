
import "./styles.scss"

// Fonts
import "../../../assets/Fonts/Caviar.ttf";

import calendar from "../../../assets/Icons/calendar.svg"
import question from "../../../assets/Icons/question.svg"
import ballot from "../../../assets/Icons/ballot.svg"
import evaluation from "../../../assets/Icons/evaluation.svg"

function SecondContainer(){
    return(
        <div className="second__container">
            <div className="steps__container">

            <div className="steps__explication-text">
                <p>Lets be friends is a platform aimed at making new friends through events while learning or practicing a language.</p>
            </div>

                <div className="steps__explication-title">
                    <h2>LET ME EXPLAIN TO YOU OUR CONCEPT</h2>
                </div>

                <div className="steps">
                    <img src={calendar} className="steps--logo" alt="Calendar"/>
                        <h3 className="steps-text2"><span className="steps-title">1. Search for an event</span><br/>with the language you want to learn / practice 
                            in a chosen area.
                        </h3>
                </div>

                <div className="steps" id="reverse-text">
                        <h3 className="steps-text1"><span className="steps-title">2. Request to participate</span><br/> 
                            to join the event.
                        </h3>
                    <img src={question} className="steps--logo" alt="Question"/>
                </div>

                <div className="steps">
                    <img src={ballot} className="steps--logo" alt="Ballot"/>
                    <div className="steps-asking">
                        <h3 className="steps-text2" id="steps-three"><span className="steps-title">3. Your request is accepted ?</span><br/> 
                            Join the group chat and enjoy your event.
                        </h3>

                        <h3 className="steps-text2"><span className="steps-title">Your request is refused ?</span><br/>                     
                            Search for a new event or become an organizer :)
                        </h3>
                    </div>
                </div>

                <div className="steps" id="reverse-text">
                        <h3 className="steps-text1"><span className="steps-title">4. Give a review</span><br/> at the end of each event you attended about your new friends & your language experience.
                        </h3>
                    <img src={evaluation} className="steps--logo" alt="Evaluation"/>
                </div>
            </div>

        </div>
    )
}

export default SecondContainer
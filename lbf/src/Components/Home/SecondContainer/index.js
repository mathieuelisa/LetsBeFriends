
import "./styles.scss"

import calendar from "../../../assets/Icons/calendar.svg"
import question from "../../../assets/Icons/question.svg"
import ballot from "../../../assets/Icons/ballot.svg"
import evaluation from "../../../assets/Icons/evaluation.svg"

function SecondContainer(){
    return(
        <div className="second__container">
            <div className="steps__container">

            <div className="steps__explication-text">
                <p>Lets be friend est une plateforme visant à se créer de nouveaux amis aux travers d'évènements tout en apprenant ou pratiquant une langue.</p>
            </div>

                <div className="steps__explication-title">
                    <h2>LET ME EXPLAIN YOU OUR CONCEPT</h2>
                </div>

                <div className="steps">
                    <img src={calendar} className="steps--logo" alt="Calendar"/>
                        <h3 className="steps-text2"><span className="steps-title">1. Recherche un évènement</span><br/>avec la langue que tu souhaites
                            apprendre/pratiquer dans un périmètre 
                            choisi
                        </h3>
                </div>

                <div className="steps">
                        <h3 className="steps-text1"><span className="steps-title">2. Demande de participation</span><br/> 
                            afin de rejoindre l'évènement
                        </h3>
                    <img src={question} className="steps--logo" alt="Question"/>
                </div>

                <div className="steps">
                    <img src={ballot} className="steps--logo" alt="Ballot"/>
                    <div className="steps-asking">
                        <h3 className="steps-text2" id="steps-three"><span className="steps-title">3. Demande accepté ?</span><br/> 
                                Rejoins le chat du groupe et profite de ton évènement.
                        </h3>

                        <h3 className="steps-text2"><span className="steps-title">Demande refusé ?</span><br/>                     
                                Recherche un nouvel evement ou deviens organisateur :)
                        </h3>
                    </div>
                </div>

                <div className="steps">
                        <h3 className="steps-text1"><span className="steps-title">4. Donne une note</span><br/> à la fin de chaque évènement auxquelles tu as participé
                            à tes potentiels nouveaux amis et leurs pratique de la langue
                        </h3>
                    <img src={evaluation} className="steps--logo" alt="Evaluation"/>
                </div>
            </div>

        </div>
    )
}

export default SecondContainer
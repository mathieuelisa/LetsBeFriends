
import "./styles.scss"
import calendar from "../../../assets/Icons/calendar.svg"
import question from "../../../assets/Icons/question.svg"
import ballot from "../../../assets/Icons/ballot.svg"
import evaluation from "../../../assets/Icons/evaluation.svg"

function SecondContainer(){
    return(
        <div className="second__container">
            <div className="steps__container">
                <div className="steps">
                    <img src={calendar} className="steps--logo" alt="Calendar"/>
                        <h3><span className="steps-title">Recherche un évènement</span> avec la langue que tu souhaites
                            apprendre/pratiquer dans un périmètre 
                            choisi
                        </h3>
                </div>

                <div className="steps">
                        <h3 className="steps-text"><span className="steps-title">Demande de participation</span> 
                            afin de rejoindre l'évènement
                        </h3>
                    <img src={question} className="steps--logo" alt="Question"/>
                </div>

                <div className="steps">
                    <img src={ballot} className="steps--logo" alt="Ballot"/>
                    <div className="steps-asking">
                        <h3><span className="steps-title">Demande accepté ?</span> 
                                Rejoins le chat du groupe et profite de ton évènement.
                        </h3>

                        <h3><span className="steps-title">Demande refusé ?</span>                     
                                Recherche un nouvel evement ou deviens organisateur :)
                        </h3>
                    </div>
                </div>

                <div className="steps">
                        <h3 className="steps-text"><span className="steps-title">Donne une note</span> à la fin de chaque évènement auxquelles tu as participé
                            à tes potentiels nouveaux amis et leurs pratique de la langue
                        </h3>
                    <img src={evaluation} className="steps--logo" alt="Evaluation"/>
                </div>
            </div>

        </div>
    )
}

export default SecondContainer
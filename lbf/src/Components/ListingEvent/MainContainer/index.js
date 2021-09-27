// Import styles
import "./styles.scss"

// Import ReactComponents
import Avatar from "../../Styledcomponents/Avatar"

import avatarMicheline from "../../../assets/Img/micheline.jpg"
import EventCardSearch from "../../Styledcomponents/EventCardSearch"

function ListEventContainer(){
    return(
        <div className="list__container">
            <div className="mainListEvent__container">
                <div className="profil__container-avatars">
                        <Avatar 
                        customDiv={"profil__container-avatar"} 
                        customImg={"profil__container-pictures"} 
                        customPics={avatarMicheline}
                        />
                </div>

                <div className="profil__container-data">
                    <div className="title__listContainer">
                        <div className="choice__listContainer">
                            <a href className="choice__listContainer-link"><h2>PAST</h2></a>
                        </div>
                        <div className="choice__listContainer">
                            <a href className="choice__listContainer-link"><h2>COMING SOON</h2></a>
                        </div>
                        {/* Partie qui sera visible uniquement pour l'organisateur */}
                        <div className="choice__listContainer">
                            <a href className="choice__listContainer-link"><h2>ASKING</h2></a>
                        </div>
                    </div>
                    <EventCardSearch 
                        classNameCard={"listEvent"}
                        infos={"searchEvent-infos"}
                        pictures={"listEvent-pictures"}
                        title={"Sortie culturelle"}
                        titleConfig={"searchEvent-title"}
                        language={"Roumain"}
                        placeLeft={"2 spots left"}

                    />

                    <EventCardSearch 
                        classNameCard={"listEvent"}
                        infos={"searchEvent-infos"}
                        pictures={"listEvent-pictures"}
                        title={"Tous chez julien"}
                        titleConfig={"searchEvent-title"}
                        language={"Japanese"}
                        placeLeft={"1 spot left"}
                    />

                </div>        
            </div>
        </div>
    )
}

export default ListEventContainer
import "./styles.scss"
import avatarMicheline from "../../../assets/Img/micheline.jpg"
import Input from "../Input"

import Avatar from "../../Styledcomponents/Avatar"

function ProfilContainer(){
    return(
        <div className="profil__container">
            <div className="mainProfil__container">
                <div className="profil__container-avatar">
                    <Avatar 
                    customDiv={"profil__container-avatar"} 
                    customImg={"profil__container-pictures"} 
                    />
                    <h2>No binary</h2>
                    <h2>Tel: 07 85 11 25 18</h2>
                </div>


                <div className="profil__container-data">
                    <Input />
                    <p>Micheline</p>
                    <p>Michaudiere</p>
                    <p>Paris, 20eme</p>
                    <p>pipo@gmail.com</p>
                    <p>Language speakin: FRENCH</p>
                    <p>Language to learn: RUSSIAN</p>
                    <p>Age: 22</p>
                    <p>Description:</p>

                    <div className="profil__textContent">
                        <textarea type="textarea" className="profil__textContent-text"> Salut j'aime les brebis </textarea>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfilContainer
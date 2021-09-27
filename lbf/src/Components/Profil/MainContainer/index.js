import "./styles.scss"
import Input from "../Input"

//import ReactComponents
import ButtonToggle from "../../Styledcomponents/ButtonToggle"
import Avatar from "../../Styledcomponents/Avatar"

import avatarMicheline from "../../../assets/Img/micheline.jpg"


function ProfilContainer(){
    return(
        <div className="profil__container">
            <ButtonToggle className='toggle' name='=' />
            <div className="mainProfil__container">
                <div className="profil__container-avatars">
                    <Avatar 
                    customDiv={"profil__container-avatar"} 
                    customImg={"profil__container-pictures"} 
                    customPics={avatarMicheline}
                    />
                    <h2 className="profil-genre">No binary</h2>
                    <h2 className="profil-telNumber">Tel: 07 85 11 25 18</h2>
                </div>


                <div className="profil__container-data">
                    <Input name={"PROFIL MODIFIER"} name2={"PASSWORD MODIFIER"}/>
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
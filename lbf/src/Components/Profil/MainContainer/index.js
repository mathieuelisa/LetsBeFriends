
import "./styles.scss"
import avatarMicheline from "../../../assets/Img/micheline.jpg"

function ProfilContainer(){
    return(
        <div className="profil__container">
            <div className="mainProfil__container">
                <div className="profil__container-avatar">
                    <img className="profil__container-pictures" src={avatarMicheline} alt="avatar" />
                    <h2>No binary</h2>
                    <h2>Tel: 07 85 11 25 18</h2>
                </div>

                <div className="profil__container-data">
                    <p>Micheline</p>
                    <p>Michaudiere</p>
                    <p>Paris, 20eme</p>
                    <p>pipo@gmail.com</p>
                    <p>Language speakin: FRENCH</p>
                    <p>Language to learn: RUSSIAN</p>
                    <p>Age: 22</p>
                    <p>Description:</p>

                    <div className="profil__textContent">
                        <p className="profil__textContent-text">Salut j'aime les brebis </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfilContainer
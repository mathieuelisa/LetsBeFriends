import "./styles.scss"
import avatarMicheline from "../../../assets/Img/micheline.jpg"

function Avatar({customDiv, customImg}){
    return(
        // <div className="profil__container-avatar">
        //     <img className="profil__container-pictures" src={avatarMicheline} alt="avatar" />
        // </div>

        <div className={customDiv}>
            <img className={customImg} src={avatarMicheline} alt="avatar" />
        </div>
    )
}

export default Avatar;
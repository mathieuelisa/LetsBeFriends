import "./styles.scss"
import avatarMicheline from "../../../assets/Img/micheline.jpg"

function Avatar(){
    return(
        <div>
            <img src={avatarMicheline} alt="avatar" />
        </div>
    )
}

export default Avatar;
import "./styles.scss"

function Avatar({customDiv, customImg, customPics}){
    return(
        // <div className="profil__container-avatar">
        //     <img className="profil__container-pictures" src={avatarMicheline} alt="avatar" />
        // </div>

        <div className={customDiv}>
            <img className={customImg} src={customPics} alt="avatar" />
        </div>
    )
}

export default Avatar;
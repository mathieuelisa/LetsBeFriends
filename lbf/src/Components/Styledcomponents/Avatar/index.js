import "./styles.scss"

function Avatar({customDiv, customImg, customPics}){
    return(
        <div className={customDiv}>
            <img className={customImg} src={customPics} alt="avatar" />
        </div>
    )
}

export default Avatar;
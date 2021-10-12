//React Components
import Avatar from "../Avatar"
//Styles
import "./styles.scss"
//Images
import avatarMicheline from "../../../assets/Img/micheline.jpg"
//Tools
import PropTypes from 'prop-types'
// Import images
import Male from "../../../assets/Logo/male.png"
import Female from "../../../assets/Logo/female.png"


function ParticipateRequest({
    firstname, 
    lastname, 
    imgUrl, 
    speakingLanguage, 
    description, 
    email, 
    age, 
    learningLanguages,
    handleClick,
    classNameCard,
    classNameInfos,
    titleConfig,
    ClassNamePicturesDiv,
    title,
    gender,
    classNameDescription
}){
    

    return(
        <div onClick={handleClick} className={classNameCard}>
            <div className={classNameInfos}>
                <h2>{title}</h2>
                <h3 className={titleConfig}>{firstname} {lastname.charAt(0)}.</h3>
                    {gender == "male" ? <img className="profil__container-avatars-gender" src={Male} alt="Male"/>
                        : <img className="profil__container-avatars-gender" src={Female} alt="Female"/>}
                <h4>{email}</h4>
                <h5 className={classNameDescription}>Bio of {firstname} : {description}</h5>

            </div>
        
            <div className={ClassNamePicturesDiv}>
                <Avatar 
                    customDiv={"search__container-avatar"} 
                    customImg={"search__container-pictures"}  
                    customPics={imgUrl}
                />
            </div>  
        </div>
    )
}

ParticipateRequest.propTypes = {
    firstname: PropTypes.string, 
    lastname: PropTypes.string, 
    imgUrl: PropTypes.string, 
    speakingLanguages: PropTypes.array, 
    description: PropTypes.string, 
    email: PropTypes.string, 
    age: PropTypes.number, 
    learningLanguages: PropTypes.array,
    handleClick: PropTypes.func,
    classNameCard: PropTypes.string,
    classNameInfos: PropTypes.string,
    titleConfig: PropTypes.string,
    ClassNamePicturesDiv: PropTypes.string,
    title: PropTypes.string
}

export default ParticipateRequest
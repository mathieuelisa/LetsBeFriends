//React Components
import Avatar from "../Avatar"
//Styles
import "./styles.scss"
//Images
import avatarMicheline from "../../../assets/Img/micheline.jpg"
//Tools
import PropTypes from 'prop-types'

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
    placesLeft,
    startingDate

}){
    

    return(
        <div onClick={handleClick} className={classNameCard}>
            <div className={classNameInfos}>
                <h2 className={titleConfig}>{firstname}  {lastname.charAt(0)}.</h2>
                <h3>{age} ans</h3>
                <h3>{title}</h3>
                <h4>{placesLeft} spots left</h4>
                <h4>{startingDate}</h4>
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
    ClassNamePicturesDiv: PropTypes.string
}

export default ParticipateRequest
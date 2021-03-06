//React Components
import Avatar from "../Avatar"
//Styles
import "./styles.scss"
//Tools
import PropTypes from 'prop-types'

function EventCardSearch({
    classNameCard, 
    infos, 
    pictures, 
    title, 
    titleConfig, 
    textConfig, 
    languages, 
    placesLeft, 
    handleClick, 
    imgUrl
}){
    return(
        <div onClick={handleClick} className={classNameCard}>
            <div className={infos}>
                <h2 className={titleConfig}>{title}</h2>
                {/* Commenter afin de pouvoir bosser sur les autres pages */}
                <p>Languages : {languages.map(language => language.name)}</p> 
                <p className={textConfig}>Places remaining : {placesLeft}</p>
                
            </div>

            <div className={pictures}>
                <Avatar 
                    customDiv={"search__container-avatar"} 
                    customImg={"search__container-pictures"}  
                    customPics={imgUrl}
                />
            </div>  
        </div>
    )
}

EventCardSearch.propTypes = {
    classNameCard: PropTypes.string,
    infos: PropTypes.string,
    pictures: PropTypes.string,
    title:  PropTypes.string,
    titleConfig: PropTypes.string,
    languages: PropTypes.array,
    placesLeft: PropTypes.number,
}

export default EventCardSearch
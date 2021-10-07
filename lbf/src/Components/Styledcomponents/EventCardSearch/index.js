//React Components
import Avatar from "../Avatar"
//Styles
import "./styles.scss"
//Images
import avatarMicheline from "../../../assets/Img/micheline.jpg"
//Tools
import PropTypes from 'prop-types'
import { useState } from "react"

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
    const [loaderLanguages, setLoaderLanguages] = useState(false)

    if (languages) {
        setLoaderLanguages(true);
    }
    return(
        <div onClick={handleClick} className={classNameCard}>
            <div className={infos}>
                <h2 className={titleConfig}>{title}</h2>
                {/* Commenter afin de pouvoir bosser sur les autres pages */}
                {loaderLanguages ? <p>{languages.map(language => language.name)}</p> : ""}
                {loaderLanguages ? <p className={textConfig}>{placesLeft} spot left</p> : ""}
                
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
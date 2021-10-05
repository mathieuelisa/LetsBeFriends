//React Components
import Avatar from "../Avatar"
//Styles
import "./styles.scss"
//Images
import avatarMicheline from "../../../assets/Img/micheline.jpg"
//Tools
import PropTypes from 'prop-types'

function EventCardSearch({classNameCard, infos, pictures, title, titleConfig, languages, placesLeft}){
    return(
        <div className={classNameCard}>
            <div className={infos}>
                <h2 className={titleConfig}>{title}</h2>
                <p>{languages.map(language => language.name)}</p>
                <p>{placesLeft} spot left</p>
            </div>

            <div className={pictures}>
                <Avatar 
                    customDiv={"search__container-avatar"} 
                    customImg={"search__container-pictures"}  
                    customPics={avatarMicheline}
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
    language: PropTypes.string,
    placesLeft: PropTypes.number,
}

export default EventCardSearch
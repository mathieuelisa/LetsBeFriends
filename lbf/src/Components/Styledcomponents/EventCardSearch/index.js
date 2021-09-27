//React Components
import Avatar from "../Avatar"
//Styles
import "./styles.scss"
//Images
import avatarMicheline from "../../../assets/Img/micheline.jpg"
//Tools
import PropTypes from 'prop-types'


function EventCardSearch({classNameCard, infos, pictures, title, titleConfig, language, placeLeft}){
    return(
        <div className={classNameCard}>
            <div className={infos}>
                <h2 className={titleConfig}>{title}</h2>
                <p>{language}</p>
                <p>{placeLeft} spot left</p>
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
    classNameCard: PropTypes.string.isRequired,
    infos: PropTypes.string.isRequired,
    pictures: PropTypes.string.isRequired,
    title:  PropTypes.string.isRequired,
    titleConfig: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    placeLeft: PropTypes.number.isRequired,
}

export default EventCardSearch
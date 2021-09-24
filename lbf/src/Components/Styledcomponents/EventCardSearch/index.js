import Avatar from "../Avatar"
import "./styles.scss"

import avatarMicheline from "../../../assets/Img/micheline.jpg"


function EventCardSearch({classNameCard, infos, pictures, title, titleConfig,language, placeLeft}){
    return(
        <div className={classNameCard}>
            <div className={infos}>
                <h2 className={titleConfig}>{title}</h2>
                <p>{language}</p>
                <p>{placeLeft}</p>
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

export default EventCardSearch
// Import styles
import "./styles.scss"
import "../../../"
// Import Gif
import LogoError from "../../../assets/Logo/chevre.gif"
import { Link } from "react-router-dom"

function ErrorContainer(){
    return(
        <div className="errorContainer__container" >
            <div className="errorContainer__container-containerPictures">
                <img className="errorContainer__container-containerPictures-pictures" src={LogoError} alt="Logo Error 404" />
            </div>

            <div className="errorContainer__container-containerText">
                <h1>OOPS !</h1>
                <h2 className="errorContainer__container-containerText-second">Someone seems to have eaten the page you were looking for...</h2>
            </div>

           <Link to="/"> <button className="errorContainer__container-errorButton">Home page ? </button></Link>
           
        </div>
    )
}

export default ErrorContainer
//Import React components
import ButtonToggle from "../../Styledcomponents/ButtonToggle"
import Avatar from "../../Styledcomponents/Avatar"
//Import styles
import "./styles.scss"
//Import fonts
import "../../../assets/Fonts/Amalfi.ttf"
import "../../../assets/Fonts/Caviar.ttf"
//Import icons
import linkedin from "../../../assets/Icons/linkedin.png"
import github from "../../../assets/Icons/github.png"
//Import pictures
import avatarMathieu from "../../../assets/Profils/mathieu.jpg"
import avatarRobin from "../../../assets/Profils/robin.jpg"
import avatarJulien from "../../../assets/Profils/julien.jpg"
import avatarJordan from "../../../assets/Profils/jordan.jpg"
import avatarEmmanuel from "../../../assets/Profils/emmanuel.jpg"


function ContactContainer(){
    return(
        <div className="contact__container">
        <ButtonToggle className='toggle' name='=' />
            <div className="mainContact__container">
                <div className="contact__container-text">
                    <h1 className="contact__container-title">LETS WORK TOGETHER</h1>
                        <p className="contact__container-infos">Below are the members of the Lets Be Friends project team.<br/>
                            For more details, to report any bugs or to simply meet one of the members of the site
                            don't hesitate to contact us on our social networks.
                        </p>
                </div>

                <div className="contact__avatar-teams">
                    <div className="contact__avatar-profils">

                    {/* Avatar des developpeurs du projet */}
                        <div className="contact__avatar-container">
                        <h2 className="contact__avatar-name">Julien</h2>
                            <Avatar 
                            customDiv={"contact__avatar-div"} 
                            customImg={"contact__avatar-img"}
                            customPics={avatarJulien}
                            />
                            <h3 className="contact__avatar-post">Scrum Master</h3>
                                <div className="contact__avatar-social">
                                    <a href="https://www.linkedin.com/in/julien-maurice"  target="_blank" rel="noreferrer">
                                        <img className="linkedin-logo"  src={linkedin} alt="linkedin" href="http://www.google.com" /> 
                                    </a>
                                    <a href="https://github.com/JulienMaurice" target="_blank" rel="noreferrer">
                                        <img className="github-logo"  src={github} alt="github" />
                                    </a>
                                </div>
                        </div>

                        <div className="contact__avatar-container">
                        <h2 className="contact__avatar-name">Mathieu</h2>
                        <Avatar 
                        customDiv={"contact__avatar-div"} 
                        customImg={"contact__avatar-img"} 
                        customPics={avatarMathieu}
                        />
                        <h3 className="contact__avatar-post">Lead Dev FRONT / Product Owner</h3>
                                <div className="contact__avatar-social">
                                    <a href="https://www.linkedin.com/in/mathieuelisa/" target="_blank" rel="noreferrer">
                                        <img className="linkedin-logo" src={linkedin} alt="linkedin" />
                                    </a>
                                    <a href="https://github.com/mathieuelisa" target="_blank" rel="noreferrer">
                                        <img className="github-logo"  src={github} alt="github" />
                                    </a>
                                </div>
                        </div>

                        <div className="contact__avatar-container">
                        <h2 className="contact__avatar-name">Emmanuel</h2>
                        <Avatar 
                        customDiv={"contact__avatar-div"} 
                        customImg={"contact__avatar-img"} 
                        customPics={avatarEmmanuel}
                        />
                        <h3 className="contact__avatar-post">Réfèrent technique</h3>
                                <div className="contact__avatar-social">
                                <a href="www.google.com" target="_blank" rel="noreferrer">
                                    <img className="linkedin-logo"src={linkedin} alt="linkedin" />
                                </a>
                                <a href="https://github.com/emmanuelMartin53" target="_blank" rel="noreferrer">
                                    <img className="github-logo" src={github} alt="github" />
                                </a>
                                </div>
                        </div>

                        <div className="contact__avatar-container">
                        <h2 className="contact__avatar-name">Jordan</h2>
                        <Avatar 
                        customDiv={"contact__avatar-div"} 
                        customImg={"contact__avatar-img"}
                        customPics={avatarJordan}
                        />
                        <h3 className="contact__avatar-post">Lead Dev BACK</h3>
                                <div className="contact__avatar-social">
                                    <a href="https://www.linkedin.com/in/jordan-espitalier-8322a3213/" target="_blank" rel="noreferrer">
                                        <img className="linkedin-logo" src={linkedin} alt="linkedin" />
                                    </a>
                                    <a href="https://github.com/JordanEspitalier" target="_blank" rel="noreferrer">
                                        <img className="github-logo"  src={github} alt="github" />
                                    </a>
                                </div>
                        </div>

                        <div className="contact__avatar-container">
                        <h2 className="contact__avatar-name">Robz</h2>
                        <Avatar 
                        customDiv={"contact__avatar-div"} 
                        customImg={"contact__avatar-img"} 
                        customPics={avatarRobin}
                        />
                        <h3 className="contact__avatar-post">Git Master</h3>
                                <div className="contact__avatar-social">
                                    <a href="https://www.linkedin.com/in/robin-marien-64a571135/" target="_blank" rel="noreferrer">
                                        <img className="linkedin-logo" src={linkedin} alt="linkedin" />
                                    </a>
                                    <a href="https://github.com/Marob-nod" target="_blank" rel="noreferrer">
                                        <img className="github-logo"  src={github} alt="github" />
                                    </a>
                                </div>
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactContainer
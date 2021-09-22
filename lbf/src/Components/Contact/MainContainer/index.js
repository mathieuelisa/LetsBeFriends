import Avatar from "../../Styledcomponents/Avatar"
import "./styles.scss"

function ContactContainer(){
    return(
        <div className="contact__container">
            <div className="mainContact__container">
                <div className="contact__container-text">
                    <h1 className="contact__container-title">CONTACT</h1>
                        <p className="contact__container-infos">Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                        </p>
                </div>

                <div className="contact__avatar-teams">
                    <div className="contact__avatar-profils">
                        <div className="contact__avatar-container">
                           <h2>Julien</h2>
                           <Avatar className="pipo" />
                                <p>OUou</p>
                        </div>

                        <div className="contact__avatar-container">
                           <h2>Mathieu</h2>
                           <Avatar />
                                <p>OUou</p>
                        </div>

                        <div className="contact__avatar-container">
                           <h2>Emmanuel</h2>
                           <Avatar />
                                <p>OUou</p>
                        </div>

                        <div className="contact__avatar-container">
                           <h2>Jordan</h2>
                           <Avatar />
                                <p>OUou</p>
                        </div>

                        <div className="contact__avatar-container">
                           <h2>Robz</h2>
                           <Avatar />
                                <p>OUou</p>
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactContainer
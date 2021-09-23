// Styles
import "./styles.scss"
import "../../../assets/Fonts/Surfing2.woff"
// import "../../../assets/Fonts/capital.woff2"
import wallpaper from "../../../assets/Wallpaper/wallpaper.jpg"

import Header from "../Header"

function MainContainer(){
    return(
        <div className="main__container" style={{backgroundImage:`url(${wallpaper})`}}>

            <div className="main__container-overlay">
                <Header />
                <h1 className="main__container--title">LETS BE FRIEND</h1>
                    <h3 className="main__container--secondTitle">The simpliest way to meet people and train languages !</h3>
            </div>

        </div>
    )
}

export default MainContainer
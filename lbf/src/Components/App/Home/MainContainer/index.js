
import "./styles.scss"

import wallpaper from "../../../../assets/Wallpaper/wallpaper.jpg"


function MainContainer(){
    return(
        <div className="App" style={{backgroundImage:`url(${wallpaper})`}}>
       
        <div className="color-overlay">
        <h1 className="text">LETS BE FRIEND</h1>
            <h3 className="text2">The simpliest way to meet people and train languages !</h3>
        </div>
      </div>
    )
}

export default MainContainer
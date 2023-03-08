import Facebook from "./Pic/facebook.png"
import Instagram from "./Pic/instagram.png"
import Linkedin from "./Pic/linkedin.png"
import Twitter from "./Pic/twitter.png"

export function Footer () {
    return(
        <div className="footer-container">
            <div className="footer-content">
                <h3>Get in touch!</h3>
                <p>suparat.tsan@gmail.com | (+66)83-624-7024</p>
                <div className="footer-img">
                    <a href=""><img src={Facebook}/></a>
                    <a href=""><img src={Instagram}/></a>
                    <a href=""><img src={Linkedin}/></a>
                    <a href=""><img src={Twitter}/></a>
                </div>
            </div>
        </div>
        
    )
}
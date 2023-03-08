import MyPic from "./Pic/my-pic.jpg"
import Facebook from "./Pic/facebook.png"
import Instagram from "./Pic/instagram.png"
import Linkedin from "./Pic/linkedin.png"
import Twitter from "./Pic/twitter.png"

function Header () {
    return (
        <div className="header-container">
            <div className="header-left">
                <img src={MyPic} className="my-pic"/>
            </div>
            <div className="header-right">
                <h1>Ms. Suparat Sangprasurtsuk</h1>
                <p> I love coding skills and interested in Software Developer. I have experiences 
                    in accounting and bussiness background. I would like to be Software Developer to drive many businesses for successfully.</p>
                <div className="header-contact">
                    <p>You can know me better :</p>
                    <div className="pic-contact">
                        <a href=""><img src={Facebook}/></a>
                        <a href=""><img src={Instagram}/></a>
                        <a href=""><img src={Linkedin}/></a>
                        <a href=""><img src={Twitter}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
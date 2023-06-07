import { TiTick } from "react-icons/ti";
import { LuFacebook, LuTwitter } from "react-icons/lu";

const Footer = () => {

    let iconStyles = { color: "white", fontSize: "1.5em", padding: "0px 10px" };

    return (
        <div id="footer">
            <div className="footer-content">
                <div className="column">
                    <span>Company</span>
                    <ul>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Careers</a></li>
                    </ul>
                </div>
                <div className="column">
                    <span>View Website in</span>
                    <ul>
                        <li><TiTick /> English</li>
                    </ul>
                </div>
                <div className="column">
                    <span>Need Help?</span>
                    <ul>
                        <li><a href="/">Visit Help Center</a></li>
                        <li><a href="/">Share Feedback</a></li>
                    </ul>
                </div>
                <div className="column">
                    <span>Connect with Us</span>
                    <div className="footer-logo">
                        <LuFacebook style={iconStyles} /> < LuTwitter style={iconStyles} />
                    </div>
                </div>
            </div>
            <div id="copyright">
                <p>© 2023 STAR. All Rights Reserved.</p>
                <p>Terms Of Use &nbsp; Privacy Policy &nbsp; FAQ</p>
                <br />
            </div>
        </div>
    );
}
 
export default Footer;
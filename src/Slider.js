import slider_img from "./slider_image.jpg";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const Slider = () => {
    return (
        <div id="slider">
                <img src={slider_img} alt="" />
                <div className="slider_box">
                    <div className="left-arrow">
                        <BsFillArrowLeftCircleFill id="FALC"/>
                    </div>
                    <div className="right-arrow">
                        <BsFillArrowRightCircleFill id="FARC"/>
                    </div>
                </div>
            </div>
    );
}
 
export default Slider;
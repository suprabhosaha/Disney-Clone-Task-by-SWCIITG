import { Link } from 'react-router-dom';

import Sidebar_logo from './Disney+Hotstar-Logo.png';
import { FaGreaterThan } from "react-icons/fa";
import { BiUserCircle, BiTennisBall } from "react-icons/bi";
import { RiSearch2Line, RiMovie2Line } from "react-icons/ri";
import { IoHomeSharp } from "react-icons/io5";
import { BsDisplay } from "react-icons/bs";

const Sidebar = () => {

    let IconStyle = { fontSize: "0.6rem" };
    let LogoStyle = { color: "gray", fontSize: "1.6rem", cursor: "pointer"};

    return (
        <div id="sidebar">
            <img src={ Sidebar_logo } alt="" />
            <div id="subscribe">Subscribe <FaGreaterThan style={IconStyle}/></div>
            <div id="sidebar-logo">
                <BiUserCircle  className="sidebar-logo" style={ LogoStyle } />
                <RiSearch2Line className="sidebar-logo" style={ LogoStyle } />
                <IoHomeSharp className="sidebar-logo" style={ LogoStyle } />
                <Link to="/home/movie"><BsDisplay className="sidebar-logo" style={ LogoStyle } /></Link>
                <RiMovie2Line className="sidebar-logo" style={ LogoStyle } />
                <BiTennisBall className="sidebar-logo" style={ LogoStyle } />
            </div>
        </div>
    );
}
 
export default Sidebar;
import logo from './logo.png'; 

const Navbar = () => {
    return (
        <div id="navbar">
            <img src={ logo } alt="Disney+ Logo" id='nav-logo'/ >
            <button className="login">Login</button>
        </div>
    );
};
 
export default Navbar;
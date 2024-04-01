import "../Nav.css";
const Nav=()=>{
    return(
        <>
        <div className="Navbar">
        <div className='logo'>
                <img src="/logo.png" alt="logo"/>
            </div>
            <ul>
                <li> <a href="#">Menu</a></li>
                <li> <a href="#">Location</a></li>
                <li> <a href="#">About</a></li>
                <li> <a href="#">Contact</a></li>
            </ul>
            <button>Login</button>
        </div>
           
        </>
    );
}
export default Nav;
import { Link } from 'react-router-dom';
import logo from './images/photography-project-img.png'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <input type="checkbox" id='check' />
            <label htmlFor="check" className='checkbtn'>
                <li className='fas fa-bars'></li>
            </label> 
            <Link to="/"><label className='logo'><img src={logo} /></label></Link>
            <ul>
                <li><Link className="a" to="/">Portfolio</Link></li>
                <li><Link className='a' to="/">Home</Link></li>
                {/* <li><Link className="a" to="/create">New Blog</Link></li> */}
                <li><Link className="a" to="/about">About</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;
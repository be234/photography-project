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
                <li><a className="a" href="/">Portfolio</a></li>
                <li><a className='a' href="/">Home</a></li>
                {/* <li><Link className="a" to="/create">New Blog</Link></li> */}
                <li><a className="a" href="/about">About</a></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;
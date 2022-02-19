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
                <li><Link className="a" href="/">Portfolio</Link></li>
                <li><Link className='a' href="/">Home</Link></li>
                {/* <li><Link className="a" to="/create">New Blog</Link></li> */}
                <li><Link className="a" href="/about">About</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;
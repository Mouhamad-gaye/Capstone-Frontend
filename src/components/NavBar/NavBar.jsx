import { Link } from "react-router-dom"
import styles from './Nav.module.css'
import Logout from '../utility/Logout'


export default function NavBar() {

    
    return (
        <nav className={styles.mainNav}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/news'>Announcements</Link></li>
                <li><Link to='/events'>Events</Link></li>
                <li><Link to='/activities'>Activities</Link></li>
                <li><Link to='/register'><button>Register</button></Link></li>
                <li><Link to='/signin'><button>Sign In</button></Link></li>
                   
            </ul>
        </nav>
    )
}
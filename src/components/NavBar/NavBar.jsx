import { Link } from "react-router-dom"
import styles from './Nav.module.css'
import Logout from '../utility/Logout'




export default function NavBar() {
    
    const isAuthenticated = localStorage.getItem("token") !== null;
    const rawData = localStorage.getItem("member");
    const member = rawData ? JSON.parse(rawData) : {};

    

    return (
        <nav className={styles.mainNav}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/news'>Announcements</Link></li>
                <li><Link to='/events'>Events</Link></li>
                <li><Link to='/activities'>Activities</Link></li>
                <li><Link to='/register'><button>Register</button></Link></li>
                
                {!isAuthenticated && <li><Link to='/signin'><button>Sign In</button></Link></li>}
               
                {isAuthenticated && member.firstName ? (
                    <li>
                        Welcome, {member.firstName}!
                        <button className="nav-button logout" onClick={Logout}>Logout</button>
                    </li>
                ) : null}
            </ul>
        </nav>
    )
}
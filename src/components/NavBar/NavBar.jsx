import { Link } from "react-router-dom"
import styles from './Nav.module.css'

export default function NavBar() {
    return (
        <nav className={styles.mainNav}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/news'>Announcements</Link>
                </li>
                <li>
                    <Link to='/events'>Events</Link>
                </li>
                <li>
                    <Link to='/activities'>Activities</Link>
                </li>
                <li>
                    <Link>
                        <button>Register</button>
                    </Link>
                </li>
                <li>
                    <Link>
                    <button>Sign In</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
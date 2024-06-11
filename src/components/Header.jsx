import '../styles/Header.css'
import logo from "../images/argentBankLogo.png"
import { Link } from 'react-router-dom';

export default function Header({loggedIn, userName}){
    return(
        <header>
            <img src={logo} alt="logo du site" />
            <nav>
                <div className={`loggedOutSection ${loggedIn === 1 ? 'hidden' : ''}`}>
                    <Link to="/sign-in">
                        <i className='fa fa-user-circle'></i>
                        Sign in
                    </Link>
                </div>
                <div className={`loggedInSection ${loggedIn === 0 ? 'hidden' : ''}`}>
                    <Link to="/bank-account">
                        <i className='fa fa-user-circle'></i>
                        {userName}
                    </Link>
                    <Link to="/">
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            </nav>
        </header>
    )
}
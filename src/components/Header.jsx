import '../styles/Header.css'
import logo from "../images/argentBankLogo.webp"
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/counter/userSlice';

export default function Header(){
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    const userName= useSelector((state)=> state.user.userInfo?.body?.userName);

    const logoutFunction = () =>{
        dispatch(logout());
    }

    return(
        <header>
            <Link to="/" className='main-nav-logo'>
                <img src={logo} alt="logo du site" />
            </Link>
            <nav>
                <div className={`loggedOutSection ${token!==null ? 'hidden' : ''}`}>
                    <Link to="/sign-in">
                        <i className='fa fa-user-circle navItem'>Sign in</i>
                        
                    </Link>
                </div>
                <div className={`loggedInSection ${token==null ? 'hidden' : ''}`}>
                    <Link to="/user">
                        <i className='fa fa-user-circle navItem'>{userName}</i>
                        
                    </Link>
                    <Link to="/" onClick={logoutFunction} className='logout'>
                        <i className="fa fa-sign-out navItem">Sign Out</i>
                        
                    </Link>
                </div>
            </nav>
        </header>
    )
}
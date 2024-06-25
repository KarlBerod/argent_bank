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
            <Link to="/">
                <img src={logo} alt="logo du site" />
            </Link>
            <nav>
                <div className={`loggedOutSection ${token!==null ? 'hidden' : ''}`}>
                    <Link to="/sign-in">
                        <i className='fa fa-user-circle'></i>
                        Sign in
                    </Link>
                </div>
                <div className={`loggedInSection ${token==null ? 'hidden' : ''}`}>
                    <Link to="/bank-account">
                        <i className='fa fa-user-circle'></i>
                        {userName}
                    </Link>
                    <Link to="/" onClick={logoutFunction}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            </nav>
        </header>
    )
}
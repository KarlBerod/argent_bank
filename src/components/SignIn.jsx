import "../styles/SignIn.css"
import Button from "./Button"
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../features/user/userSlice';
import { useState } from "react";

export default function SignIn(){
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setUserMessage] = useState(false);

    const login = async(e) =>{
        e.preventDefault();
        setUserMessage(true);
        try {
            const result = await dispatch(loginAsync({ email, password }));
            if (loginAsync.fulfilled.match(result)) {
                window.location.href = "/user";
            }
        } catch (err) {
            console.error('Failed to login:', err);
        }
    };

    return(
        <div className="bg-dark">
            <section class="sign-in-content">
                <i class="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In </h1>
                <form>
                    <div class="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div class="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className= {`errorMessage ${errorMessage===false ? 'hidden' : ''} `}>
                        <p>Combinaison nom d'utilisateur/mot de passe incorrecte</p>
                    </div>
                    <div class="input-remember">
                        <input type="checkbox" id="remember-me" /><label for="remember-me">
                            Remember me
                        </label>
                    </div>
                    <div onClick={login}>
                        <Button text="Sign in" className="sign-in-button"/>
                    </div>
                </form>
            </section>
        </div>
    )
}
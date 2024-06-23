import "../styles/SignIn.css"
import Button from "./Button"
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../features/counter/userSlice';
import { useState } from "react";

export default function SignIn(){
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async(e) =>{
        e.preventDefault();
        console.log('Logging in with:', username, password);
        try {
            const result = await dispatch(loginAsync({ username, password }));
            if (loginAsync.fulfilled.match(result)) {
                const token = result.payload;
                console.log(token, "token")
            }
        } catch (err) {
            console.error('Failed to login:', err);
        }
    };

    return(
        <div className="bg-dark">
            <section class="sign-in-content">
                <i class="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div class="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div class="input-wrapper">
                        <label for="password">Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
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
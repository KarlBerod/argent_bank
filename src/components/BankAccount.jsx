import "../styles/BankAccount.css"
import Button from "./Button"
import Balance from "./Balance"
import { useState } from "react";


export default function BankAccount(){
    const firstName=0;
    const lastName=0;
    const [edit, setEdit]=useState(false);
    const [username, setUsername]=useState('username');

    const editionMod= () =>{ 
        setEdit(!edit);
        console.log('Edit mode:', !edit);
    }

    const editUsername=(value) =>{
        setUsername(value);
    }

    return(
        <div className="bg-dark">
            <div className={`userpage-title-section ${edit? 'hidden' : ''}`}>
                <h1 className="userpage-title">Welcome back {username}</h1>
                <div onClick={editionMod}>
                    <Button text="Edit Name" className="edit-name-button"/>
                </div>
            </div>
            <div className={`userpage-title-section ${edit? '' : 'hidden'}`}>
                <h1 className="userpage-title">Edit user info</h1>
                <form>
                    <div className="formInputs">
                        <div>
                            <label for="username">User name: </label>
                            <input type="text" id="username" value={username} onChange={(e) => editUsername(e.target.value)}/>
                        </div>
                        <div>
                            <label for="firstName">First name:  </label>
                            <input className="readOnly" type="text" id="firstName" value={firstName} readOnly/>
                        </div>
                        <div>
                            <label for="lastName">Last name :  </label>
                            <input className="readOnly" type="text" id="lastName" value={lastName} readOnly/>
                        </div>
                    </div>
                    <div className="edit-user-buttons">
                        <div onClick={editionMod}>
                            <Button text="Save" className="save-name-edit-button" type="submit" />
                        </div>
                        <div onClick={editionMod}>
                            <Button text="Cancel" className="cancel-name-edit-button" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="balances">
                <Balance accountType="Argent Bank Checking (x8349)" balance="$2,082.79" withdraw="Available Balance" buttonText="View transactions" buttonPath="/user"/>
                <Balance accountType="Argent Bank Checking (x8349)" balance="$2,082.79" withdraw="Available Balance" buttonText="View transactions" buttonPath="/user"/>
                <Balance accountType="Argent Bank Checking (x8349)" balance="$2,082.79" withdraw="Available Balance" buttonText="View transactions" buttonPath="/user"/>
            </div>
        </div>
    )
}
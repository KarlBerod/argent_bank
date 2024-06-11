import "../styles/BankAccount.css"
import Button from "./Button"
import Balance from "./Balance"
import { useState } from "react";


export default function BankAccount(){
    const [edit, setedit]=useState(false);

    const editusername=() =>{
        setedit=(!edit);
    }

    return(
        <div className="bg-dark">
            <div className="userpage-title-section">
                <h1 className="userpage-title">Welcome back *name*</h1>
                <Button text="Edit Name" className="edit-name-button"/>
            </div>
            <div className="userpage-title-section">

            </div>
            <div className="balances">
                <Balance accountType="Argent Bank Checking (x8349)" balance="$2,082.79" withdraw="Available Balance" buttonText="View transactions" buttonPath="/transactions"/>
                <Balance accountType="Argent Bank Checking (x8349)" balance="$2,082.79" withdraw="Available Balance" buttonText="View transactions" buttonPath="/transactions"/>
                <Balance accountType="Argent Bank Checking (x8349)" balance="$2,082.79" withdraw="Available Balance" buttonText="View transactions" buttonPath="/transactions"/>
            </div>
        </div>
    )
}
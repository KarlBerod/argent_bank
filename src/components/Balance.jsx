import "../styles/Balance.css"
import Button from "./Button"
import { Link } from "react-router-dom"



export default function Balance({accountType, balance, withdraw, buttonText, buttonPath}){    return(
        <div className="balance">
            <div className="balanceLeft">
                <h3 className="balance-title">{accountType}</h3>
                <p className="balance-amount">{balance}</p>
                <p className="balance-amount-description">{withdraw}</p>
            </div>
            <div className="balanceRight">
                <Link to={{
                    pathname: `${buttonPath}`,
                    state: { accountType, balance, withdraw }
                }}>
                    <Button text={buttonText} className="transactionButton"/>
                </Link>
            </div>
        </div>
    )
}
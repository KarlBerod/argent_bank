import "../styles/Transactions.css"
import Balance from "./Balance"
import { useLocation } from 'react-router-dom';
import Transaction from "./Transaction";


export default function Transactions(){
    const location = useLocation();
    const { accountType, balance, withdraw } = location.state || {};
    return(
        <div>
            <Balance accountType={accountType} balance={balance} withdraw={withdraw} buttonText="Back" buttonPath="/user"/>
        <div className="transactionsDescription">
            <p className="transactionDateTitle">Date</p>
            <p className="transactionDescriptionTitle">Description</p>
            <p>Amount</p>
            <p>Balance</p>
        </div>
        <div className="individualTransaction">
            <Transaction date="27/02/20" description="Golden Sun Bakery" amount="$8.00" balance="$298.00"/>
            <Transaction date="27/02/20" description="Golden Sun Bakery" amount="$8.00" balance="$298.00"/>
            <Transaction date="27/02/20" description="Golden Sun Bakery" amount="$8.00" balance="$298.00"/>
            <Transaction date="27/02/20" description="Golden Sun Bakery" amount="$8.00" balance="$298.00"/>
            <Transaction date="27/02/20" description="Golden Sun Bakery" amount="$8.00" balance="$298.00"/>
        </div>
        </div>
    )
}
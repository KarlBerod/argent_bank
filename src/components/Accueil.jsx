import '../styles/Accueil.css'
import Banner from "./Banner"
import Feature from "./Feature"
import iconChat from "../images/icon-chat.png"
import iconMoney from "../images/icon-money.png"
import iconSecurity from "../images/icon-security.png"

export default function Accueil(){
    return(
        <div>
            <Banner strongText="No fees.No minimum deposit.High interest rates" text="Open a savings account with Argent Bank today!"/>
            <section className='features'>
                <Feature title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." logo={iconChat} alt="chat icon" />
                <Feature title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!" logo={iconMoney} alt="money icon"/>
                <Feature title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe." logo={iconSecurity} alt="security icon"/>
            </section>
        </div>
    )
}
import '../styles/Banner.css'
import bank_tree from "../images/bank-tree.jpeg"

function TextSplitting({text}){
    const splittedText = text.split(".");
    return(
        splittedText.map((sentence, index) => 
            <p key={index} className='bannerStrongText'>{sentence}.</p>
        )
    );
}

export default function Banner({strongText, text}){
    return(
        <div className='bannerImage' style={{ backgroundImage: `url(${bank_tree})` }}>
            <div className='bannerText'>
                <div className='bannerTitle'>
                    <TextSplitting text={strongText}/>
                </div>
                <div className='bannerSubtitle'>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}
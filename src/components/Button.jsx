import "../styles/Button.css"

export default function Button({text, className, type="button"}){
    return(
        <button className={className} type={type}>{text}</button>
    )
}
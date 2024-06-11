import '../styles/Feature.css'

export default function Feature({title, text, logo, alt}){
    return(
        <div className="feature-item">
          <img src={logo} alt={alt} className="feature-icon" />
          <h3 class="feature-item-title">{title}</h3>
          <p>
            {text}
          </p>
        </div>
    )
}
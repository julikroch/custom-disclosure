import box from '../images/illustration-box-desktop.svg'
import woman from '../images/illustration-woman-online-desktop.svg'

const Image = () => {
    return (
        <div className="faq__images">
            <img className="faq__images-box" src={box} alt="Box" />
            <img className="faq__images-hero" src={woman} alt="Hero" />
        </div>
    )
}

export default Image

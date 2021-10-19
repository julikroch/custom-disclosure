import box from '../images/illustration-box-desktop.svg'
import woman from '../images/illustration-woman-online-desktop.svg'

const Image = () => {
    return (
        <div className="image-wrapper">
            <img src={box} alt="Logo" />
            <img src={woman} alt="Logo" />
        </div>
    )
}

export default Image

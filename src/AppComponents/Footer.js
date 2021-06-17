import '../ComponentsStyle/footer.css'
import {IconContext} from 'react-icons'
import { AiFillInstagram, AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
    let d = new Date()
    let year = d.getFullYear()
    

    return (
        <div className='footer'>
            <IconContext.Provider
         value={{ color: '#bb2525'}}
        >   <div className='socialMedia'>
                <AiFillInstagram />
                <AiFillFacebook />
                <AiFillLinkedin />
                <AiFillTwitterSquare />
            </div>
            </IconContext.Provider>
            <p> &copy; : {year} pizzahutt.com </p>
        </div>
    )
    }

export default Footer

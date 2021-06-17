
import contactImage from '../Assets/contactimage.jpg'
import '../ComponentsStyle/contact.css'
const Contact = () => {
    return (
        <div className='contact'>
            <div className='leftSide'
            style={{ backgroundImage: `url(${contactImage})`}}>

            </div>
            <div className='rightSide'>
                <h1>Contact Us</h1>

                <form id='contact-form' method='POST'>
                    <input nmae='name' placeholder='Name' type='text' required/>
                    <input nmae='email' placeholder='Email' type='email'  required/>
                    <textarea rows='4' type='text' name='message' placeholder='Enter message' required/>
                    <button type='submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact

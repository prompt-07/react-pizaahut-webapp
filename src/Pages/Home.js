import {Link} from 'react-router-dom'
import imgBack from '../Assets/background2.jpg'
import '../ComponentsStyle/home.css'

const Home = () => {
    return (
        <div className='home' style={ { backgroundImage : `url(${imgBack})`}}>
            <div className='headerContainer' >
                <h1>Pizza Hut</h1>
                <p>No One Outpizzas the Hut</p>
                <Link to='/menu'>
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home

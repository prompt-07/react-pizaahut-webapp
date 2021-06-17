import MenuList from '../Assets/menulist.js'
import MenuItem from '../AppComponents/MenuItem'
import '../ComponentsStyle/menu.css'

const Menu = () => {
    return (
        <div className='menu' >
            <h1 className='menuTitle'>Our Menu 📓</h1>
            <div className='menuList'>
                { MenuList.map((item, id)=> {
                    return(<MenuItem key={id} 
                        image={item.image}
                        name={item.name}
                        price={item.price}/>)
                    
                }) }
            </div>
        </div>
    )
}

export default Menu
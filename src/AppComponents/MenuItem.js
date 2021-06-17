
const MenuItem = ({ image, name, price }) => {
    return (
        <div className='menuItem'>
            <div style={{backgroundImage: `url(${image})`}}></div>         
            {console.log(name)}
            <h1>{name}</h1>
            <p>Rs.{price}/-</p>
        </div>
    )
}

export default MenuItem

import React  from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    
        return (
            <nav className='navbar bg-primary'>
                <h1>Planet List</h1>
                <ul>
                    <li>
                        <Link to="/"> Home </Link>

                        </li>
                     <li>
                     <Link to="/favourites"> Favourites </Link>
                         </li>   

                    
                </ul>
            </nav>
        )
    
}





export default Navbar

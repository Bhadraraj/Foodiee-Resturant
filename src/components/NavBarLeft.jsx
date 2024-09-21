import React from 'react'

import {Link} from 'react-router-dom'

const NavBarLeft = () => {
    return (
        <>
            <div className="navBarLeft">
<ul>
    <li>
         
         <Link to='/home'> Home </Link>
    </li>
</ul>

            </div></>
    )
}

export default NavBarLeft
import React, { useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import logo from '../images/logo.png'

import CartDemo from './CartDemo'
const NavBarTop = () => {
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart); 
    };

    return (
        <>
            <div className="container-xxl navBarTopCartMain">
                <header className="headerSection p-0">
                    {/* <div className="container"> */}
                        <div className="navBar d-flex align-items-center justify-content-between">

                            <div className="logo">
                          <img src={logo} alt="" />
                            </div>

                            <div className="input-group ">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Find your favorite dish..."

                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text" >

                                    <FiSearch />
                                </span>
                            </div>

                            <div className="notificationIconTop me-3">
                             <span className="ms-2">   <MdNotificationsActive /></span>
                                <span onClick={toggleCart} className="navBartoggleBtn ms-2">
                                 

                                    <div className={`cartSectionRight ${showCart ? 'show' : 'hide'}`}>
                                        <CartDemo />

                                    </div>
                                </span>
                            </div>
                        {/* </div> */}
                    </div>
                </header>

                {/* Cart Section */}


            </div>
        </>
    );
};

export default NavBarTop;

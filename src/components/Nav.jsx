import React, { useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

import { IoCloseOutline } from "react-icons/io5";
const Nav = () => {
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart); // Toggle cart visibility
    };

    return (
        <div>
            {/* Menu Section */}
            <div className="navBar">

                <div className="logoSec">
                    <a href="#"> <h3> Restaurant</h3></a>
                </div>
                <div className="searchBar">

                    <input type="text" className="mainSearch" />

                </div>
                <div className="notificationIconTop">

                </div>
                <div className="toggleNavIcon d-flex align-item-center">
                    <div className="m-0 p-0">
                   <span className="me-3">    <MdNotificationsActive /></span>
                    {/* </div>
                    <div className="m-0 p-0"> */}
                        <button onClick={toggleCart} className=" mb-0 p-0 navBartoggleBtn">
                            <RiMenu3Line />
                        </button>
                    </div>
                </div>
            </div>

            {/* Cart Section */}
            <div className={`cartSectionRight ${showCart ? 'show' : 'hide'}`}>
                <div className="row d-flex align-items-center">
                    <div className="col-8 d-flex align-items-center">
                        <h3 className="mb-0">SEAT NO :S21</h3>
                    </div>

                    {/* Button to close the cart */}

                    <div className="col-4 d-flex align-items-center">


                        <button onClick={toggleCart} className="navBartoggleBtn ">
                            <IoCloseOutline />
                        </button>

                    </div>
                </div>
                {/* Cart details go here */}
            </div>
        </div>
    );
};

export default Nav;

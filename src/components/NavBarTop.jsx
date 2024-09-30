import React, { useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import { GiHotMeal } from "react-icons/gi";
import Cart from './Cart'; // Import the Cart component

const NavBarTop = () => {
    const [showCart, setShowCart] = useState(false);

    // Function to toggle cart visibility
    const toggleCart = () => {
        setShowCart(!showCart);
    };

    return (
        <>
            <div className="navBarTopCartMain">
                <header className="headerSection">
                    <div className="navBar d-flex align-items-center justify-content-between">

                        <div className="logo">
                            <h6 className="me-4">Restaurant</h6>
                        </div>



                        {/* <div className="notificationIconTop me-3">
                            <span className="ms-2">   <MdNotificationsActive /></span>
                            <span onClick={toggleCart} className="navBartoggleBtn ms-2">


                                <div className={cartSectionRight ${showCart ? 'show' : 'hide'}}>
                                <GiHotMeal />

                            </span>
                        </div> */}


                        <div className="notificationIconTop me-3">
                            <span className="ms-2"> <MdNotificationsActive /></span>
                            {/* Click GiHotMeal to toggle cart */}
                            <span onClick={toggleCart} className="navBartoggleBtn ms-2">
                                <GiHotMeal />
                            </span>
                        </div>
                    </div >
                </header >

                {/* Cart Modal */}
                < Cart isOpen={showCart} onClose={toggleCart} />
            </div >
        </>
    );
};

export default NavBarTop;

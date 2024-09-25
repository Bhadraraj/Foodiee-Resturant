import React, { useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

import { FiSearch } from "react-icons/fi";

import briyani from '../images/briyani.png'
import { TiMinus } from "react-icons/ti";

import { MdOutlineCurrencyRupee } from "react-icons/md";
import { MdAdd } from "react-icons/md";

import { FaAngleDoubleRight } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

import { AiFillHome } from "react-icons/ai";
const NavBarTop = () => {
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => {
        setShowCart(!showCart); // Toggle cart visibility
    };

    return (
        <>
            <div className="container navBarTopCartMain">
                <header className="headerSection p-0">
                    <div className="container">
                        <div className="navBar d-flex align-items-center justify-content-between">

                            <div className="logo">
                                <h1>Logo</h1>
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
                                <MdNotificationsActive />
                                <span onClick={toggleCart} className="navBartoggleBtn ms-4">
                                    <RiMenu3Line />
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Cart Section */}

                <div className={`cartSectionRight ${showCart ? 'show' : 'hide'}`}>
                    <div className="cartTopSec">
                        <div className="row d-flex align-items-center">
                            <div className="col-8 d-flex align-items-center">
                                <h3 className="mb-0">SEAT NO : #S21</h3>
                            </div>

                            <div className="col-4 d-flex align-items-center justify-content-end">
                                <button onClick={toggleCart} className="navBartoggleBtn ">
                                    <FaAngleDoubleRight />
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="cartScrollContainer">
                        <div className="cartCardMainOuter mt-4">
                            <div className="row">
                                <div className="col-3">
                                    <img src={briyani} alt="Cart Item Img" className="img-fluid" />
                                </div>
                                <div className="col-6 me-0 pe-0">
                                    <p className="cardItemName mb-0" >
                                        Thanthoori Chicken
                                    </p>
                                    <p className="cardItemPrice mb-0">
                                        <MdOutlineCurrencyRupee /> 150
                                    </p>

                                </div>
                                <div className="col-3 d-flex justify-content-between align-items-center  ps-0">

                                    <span className="cartaddBtn">
                                        <MdAdd />
                                    </span>
                                    <span className="cartItemAmount mx-1">
                                        150
                                    </span>
                                    <span className="cartRemoveBtn">
                                        <TiMinus />
                                    </span>

                                </div>

                            </div>
                        </div>  <div className="cartCardMainOuter mt-4">
                            <div className="row">
                                <div className="col-3">
                                    <img src={briyani} alt="Cart Item Img" className="img-fluid" />
                                </div>
                                <div className="col-6 me-0 pe-0">
                                    <p className="cardItemName mb-0" >
                                        Thanthoori Chicken
                                    </p>
                                    <p className="cardItemPrice mb-0">
                                        <MdOutlineCurrencyRupee /> 150
                                    </p>

                                </div>
                                <div className="col-3 d-flex justify-content-between align-items-center  ps-0">

                                    <span className="cartaddBtn">
                                        <MdAdd />
                                    </span>
                                    <span className="cartItemAmount mx-1">
                                        150
                                    </span>
                                    <span className="cartRemoveBtn">
                                        <TiMinus />
                                    </span>

                                </div>

                            </div>
                        </div>
                        <div className="cartCardMainOuter mt-4">
                            <div className="row">
                                <div className="col-3">
                                    <img src={briyani} alt="Cart Item Img" className="img-fluid" />
                                </div>
                                <div className="col-6 me-0 pe-0">
                                    <p className="cardItemName mb-0" >
                                        Thanthoori Chicken
                                    </p>
                                    <p className="cardItemPrice mb-0">
                                        <MdOutlineCurrencyRupee /> 150
                                    </p>

                                </div>
                                <div className="col-3 d-flex justify-content-between align-items-center  ps-0">

                                    <span className="cartaddBtn">
                                        <MdAdd />
                                    </span>
                                    <span className="cartItemAmount mx-1">
                                        150
                                    </span>
                                    <span className="cartRemoveBtn">
                                        <TiMinus />
                                    </span>

                                </div>

                            </div>
                        </div><div className="cartCardMainOuter mt-4">
                            <div className="row">
                                <div className="col-3">
                                    <img src={briyani} alt="Cart Item Img" className="img-fluid" />
                                </div>
                                <div className="col-6 me-0 pe-0">
                                    <p className="cardItemName mb-0" >
                                        Thanthoori Chicken
                                    </p>
                                    <p className="cardItemPrice mb-0">
                                        <MdOutlineCurrencyRupee /> 150
                                    </p>

                                </div>
                                <div className="col-3 d-flex justify-content-between align-items-center  ps-0">

                                    <span className="cartaddBtn">
                                        <MdAdd />
                                    </span>
                                    <span className="cartItemAmount mx-1">
                                        150
                                    </span>
                                    <span className="cartRemoveBtn">
                                        <TiMinus />
                                    </span>

                                </div>

                            </div>
                        </div>
                        <div className="cartCardMainOuter mt-4 ">
                            <div className="row">
                                <div className="col-3">
                                    <img src={briyani} alt="Cart Item Img" className="img-fluid" />
                                </div>
                                <div className="col-6 me-0 pe-0">
                                    <p className="cardItemName mb-0" >
                                        Thanthoori Chicken
                                    </p>
                                    <p className="cardItemPrice mb-0">
                                        <MdOutlineCurrencyRupee /> 150
                                    </p>

                                </div>
                                <div className="col-3 d-flex justify-content-between align-items-center  ps-0">

                                    <span className="cartaddBtn">
                                        <MdAdd />
                                    </span>
                                    <span className="cartItemAmount mx-1">
                                        150
                                    </span>
                                    <span className="cartRemoveBtn">
                                        <TiMinus />
                                    </span>

                                </div>

                            </div>
                        </div>


                        <div className="cartCardMainOuter mt-4">
                            <div className="row">
                                <div className="col-3">
                                    <img src={briyani} alt="Cart Item Img" className="img-fluid" />
                                </div>
                                <div className="col-6 me-0 pe-0">
                                    <p className="cardItemName mb-0" >
                                        Thanthoori Chicken
                                    </p>
                                    <p className="cardItemPrice mb-0">
                                        <MdOutlineCurrencyRupee /> 150
                                    </p>

                                </div>
                                <div className="col-3 d-flex justify-content-between align-items-center  ps-0">

                                    <span className="cartaddBtn">
                                        <MdAdd />
                                    </span>
                                    <span className="cartItemAmount mx-1">
                                        150
                                    </span>
                                    <span className="cartRemoveBtn">
                                        <TiMinus />
                                    </span>

                                </div>

                            </div>

                        </div>
                        <div className="cartCardMainOuter mt-4">
                            <div className="row">
                                <div className="col-3">
                                    <img src={briyani} alt="Cart Item Img" className="img-fluid" />
                                </div>
                                <div className="col-6 me-0 pe-0">
                                    <p className="cardItemName mb-0" >
                                        Thanthoori Chicken
                                    </p>
                                    <p className="cardItemPrice mb-0">
                                        <MdOutlineCurrencyRupee /> 150
                                    </p>

                                </div>
                                <div className="col-3 d-flex justify-content-between align-items-center  ps-0">

                                    <span className="cartaddBtn">
                                        <MdAdd />
                                    </span>
                                    <span className="cartItemAmount mx-1">
                                        150
                                    </span>
                                    <span className="cartRemoveBtn">
                                        <TiMinus />
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="cartAmountSection">
                        <div className="row">
                            <div className="col-6">
                                <span className="subTotalText">Sub Total
                                </span>
                            </div>
                            <div className="col-6  text-end">
                                <span className="cartSubTotalAmount">Rs. 180.00</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <span className="subTotalText">GST 10%
                                </span>
                            </div>
                            <div className="col-6  text-end">
                                <span className="cartSubTotalAmount">Rs. 10.00</span>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12"><button className="placeOrderBtn">Place Order</button></div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default NavBarTop;

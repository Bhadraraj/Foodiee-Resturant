import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { MdOutlineCurrencyRupee, MdAdd, MdNotificationsActive } from 'react-icons/md';
import { TiMinus } from 'react-icons/ti';
import briyani from '../images/briyani.png';
import { RiMenu3Line } from "react-icons/ri";
const CartDemo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button onClick={showModal}>
            <RiMenu3Line />



         
            </Button>
            <Modal
                title='SEAT NO : #S21'
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null} // Remove the default footer buttons
                width={500} // Adjust width if needed
            >
               

                <div className="cartScrollContainer">
                    {[...Array(6)].map((_, index) => (
                        <div className="cartCardMainOuter mt-4" key={index}>
                            <div className="row">
                                <div className="col-3">
                                    <img src={briyani} alt="Cart Item Img" className="img-fluid" />
                                </div>
                                <div className="col-6 me-0 pe-0">
                                    <p className="cardItemName mb-0">Thanthoori Chicken</p>
                                    <p className="cardItemPrice mb-0">
                                        <MdOutlineCurrencyRupee /> 150
                                    </p>
                                </div>
                                <div className="col-3 d-flex justify-content-between align-items-center ps-0">
                                    <span className="cartaddBtn">
                                        <MdAdd />
                                    </span>
                                    <span className="cartItemAmount mx-1">150</span>
                                    <span className="cartRemoveBtn">
                                        <TiMinus />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cartAmountSection">
                    <div className="row">
                        <div className="col-6">
                            <span className="subTotalText">Sub Total</span>
                        </div>
                        <div className="col-6 text-end">
                            <span className="cartSubTotalAmount">Rs. 180.00</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <span className="subTotalText">GST 10%</span>
                        </div>
                        <div className="col-6 text-end">
                            <span className="cartSubTotalAmount">Rs. 10.00</span>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <button className="placeOrderBtn">Place Order</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default CartDemo;

import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { MdOutlineCurrencyRupee, MdAdd } from 'react-icons/md';
import { TiMinus } from 'react-icons/ti';
import { RiMenu3Line } from "react-icons/ri";

const Cart = ({ cartItems }) => {
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

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

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
        footer={null}
        width={500}
      >
        <div className="cartScrollContainer">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div className="cartCardMainOuter mt-4" key={index}>
                <div className="row">
                  <div className="col-3">
                    <img src={item.image} alt={item.name} className="img-fluid" />
                  </div>
                  <div className="col-6 me-0 pe-0">
                    <p className="cardItemName mb-0">{item.name}</p>
                    <p className="cardItemPrice mb-0">
                      <MdOutlineCurrencyRupee /> {item.price}
                    </p>
                  </div>
                  <div className="col-3 d-flex justify-content-between align-items-center ps-0">
                    <span className="cartaddBtn">
                      <MdAdd />
                    </span>
                    <span className="cartItemAmount mx-1">{item.price}</span>
                    <span className="cartRemoveBtn">
                      <TiMinus />
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No items in the cart</p>
          )}
        </div>

        <div className="cartAmountSection">
          <div className="row">
            <div className="col-6">
              <span className="subTotalText">Sub Total</span>
            </div>
            <div className="col-6 text-end">
              <span className="cartSubTotalAmount">Rs. {totalAmount}.00</span>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <span className="subTotalText">GST 10%</span>
            </div>
            <div className="col-6 text-end">
              <span className="cartSubTotalAmount">Rs. {(totalAmount * 0.1).toFixed(2)}</span>
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

export default Cart;

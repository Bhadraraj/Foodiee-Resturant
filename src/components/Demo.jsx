
import React, { useState, useEffect } from 'react';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { GrFormAdd } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { Modal, Button, Form, Input, Select } from 'antd';


const Dessert = () => {


  const desserts = [
    {
      id: 1,
      name: 'Gulab Jamun',
      image: 'https://aartimadan.com/wp-content/uploads/2020/11/milk-powder-gulab-jamuns.jpg',  // Free image link for Gulab Jamun
      price: 90,
      description: 'Sweet and soft milk-based dumplings soaked in sugar syrup.',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Rasmalai',
      image: 'https://www.kashmironlinestore.com/cdn/shop/articles/Untitled_design_54.jpg?v=1692702218',  // Free image link for Rasmalai
      price: 100,
      description: 'Delicate, spongy cheese balls soaked in a sweet, flavored milk syrup.',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Kheer',
      image: 'https://www.munatycooking.com/wp-content/uploads/2020/04/Kheer-feature-image-500x500.jpg',  // Free image link for Kheer
      price: 70,
      description: 'A creamy rice pudding cooked with milk, sugar, and flavored with cardamom and saffron.',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Jalebi',
      image: 'https://www.cookwithnabeela.com/wp-content/uploads/2024/02/1Jalebi.webp',  // Free image link for Jalebi
      price: 80,
      description: 'Crispy, bright orange spirals soaked in sugar syrup, a perfect sweet indulgence.',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Kulfi',
      image: 'https://www.blendwithspices.com/wp-content/uploads/2021/06/khoya-kulfi-recipe-500x500.jpg',  // Free image link for Kulfi
      price: 50,
      description: 'Traditional Indian ice cream, rich and dense, flavored with cardamom and pistachios.',
      rating: 4.9
    },
    {
      id: 6,
      name: 'Chocolate Brownie',
      image: 'https://recipesblob.oetker.in/assets/0e7149831748458c9502e361e889f726/964x526/brownie-with-vanilla-ice-cream.jpg',  // Free image link for Chocolate Brownie
      price: 120,
      description: 'A rich, fudgy chocolate dessert topped with a scoop of vanilla ice cream.',
      rating: 4.8
    },
    {
      id: 7,
      name: 'Carrot Halwa',
      image: 'https://indianvegrecipe.com/wp-content/uploads/2020/01/carrot-halwa-recipe.jpg',  // Free image link for Carrot Halwa
      price: 90,
      description: 'Grated carrots cooked in ghee, milk, and sugar, topped with nuts and raisins.',
      rating: 4.7
    },
    {
      id: 8,
      name: 'Mango Mousse',
      image: 'https://thebigmansworld.com/wp-content/uploads/2023/07/mango-mousse-recipe.jpg',  // Free image link for Mango Mousse
      price: 110,
      description: 'A light and creamy dessert made with ripe mangoes and whipped cream.',
      rating: 4.8
    },
    {
      id: 9,

      name: 'Chum Chum',
      image: 'https://vaya.in/recipes/wp-content/uploads/2018/03/Chum-chum.jpg',  // Free image link for Chum Chum
      price: 80,
      description: 'Soft and spongy milk-based sweet, soaked in sugar syrup and garnished with coconut.',
      rating: 4.7
    },

    {
      id: 10,
      name: 'Soan Papdi',
      image: 'https://www.indianrecipeinfo.com/wp-content/uploads/2010/12/Soan-Papdi.jpg',  // Free image link for Soan Papdi
      price: 100,
      description: 'A flaky, sweet Indian dessert made from gram flour and sugar, with a unique texture.',
      rating: 4.6
    },
    {
      id: 11,
      name: 'Sooji Halwa',
      image: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/10/Suji-Halwa-Thumbnail.jpg',  // Free image link for Sooji Halwa
      price: 70,
      description: 'A sweet dish made from semolina, cooked with ghee, sugar, and flavored with cardamom and nuts.',
      rating: 4.5
    }
  ];




  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDishes, setFilteredDishes] = useState(desserts);
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(5); // Fixed 5% tax
  const [finalAmount, setFinalAmount] = useState(0);
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    mobile: '',
    seatNumber: '',
  });
  const [form] = Form.useForm();
  const toggleReadMore = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Calculate total amount and final amount with tax and discount
  const calculateTotalAmount = () => {
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxAmount = (subtotal * tax) / 100;
    const final = subtotal + taxAmount - discount;
    setTotalAmount(subtotal);
    setFinalAmount(final);
  };

  // Add item to cart
  const addItemToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    calculateTotalAmount();
  };

  // Remove item from cart
  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    calculateTotalAmount();
  };

  // Handle search
  const handleSearch = () => {
    const filtered = desserts.filter((dish) =>
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDishes(filtered.length > 0 ? filtered : []);
    setCurrentPage(1);
  };

  // Pagination controls
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredDishes.length / itemsPerPage);
  const indexOfLastDish = currentPage * itemsPerPage;
  const indexOfFirstDish = indexOfLastDish - itemsPerPage;
  const currentDishes = filteredDishes.slice(indexOfFirstDish, indexOfLastDish);

  // Open payment modal
  const handleProceedToPayment = () => {
    setIsPaymentModalVisible(true);
  };

  // Handle form submission for customer details
  const handlePayment = () => {
    form.validateFields().then((values) => {
      setCustomerDetails({
        name: values.name,
        mobile: values.mobile,
        seatNumber: values.seatNumber,
      });
      setIsPaymentModalVisible(false);
      // Proceed to payment gateway or further actions
    });
  };

  return (
    <div>
      <section className="menuSection">
        <div className="row g-4">
          <h2 className='mb-0'>SWEET ESCAPE</h2>
          <p className='secBtmCnt m-0 mb-2'>Delight in every decadent bite.</p>

          {/* Search bar */}
          <div className="search-bar mb-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Find your favorite dish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" onClick={handleSearch}>
                <FiSearch />
              </span>
            </div>
          </div>

          {/* Display filtered dishes */}
          {currentDishes.length > 0 ? (
            currentDishes.map((dish) => (
              <div key={dish.id} className="col-xl-3 col-lg-4 col-sm-6 d-flex justify-content-center align-items-center">
                <div className="menuCardOuter">
                  <div className="menuCard">
                    <div className="foodCatgoryImg">
                      <div className="row">
                        <div className="col-12">
                          <img src={dish.image} alt={dish.name} className="img-fluid" />
                        </div>
                      </div>
                    </div>

                    <div className="row py-2">
                      <div className="col-8 d-flex justify-content-start align-items-center">
                        <p className="menuItemName mb-0 ">{dish.name}</p>
                      </div>
                      <div className="col-4 ps-0 d-flex justify-content-end align-items-center">
                        <p className="menuItemPrice mb-0"><MdOutlineCurrencyRupee />{dish.price}.00</p>
                      </div>
                    </div>

                    <p className="menuItemContent">
                      {expanded[dish.id] ? dish.description : `${dish.description.slice(0, 30)}...`}
                      <span
                        className="readMoreLess"
                        onClick={() => toggleReadMore(dish.id)}
                      >
                        {expanded[dish.id] ? 'Read less' : 'Read more'}
                      </span>
                    </p>

                    <div className="row d-flex mb-1 justify-content-start align-items-center">
                      <div className="col-6">
                        <p className="d-flex mb-0 justify-content-start align-items-center rating-container">
                          <span className="menuItemRatings"><FaStar /></span>
                          <span className="rating-value">{dish.rating}</span>
                        </p>
                      </div>
                      <div className="col-6 d-flex justify-content-end align-items-center">
                        <button className="addMenuItems d-flex justify-content-end align-items-center" onClick={() => addItemToCart(dish)}>
                          <GrFormAdd /> ADD
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No DISHES FOUND</p>
          )}

          {/* Cart */}
          <div className="cart-section mt-4">
            <h3>Cart</h3>
            {cartItems.length > 0 ? (
              <div>
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id}>
                      {item.name} x {item.quantity} = <MdOutlineCurrencyRupee /> {item.price * item.quantity}
                      <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                    </li>
                  ))}
                </ul>
                <p>Total: <MdOutlineCurrencyRupee />{totalAmount}</p>
                <p>Tax (5%): <MdOutlineCurrencyRupee />{(totalAmount * tax) / 100}</p>
                <p>Final Amount: <MdOutlineCurrencyRupee />{finalAmount}</p>
                <button className="btn btn-primary" onClick={handleProceedToPayment}>
                  Proceed to Payment
                </button>
              </div>
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>

          {/* Pagination */}
          <div className="pagination justify-content-end mt-3">
            <button
              className="btn btn-outline-secondary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`btn ${currentPage === i + 1 ? 'btn-primary' : 'btn-outline-secondary'} mx-1`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="btn btn-outline-secondary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>

          {/* Payment Modal */}
          <Modal
            title="Payment"
            visible={isPaymentModalVisible}
            onCancel={() => setIsPaymentModalVisible(false)}
            footer={[
              <Button key="back" onClick={() => setIsPaymentModalVisible(false)}>
                Cancel
              </Button>,
              <Button key="submit" type="primary" onClick={handlePayment}>
                Pay Now
              </Button>,
            ]}
          >
            <Form form={form} layout="vertical" initialValues={customerDetails}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="mobile"
                label="Mobile"
                rules={[{ required: true, message: 'Please enter your mobile number' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="seatNumber"
                label="Seat Number"
                rules={[{ required: true, message: 'Please enter your seat number' }]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </section>
    </div>
  );
};

export default Dessert;

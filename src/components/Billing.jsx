import React, { useState, useEffect } from 'react';
import { Table, Button, message, Modal, Form, Input, Select } from 'antd';
import CartComponent from './CartComponent'; // Import the cart component
import '../styles/menus.css';

const { Option } = Select;

const BillingComponent = () => {
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

    const [menuItems, setMenuItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [tax, setTax] = useState(5);
    const [finalAmount, setFinalAmount] = useState(0);
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
    const [customerDetails, setCustomerDetails] = useState({
        name: '',
        mobile: '',
        seatNumber: '',
    });

    const [form] = Form.useForm();

    // Load dummy data
    useEffect(() => {
        setMenuItems(desserts);
    }, []);

    const addItemToCart = (item) => {
        const existingItem = cartItems.find((cartItem) => cartItem._id === item._id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
        calculateTotalAmount();
    };

    const removeItemFromCart = (itemId) => {
        setCartItems(cartItems.filter((item) => item._id !== itemId));
        calculateTotalAmount();
    };

    const updateQuantity = (itemId, quantity) => {
        const updatedCart = cartItems.map((item) => {
            if (item._id === itemId) {
                item.quantity = quantity;
            }
            return item;
        });
        setCartItems(updatedCart);
        calculateTotalAmount();
    };

    const calculateTotalAmount = () => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalAmount(total);
        const calculatedFinalAmount = total - (discount / 100) * total + (tax / 100) * total;
        setFinalAmount(calculatedFinalAmount);
    };

    const showPaymentModal = () => {
        if (cartItems.length === 0) {
            message.error('Cart is empty');
            return;
        }
        setIsPaymentModalVisible(true);
    };

    const handlePayment = () => {
        form.validateFields().then((values) => {
            setCustomerDetails(values);
            setIsPaymentModalVisible(false);
            message.success('Proceeding to payment');
            // Proceed to the payment logic here
            console.log('Customer Details:', values);
            console.log('Final Amount:', finalAmount);
        }).catch((error) => {
            console.log('Validation Failed:', error);
        });
    };

    const menuColumns = [
        { title: 'Item Name', dataIndex: 'name', key: 'name' },
        { title: 'Price', dataIndex: 'price', key: 'price' },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Button type="primary" onClick={() => addItemToCart(record)}>
                    Add to Cart
                </Button>
            ),
        },
    ];

    return (
        <div className="billing-container">
            <h2>Billing System</h2>

            <div className="menu-section">
                <h3>Menu</h3>
                <Table dataSource={menuItems} columns={menuColumns} rowKey="_id" />
            </div>

            <Button type="default" onClick={() => setIsCartVisible(!isCartVisible)}>
                {isCartVisible ? 'Hide Cart' : 'Show Cart'}
            </Button>

            {isCartVisible && (
                <CartComponent
                    cartItems={cartItems}
                    updateQuantity={updateQuantity}
                    removeItemFromCart={removeItemFromCart}
                    totalAmount={totalAmount}
                    discount={discount}
                    tax={tax}
                    finalAmount={finalAmount}
                    setDiscount={setDiscount}
                    setTax={setTax}
                    calculateTotalAmount={calculateTotalAmount}
                    showPaymentModal={showPaymentModal}
                />
            )}

            {/* Payment Modal */}
            <Modal
                title="Customer Details"
                visible={isPaymentModalVisible}
                onOk={handlePayment}
                onCancel={() => setIsPaymentModalVisible(false)}
                okText="Proceed to Payment"
                cancelText="Cancel"
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="name"
                        label="Customer Name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                        <Input placeholder="Enter your name" />
                    </Form.Item>

                    <Form.Item
                        name="mobile"
                        label="Mobile Number"
                        rules={[
                            { required: true, message: 'Please enter your mobile number' },
                            { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit mobile number' },
                        ]}
                    >
                        <Input placeholder="Enter your mobile number" />
                    </Form.Item>

                    <Form.Item
                        name="seatNumber"
                        label="Seat Number"
                        rules={[{ required: true, message: 'Please select your seat number' }]}
                    >
                        <Select placeholder="Select your seat">
                            <Option value="A1">A1</Option>
                            <Option value="A2">A2</Option>
                            <Option value="B1">B1</Option>
                            <Option value="B2">B2</Option>
                            {/* Add more seat options as needed */}
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default BillingComponent;

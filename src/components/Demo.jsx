import React, { useState } from 'react';
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { GrFormAdd } from "react-icons/gr";

const Dessert = ({ onAddToCart }) => {
  const desserts = [
    {
      id: 1,
      name: 'Gulab Jamun',
      image: 'https://aartimadan.com/wp-content/uploads/2020/11/milk-powder-gulab-jamuns.jpg',
      price: 90,
      description: 'Sweet and soft milk-based dumplings soaked in sugar syrup.',
      rating: 4.9
    },
    // ... other dessert items
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDishes, setFilteredDishes] = useState(desserts);
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <section className="menuSection">
        <div className="row g-4">
          {filteredDishes.map((dish) => (
            <div key={dish.id} className="col-xl-3 col-lg-4 col-sm-6 d-flex justify-content-center align-items-center">
              <div className="menuCardOuter">
                <div className="menuCard">
                  <div className="foodCatgoryImg">
                    <img src={dish.image} alt={dish.name} className="img-fluid" />
                  </div>
                  <div className="row py-2">
                    <div className="col-8 d-flex justify-content-start align-items-center">
                      <p className="menuItemName mb-0">{dish.name}</p>
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
                      <button
                        className="addMenuItems d-flex justify-content-end align-items-center"
                        onClick={() => onAddToCart(dish)} // Add item to cart
                      >
                        <GrFormAdd /> ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredDishes.length === 0 && <p>No DISHES FOUND</p>}
        </div>
      </section>
    </div>
  );
};

export default Dessert;

import React from 'react'

import { MdOutlineCurrencyRupee } from "react-icons/md";

import { FaStar } from "react-icons/fa";

import { GrFormAdd } from "react-icons/gr";

// import Logout from './Logout'

import briyani from '../../images/briyani.png'

const Dessert     = () => {


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
        }
      ];
      

      


  return (
    <div>
      <section className="menuSection">

        {/* <div className="container"> */}

        <div className="row g-4">
          <h2 className='mb-0'>SWEET ESCAPE</h2>
          <p className='secBtmCnt m-0 mb-2'>Delight in every decadent bite.</p>
          {desserts.map((foodItem) => (
            <div key={foodItem.id} className="col-xxl-3 col-xl-4  col-md-6 d-flex justify-content-center align-items-center">
              <div className="menuCardOuter">
                <div className="menuCard">
                  <div className="foodCatgoryImg">
                    <div className="row">
                      <div className="col-12">
                        <img src={foodItem.image} alt={foodItem.name} className="img-fluid" /> {/* No need for w-100 since width is already 100% in CSS */}
                      </div>
                    </div>
                  </div>


                  <div className="row py-2">
                    <div className="col-8 d-flex justify-content-start align-items-center">
                      <p className="menuItemName mb-0 ">{foodItem.name}</p>
                    </div>
                    <div className="col-4 ps-0 d-flex justify-content-end align-items-center">
                      <p className="menuItemPrice mb-0"><MdOutlineCurrencyRupee />{foodItem.price} .00</p>
                    </div>
                  </div>
                  <p className="menuItemContent">{foodItem.description}</p>
                  <div className="row d-flex mb-1 justify-content-start align-items-center">
                    <div className="col-6">
                      <p className="d-flex mb-0 justify-content-start align-items-center rating-container">
                        <span className="menuItemRatings"><FaStar /></span>
                        <span className="rating-value">{foodItem.rating}</span>
                      </p>
                    </div>

                    <div className="col-6 d-flex justify-content-end align-items-center">
                      <button className="addMenuItems d-flex justify-content-end align-items-center">
                        <GrFormAdd /> ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ))}
          {/* </div> */}
        </div>
      </section>



      {/* <Logout/> */}

    </div>
  )
}

export default Dessert
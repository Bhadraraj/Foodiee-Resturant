import React from 'react'

import { MdOutlineCurrencyRupee } from "react-icons/md";

import { FaStar } from "react-icons/fa";

import { GrFormAdd } from "react-icons/gr";

// import Logout from './Logout'

import briyani from '../../images/briyani.png'

const HotDishes = () => {


  const foodItems = [
    {
      id: 1,
      name: 'Chicken Biryani',
      image: 'https://recipes.timesofindia.com/thumb/msid-54308405,width-1600,height-900/54308405.jpg',  // Free image link for Biryani
      price: 200,
      description: 'A delicious blend of fragrant basmati rice and tender chicken with rich spices.',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Paneer Tikka',
      image: 'https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg',  // Free image link for Paneer Tikka
      price: 150,
      description: 'Grilled paneer cubes marinated in yogurt and spices, perfect for a starter.',
      rating: 4.5
    },
    {
      id: 3,
      name: 'Mutton Rogan Josh',
      image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Rogan-Josh.jpg',  // Free image link for Rogan Josh
      price: 250,
      description: 'A flavorful mutton curry with Kashmiri red chilies and aromatic spices.',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Butter Naan',
      image: 'https://www.pachakam.com/wp-content/uploads/2009/05/new-butter-naan.jpg',  // Free image link for Butter Naan
      price: 50,
      description: 'Soft and fluffy naan brushed with butter, a perfect companion for curries.',
      rating: 4.6
    },

    {
      id: 5,
      name: 'Tandoori Chicken',
      image: 'https://www.easycookingwithmolly.com/wp-content/uploads/2023/11/air-fryer-whole-tandoori-chicken-3.jpg  ',  // Free image link for Tandoori Chicken
      price: 220,
      description: 'Juicy and smoky chicken marinated in yogurt and spices, cooked in a tandoor.',
      rating: 4.8
    },
    {
      id: 7,
      name: 'Chicken Tikka Masala',
      image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Tikka-Masala-min-750x750.jpg',  // Free image link for Chicken Tikka Masala
      price: 180,
      description: 'Tender chicken pieces cooked in a rich, creamy tomato gravy with Indian spices.',
      rating: 4.7
    },
    {
      id: 8,
      name: 'Lamb Korma',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNSDBYeU5bNvBF1NdSDTMrKxL9k_Fox1bA0A&shttps://www.recipetineats.com/tachyon/2024/05/Lamb-korma_main.jpg',  // Free image link for Lamb Korma
      price: 250,
      description: 'A slow-cooked lamb dish in a creamy, mild curry sauce with aromatic spices.',
      rating: 4.8
    },
    {
      id: 9,
      name: 'Prawn Curry',
      image: 'https://nishkitchen.com/wp-content/uploads/2021/07/Indian-Prawn-Curry-1B.jpg',  // Free image link for Prawn Curry
      price: 230,
      description: 'Juicy prawns cooked in a coconut-based curry with spicy and tangy flavors.',
      rating: 4.6
    },
    {
      id: 10,
      name: 'Chicken Shawarma',
      image: 'https://ministryofcurry.com/wp-content/uploads/2021/05/chicken-shawarma-6.jpg',  // Free image link for Chicken Shawarma
      price: 150,
      description: 'Grilled marinated chicken served with pickles and garlic sauce in pita bread.',
      rating: 4.4
    },


  ];



  return (
    <div>
      <section className="menuSection">

        {/* <div className="container"> */}

        <div className="row g-4">
          <h2 className='mb-0'>SAVORY SENSATIONS</h2>
          <p className='secBtmCnt m-0 mb-2'>Ignite your senses with every bite.</p>
        {/* <small className='m-0'>Our hot dishes are crafted to perfection, combining rich flavors and fragrant spices that bring warmth and comfort to your plate. From sizzling biryanis to aromatic curries, each dish offers a culinary journey like no other.</small> */}
          {foodItems.map((foodItem) => (
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

export default HotDishes
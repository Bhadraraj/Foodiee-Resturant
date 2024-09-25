import React from 'react'

import { MdOutlineCurrencyRupee } from "react-icons/md";

import { FaStar } from "react-icons/fa";

import { GrFormAdd } from "react-icons/gr";

// import Logout from './Logout'

// import briyani from '../../images/briyani.png'

const ColdDishes     = () => {


  
    const coldDishes = [
        {
          id: 1,
          name: 'Greek Salad',
          image: 'https://www.tamingtwins.com/wp-content/uploads/2024/07/greek-salad-9.jpg',  // Free image link for Greek Salad
          price: 120,
          description: 'A refreshing salad made with cucumbers, tomatoes, onions, olives, and feta cheese.',
          rating: 4.7
        },
        {
          id: 2,
          name: 'Caprese Salad',
          image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg',  // Free image link for Caprese Salad
          price: 130,
          description: 'A simple Italian salad with fresh mozzarella, tomatoes, and basil drizzled with olive oil.',
          rating: 4.6
        },
        {
          id: 3,
          name: 'Cold Soba Noodles',
          image: 'https://cookingformysoul.com/wp-content/uploads/2022/08/feat2-soba-salad.jpg',  // Free image link for Cold Soba Noodles
          price: 150,
          description: 'Chilled buckwheat noodles served with a savory dipping sauce and fresh vegetables.',
          rating: 4.5
        },
        {
          id: 4,
          name: 'Gazpacho',
          image: 'https://www.funfoodfrolic.com/wp-content/uploads/2023/03/Gazpacho-Blog.jpg',  // Free image link for Gazpacho
          price: 110,
          description: 'A cold Spanish soup made with tomatoes, cucumbers, and peppers, perfect for summer.',
          rating: 4.6
        },
        {
          id: 5,
          name: 'Ceviche',
          image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/04/How-To-Make-Ceviche-4-600x399.jpg',  // Free image link for Ceviche
          price: 180,
          description: 'Fresh seafood marinated in lime juice with onions, cilantro, and chili peppers.',
          rating: 4.8
        },
        {
          id: 6,
          name: 'Pasta Salad',
          image: 'https://iwashyoudry.com/wp-content/uploads/2016/02/Pasta-Salad-Web-7.jpg',  // Free image link for Pasta Salad
          price: 140,
          description: 'A hearty salad made with pasta, fresh vegetables, and a tangy vinaigrette.',
          rating: 4.5
        },
        {
          id: 7,
          name: 'Avocado Toast',
          image: 'https://californiaavocado.com/wp-content/uploads/2020/07/California-Avocado-Toast-Three-Ways-768x532.jpeg',  // Free image link for Avocado Toast
          price: 100,
          description: 'Toasted bread topped with mashed avocado, olive oil, and seasonings.',
          rating: 4.7
        },
        {
          id: 8,
          name: 'Cold Cucumber Soup',
          image: 'https://www.foodandwine.com/thmb/GWpIhm_82oEDMGenF6rDyN62Qa4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-cold-cucumber-soup-yogurt-and-dill-hero-02-19e5f8e4943f478f813c26a977e40a14.jpg',  // Free image link for Cold Cucumber Soup
          price: 90,
          description: 'A cool and creamy cucumber soup with yogurt, dill, and garlic.',
          rating: 4.3
        },
       
      ];
      
 
      

  return (
    <div>
      <section className="menuSection">

        {/* <div className="container"> */}

        <div className="row g-4">
          <h2 className='mb-0'>CHILLED INDULGENCE</h2>
          <p className='secBtmCnt m-0 mb-2'>Cool, crisp, and refreshing.</p>
          {coldDishes.map((coldDishes) => (
            <div key={coldDishes.id} className="col-xxl-3 col-xl-4  col-md-6 d-flex justify-content-center align-items-center">
              <div className="menuCardOuter">
                <div className="menuCard">
                  <div className="foodCatgoryImg">
                    <div className="row">
                      <div className="col-12">
                        <img src={coldDishes.image} alt={coldDishes.name} className="img-fluid" /> {/* No need for w-100 since width is already 100% in CSS */}
                      </div>
                    </div>
                  </div>


                  <div className="row py-2">
                    <div className="col-8 d-flex justify-content-start align-items-center">
                      <p className="menuItemName mb-0 ">{coldDishes.name}</p>
                    </div>
                    <div className="col-4 ps-0 d-flex justify-content-end align-items-center">
                      <p className="menuItemPrice mb-0"><MdOutlineCurrencyRupee />{coldDishes.price} .00</p>
                    </div>
                  </div>
                  <p className="menuItemContent">{coldDishes.description}</p>
                  <div className="row d-flex mb-1 justify-content-start align-items-center">
                    <div className="col-6">
                      <p className="d-flex mb-0 justify-content-start align-items-center rating-container">
                        <span className="menuItemRatings"><FaStar /></span>
                        <span className="rating-value">{coldDishes.rating}</span>
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

export default ColdDishes
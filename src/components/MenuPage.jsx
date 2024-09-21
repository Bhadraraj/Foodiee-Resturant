import React from 'react'

import { MdOutlineCurrencyRupee } from "react-icons/md";

import { FaStar } from "react-icons/fa";

import { GrFormAdd } from "react-icons/gr";

// import Logout from './Logout'

import briyani from '../images/briyani.png'

const MenuPage = () => {


  const products = [
    {
      id: 1,
      name: 'Thanthoori Briyani',
      image: briyani,
      price: 180,
      description: 'Experience the perfect blend of spices, crafted to satisfy your cravings',
      rating: 5.0
    },
    {
      id: 2,
      name: 'Thanthoori Briyani',
      image: briyani,
      price: 180,
      description: 'Experience the perfect blend of spices, crafted to satisfy your cravings',
      rating: 5.0
    },
    {
      id: 3,
      name: 'Thanthoori Briyani',
      image: briyani,
      price: 180,
      description: 'Experience the perfect blend of spices, crafted to satisfy your cravings',
      rating: 5.0
    },
    {
      id: 4,
      name: 'Thanthoori Briyani',
      image: briyani,
      price: 180,
      description: 'Experience the perfect blend of spices, crafted to satisfy your cravings',
      rating: 5.0
    },
    {
      id: 5,
      name: 'Thanthoori Briyani',
      image: briyani,
      price: 180,
      description: 'Experience the perfect blend of spices, crafted to satisfy your cravings',
      rating: 5.0
    },
    {
      id: 6,
      name: 'Thanthoori Briyani',
      image: briyani,
      price: 180,
      description: 'Experience the perfect blend of spices, crafted to satisfy your cravings',
      rating: 5.0
    },

  ];

  return (
    <div>
      <section className="menuSection">

        <div className="container">

          <div className="row g-4">
            <h2 className='mb-0'>BITES OF BLISS</h2>
            <p className='secBtmCnt m-0 mb-2'>Taste the excellence in every dish.</p>
            {products.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
                <div className="menuCardOuter">
                  <div className="menuCard">
                    <div className="foodCatgoryImg">
                      <div className="row">
                        <div className="col-12">
                          <img src={product.image} alt={product.name} className='img-fluid w-100' /> {/* Add w-100 class */}
                        </div>
                      </div>
                    </div>

                    <div className="row py-2">
                      <div className="col-8 d-flex justify-content-start align-items-center">
                        <p className="menuItemName mb-0">{product.name}</p>
                      </div>
                      <div className="col-4 d-flex justify-content-end align-items-center">
                        <p className="menuItemPrice mb-0"><MdOutlineCurrencyRupee />{product.price} .00</p>
                      </div>
                    </div>
                    <p className="menuItemContent">{product.description}</p>
                    <div className="row d-flex mb-1 justify-content-start align-items-center">
                      <div className="col-6">
                        <p className="menuItemRatings d-flex mb-0 justify-content-start align-items-center"><FaStar />{product.rating}</p>
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
          </div>
        </div>
      </section>



      {/* <Logout/> */}

    </div>
  )
}

export default MenuPage
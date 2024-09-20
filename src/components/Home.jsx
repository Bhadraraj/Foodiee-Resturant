import React from 'react'

import { MdOutlineCurrencyRupee } from "react-icons/md";

import { FaStar } from "react-icons/fa";

import { GrFormAdd } from "react-icons/gr";

// import Logout from './Logout'
import LogoutBtn from './LogoutBtn';
import briyani from '../images/briyani.png'

const Home = () => {
  return (
    <div>
      <h1>Home Page </h1>




      <section className="menuSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
              <div className="menuCardOuter">
                <div className="foodCatgoryImg">
                  <div className="row">

                    <div className="col-12"></div>
                    <img src={briyani} alt="" className='img-fluid' />

                  </div>
                </div>
                <div className="row ">
                  <div className="col-8 d-flex justify-content-start align-items-center">
                    <p className="menuItemName">Thanthoori Briyani </p>

                  </div>
                  <div className="col-4 d-flex justify-content-end align-items-center">
                    <p className="menuItemPrice"> <MdOutlineCurrencyRupee />180 .00</p>

                  </div>
                </div>

                <p className="menuItemContent">Experience the perfect blend of spices, crafted to satisfy your cravings</p>


                <div className="row">
                  <div className="col-6 ">
                    <p className="menuItemRatings d-flex justify-content-start align-items-center"><FaStar />5.0</p>

                  </div>
                  <div className="col-6 d-flex justify-content-end align-items-center">
                    <button className="addMenuItems d-flex justify-content-end align-items-center"> <GrFormAdd /> ADD </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* <Logout/> */}
      <LogoutBtn />
    </div>
  )
}

export default Home
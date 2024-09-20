import React from 'react'

import { MdOutlineCurrencyRupee } from "react-icons/md";

import { FaStar } from "react-icons/fa";

import { GrFormAdd } from "react-icons/gr";

const MenuPage = () => {
  return (
    <>

      <section className="menuSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="menuCardOuter">
                <div className="foodCatgoryImg">

                  <img src="" alt="" />

                </div>
                <div className="row">
                  <div className="col-6">
                    <p className="menuItemName">Thanthoori Briyani </p>

                  </div>
                  <div className="col-6">
                    <p className="menuItemPrice"> <MdOutlineCurrencyRupee />180 .00</p>

                  </div>
                </div>

                <p className="menuItemContent">Experience the perfect blend of spices, crafted to satisfy your cravings</p>


                <div className="row">
                  <div className="col-6">
                    <p className="menuItemRatings"><FaStar />5.0</p>

                  </div>
                  <div className="col-6">
               <button className="addMenuItems"><GrFormAdd /> ADD </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MenuPage
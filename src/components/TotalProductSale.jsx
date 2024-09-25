import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import '../styles/totalProductSale.css'

import { LiaRupeeSignSolid } from "react-icons/lia";

import { MdBookmarkBorder } from "react-icons/md";

import { HiUserGroup } from "react-icons/hi2";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const TotalProductSale = () => {
    return (
        <div>
            {/* <div className="totalProductSale"> */}
            <div className="row mb-5">
                <div className="col-md-4">

                    <div className="totalSaleCardMain">
                        <div className="row">
                            <div className="col-4  mb-2">
                                <div className="cardIconTotalSale">
                                    <MdOutlineCurrencyRupee />

                                </div>
                                <div className="col-8"></div>
                            </div>
                        </div>
                        <h2 className='mb-0'>
                            <LiaRupeeSignSolid />10,00,000
                        </h2>
                        <p className="totalSaleCardBtm ">
                            Total Revenue
                        </p>
                    </div>
                </div>
                <div className="col-md-4">

                    <div className="totalSaleCardMain">
                        <div className="row">
                            <div className="col-4  mb-2">
                                <div className="cardIconTotalSale">
                                    <MdBookmarkBorder />
                                </div>
                                <div className="col-8"></div>
                            </div>
                        </div>
                        <h2 className='mb-0'>
                            <LiaRupeeSignSolid />23,456
                        </h2>
                        <p className="totalSaleCardBtm ">
                            Total Dish Ordered
                        </p>
                    </div>
                </div>
                <div className="col-md-4">

                    <div className="totalSaleCardMain">
                        <div className="row">
                            <div className="col-4  mb-2">
                                <div className="cardIconTotalSale">
                                    <HiUserGroup />
                                </div>
                                <div className="col-8"></div>
                            </div>
                        </div>
                        <h2 className='mb-0'>
                            <LiaRupeeSignSolid />1,234
                        </h2>
                        <p className="totalSaleCardBtm ">
                            Total Customer
                        </p>
                    </div>
                </div>
            </div>

            {/* </div> */}
        </div>
    )
}

export default TotalProductSale
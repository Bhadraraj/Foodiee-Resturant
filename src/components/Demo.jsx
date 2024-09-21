import React, { useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

import { FiSearch } from "react-icons/fi";




import { IoCloseOutline } from "react-icons/io5";
import LogoutBtn from './LogoutBtn';

const Demo = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
      setShowCart(!showCart); // Toggle cart visibility
  };

  return (
    <>


      <header className="headerSection">
        <div className="container">
          <div className="navBar d-flex align-items-center justify-content-between">



            <div className="logo">
              <h1>Logo</h1>
            </div>


            <div className="input-group ">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" >

                <FiSearch />
              </span>
            </div>

            <div className="notificationIconTop me-3">
              <MdNotificationsActive />
            {/* </div>
            <div className="toggleNavIcon"> */}
              <span onClick={toggleCart} className="navBartoggleBtn ms-4">
                <RiMenu3Line />
              </span>
            </div>







          </div>
        </div>
      </header>

    </>
  );
};

export default Demo;

import React from 'react'

import { Link } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import LogoutBtn from './LogoutBtn';
import { RiDashboardFill } from "react-icons/ri";
const NavBarLeft = () => {
    return (

        <div className="container">
            <div className="navBarLeft">
                <ul className='m-0 p-0'>
                    <li>
                        <Link to='/dashboard'><RiDashboardFill /></Link>
                    </li>
                    <li>
                        <Link to='/'><AiFillHome /></Link>
                    </li>
                    <li>
                        <Link to='/menu'> <MdOutlineMenuBook /> </Link>
                    </li>



                    {/* <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/menu" element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />
        <Route path="/demo" element={<ProtectedRoute><Demo /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>} />
        */}



                    <li>
                        <Link to='/notification'> <MdNotificationsActive /> </Link>
                    </li>


                    <li>
                        <Link to='/customerList'> <FaClipboardList /> </Link>
                    </li>
                    <li>
                        <Link><LogoutBtn /></Link>
                    </li>

                </ul>

            </div>
        </div>
    )
}

export default NavBarLeft
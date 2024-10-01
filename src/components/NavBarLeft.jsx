import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import LogoutBtn from './LogoutBtn';
import { RiDashboardFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import '../styles/navLeft.css';
import { RiBillFill } from "react-icons/ri";


const NavBarLeft = () => {
    return (
        <div className="navBarLeft">
            <ul className='m-0 p-0'>
                <li>
                    <NavLink
                        to='/dashboard'
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <RiDashboardFill />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <AiFillHome />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/report'
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <TbReport />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/menu'
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <MdOutlineMenuBook />
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink
                        to='/notification'
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <MdNotificationsActive />
                    </NavLink>
                </li> */}
                <li>
                    <NavLink
                        to='/customerList'
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <FaClipboardList />
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink
                        to='/user'
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <FaUser />
                    </NavLink>
                </li> */}
                <li>
                    <NavLink
                        to='/billing'
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <RiBillFill />
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink
                        to='/setting'
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <IoIosSettings />
                    </NavLink>
                </li> */}
                <li>
                    <NavLink
                        to='/logout'
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <LogoutBtn />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default NavBarLeft;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import LogoutBtn from './LogoutBtn';
import { RiDashboardFill } from "react-icons/ri";

import '../styles/navLeft.css'

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
                        to='/menu'
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <MdOutlineMenuBook />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/notification'
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <MdNotificationsActive />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/customerList'
                        className={({ isActive }) => isActive ? 'active-link' : ''}>
                        <FaClipboardList />
                    </NavLink>
                </li>
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

import React from 'react';
import './Sidebar.css';
import logo from '../../../image/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faPlusCircle, faCartPlus, faCommentDots, faSignOutAlt, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <img src={logo} alt=''></img>
            <div>
                <ul className='list-unstyled'>
                    {/* <div>
                        <li>
                            <Link to='/orderplace' className='text-white Link'>
                                <FontAwesomeIcon className='icon' icon={faCartPlus} /><span className='StyleOption'>Order</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/orderList" className="text-white Link">
                                <FontAwesomeIcon className='icon' icon={faUsers} /> <span className='StyleOption'>Order List</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/review" className="text-white Link">
                                <FontAwesomeIcon className='icon' icon={faCommentDots} /> <span className='StyleOption'>Review</span>
                            </Link>
                        </li>

                    </div> */}
                    <div>
                        <li><h6>Menu</h6></li>
                    
                    <li>
                        <Link to="/dashboard" className="text-white Link">
                            <FontAwesomeIcon className='icon' icon={faGripHorizontal} /> <span className='StyleOption'>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/orderList" className="text-white Link">
                            <FontAwesomeIcon className='icon' icon={faUsers} /> <span className='StyleOption'>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/addService' className='text-white Link'>
                            <FontAwesomeIcon className='icon' icon={faPlusCircle}></FontAwesomeIcon>
                            <span className='StyleOption'>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white Link" >
                            <FontAwesomeIcon className='icon' icon={faUserPlus} />
                            <span className='StyleOption'>Make Admin</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/manageService" className="text-white Link" >
                            <FontAwesomeIcon className='icon' icon={faMicrosoft} />
                             <span className='StyleOption'>Manage Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/setting" className="text-white Link" >
                            <FontAwesomeIcon className='icon' icon={faCog} /> <span className='StyleOption'>Settings</span>
                        </Link>
                    </li>
                    <li>
                    <Link to="/logout" className="text-white Link" >
                    <FontAwesomeIcon className='icon' icon={faSignOutAlt} /> <span className='StyleOption'>Log Out</span>
                        </Link>
                    </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import logo from '../../../image/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog,faCommentDots, faPlusCircle,faCartPlus, faSignOutAlt, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { loggedInContext } from '../../../App';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(loggedInContext);
    const [isAdmin, setAdmin] = useState(false);
    const email=loggedInUser.email||sessionStorage.getItem('email');
    useEffect(() => {
        fetch('http://localhost:4500/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email:email })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setAdmin(true)
                }
            })
    }, [loggedInUser.email])
    console.log(isAdmin)
    return (
        <div className='sidebar'>
            <img src={logo} alt=''></img>
            <div>
                <ul className='list-unstyled'>
                <li><h6>Menu</h6></li>
                    {isAdmin===false?<div>
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

                        <li>
                            <Link to="/home" className="text-white Link">
                                <FontAwesomeIcon className='icon' icon={faCommentDots} /> <span className='StyleOption'>Home</span>
                            </Link>
                        </li>

                    </div>:
                    <div>
                        <li>
                            <Link to="/home" className="text-white Link">
                                <FontAwesomeIcon className='icon' icon={faCommentDots} /> <span className='StyleOption'>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/orderList" className="text-white Link">
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
                            <Link to="/" className="text-white Link" >
                                <FontAwesomeIcon className='icon' icon={faCog} /> <span className='StyleOption'>Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white Link"  >
                                <FontAwesomeIcon className='icon' icon={faSignOutAlt} />
                                <span onClick={() => {
                                    setLoggedInUser({})
                                    sessionStorage.clear();
                                }
                                    } className='StyleOption'>Log Out</span>
                            </Link>
                        </li>
                    </div>}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;




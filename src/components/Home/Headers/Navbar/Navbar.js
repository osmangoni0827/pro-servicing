import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../../image/logo2.png';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light NavStyle">
            <div className="container-fluid ">
                <img src={logo} alt=''></img>
                <a className="navbar-brand text-white" href="/"><h1>Pro Servicing</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto ">
                        <li className="nav-item ">
                            <Link to='/home' className="nav-link active text-white" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/service' className="nav-link active text-white" aria-current="page" >Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-link active text-white" aria-current="page" >Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin' className="nav-link active text-white" aria-current="page" >Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-link active text-white" aria-current="page" >Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import bg from '../../../image/dashboard.png';
import './Dashboard.css';
const Dashboard = () => {
    return (
        <div>
            <div className='row dashboard'>
            <div className='col-md-3 col-2 col-sm-3'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-9 col-10 col-sm-8 d-flex align-items-center justify-content-center'>
               <img src={bg} alt=''></img>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;
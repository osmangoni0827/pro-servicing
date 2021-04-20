import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

import './Dashboard.css';
const Dashboard = () => {
    return (
        <div className=''>
            <div className='row'>
            <div className='col-md-4 col-2 col-sm-3'>
                <Sidebar></Sidebar>
            </div>
            <div className=' dashboard col-md-8 col-10 col-sm-8'>
           
            </div>
            </div>
        </div>
    );
};

export default Dashboard;
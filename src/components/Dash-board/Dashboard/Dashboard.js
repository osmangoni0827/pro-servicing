import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <div className='row'>
            <div className='col-md-4 col-2 col-sm-3'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-md-8 col-10 col-sm-8'>
            <h1>Dashboard</h1>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;
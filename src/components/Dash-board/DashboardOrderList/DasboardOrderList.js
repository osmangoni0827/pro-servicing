import React, { useContext, useEffect, useState } from 'react';
import { loggedInContext } from '../../../App';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import OrderListTable from '../OrderListTable/OrderListTable';
import './AdminOrder.css';
const DashboardOrderList = () => {
    const [order, setorders] = useState([]);
    const [loggedInUser] = useContext(loggedInContext);
    const email = loggedInUser.email || sessionStorage.getItem('email');
    useEffect(() => {
        fetch('https://pacific-harbor-21117.herokuapp.com/orderList', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => { setorders(data) })
    }, [loggedInUser.email])


    return (
        <div className="row " >
            <div className='col-md-3 col-2 col-sm-3'>
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 col-10 col-sm-8 p-4 pr-5 " style={{ position: "absolute", right: 5, }}>
                <h5 className="text-brand text-center">Orders Information</h5>
                <OrderListTable OrderInformation={order} />
            </div>
        </div>
    );
};

export default DashboardOrderList;
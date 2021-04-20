import React, { useEffect, useState } from 'react';
import ServiceTable from '../ServiceData/ServiceTable';
import Sidebar from '../../Shared/Sidebar/Sidebar';
const ManageService = () => {
    const [service, setservice] = useState([]);

    useEffect(() => {
        fetch('https://pacific-harbor-21117.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setservice(data))
    }, [])

    return (
        <div className="row" >
            <div className='col-md-3 col-2 col-sm-3'>
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-9 col-10 col-sm-9 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <ServiceTable service={service} />
            </div>
        </div>
    );
};

export default ManageService;
import React from 'react';
import './ServiceTable.css';
const ServiceTable = ({service}) => {

    const HandleDeleteService=(id)=>{
        fetch('https://pacific-harbor-21117.herokuapp.com/deleteService/'+id)
        .then(res=>res.json())
        .then(data=>{
            if(data){
                document.getElementById(id).style.display='none'
            }    
        })
    }
    return (
        <table className="table table-borderless serviceTable">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Service Id</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">price</th>
                <th className="text-secondary" scope="col">Action</th>
            
                </tr>
            </thead>
            <tbody>
                {
                  service.map((service, index) => 
                        
                    <tr style={{border:'2px solid'}} id={service._id}>
                        <td className='pt-3'>{index + 1}</td>
                        <td className='pt-3'>{service._id}</td>
                        <td className='pt-3'>{service.title}</td>
                        <td className='pt-3'>{service.price}</td>
                        <td><button onClick={()=>HandleDeleteService(service._id)}>Delete</button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default ServiceTable;
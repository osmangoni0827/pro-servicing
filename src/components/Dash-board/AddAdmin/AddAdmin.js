import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './AddAdmin.css';
const AddAdmin = () => {
    const [formData, setFormData] = useState({});
    const { title, name, email } = formData;
    const NewAdmin = {
        email,
        name,
        title
    }

    const HandleReviewButton = (e) => {
        fetch('https://pacific-harbor-21117.herokuapp.com/addAdmin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(NewAdmin)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Your Admin Successfully Done')
                }
            })
        e.preventDefault();
    }


    const HandleInput = (e) => {

        if (e.target.name === 'email') {
            const email = e.target.value
            const NewData = { ...formData }
            NewData.email = email
            setFormData(NewData)
        }
        else if (e.target.name === 'YourName') {
            const name = e.target.value
            const NewData = { ...formData }
            NewData.name = name
            setFormData(NewData)
        }
        else if (e.target.name === 'YourTitle') {
            const title = e.target.value
            const NewData = { ...formData }
            NewData.title = title
            setFormData(NewData)
        }
    }



    return (
        <div>
            <div className='row'>
                <div className='col-md-3 col-2 col-sm-3'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-9 col-10 col-sm-8'>
                    <h2>Add Admin</h2>
                    <div className='admin'>
                        <div className='form' >
                            <form onSubmit={HandleReviewButton}>
                                <div className="form-group">
                                    <input type="text" onBlur={HandleInput} className="form-control" required name="YourName" aria-describedby="name" placeholder="Enter Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={HandleInput} className="form-control" required name="YourTitle" aria-describedby="title" placeholder="Enter Your Title" />
                                </div>
                                <div className="form-group">
                                    <input type="email" onChange={HandleInput} className="form-control" required name="email" aria-describedby="email" placeholder="Enter Your Email" />
                                </div>
                                <button className='btn btn-info'>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddAdmin;
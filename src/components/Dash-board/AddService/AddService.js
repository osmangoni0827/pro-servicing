import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import axios from 'axios';
import './AddService.css';
const AddService = () => {
    const [Url, setUrl] = useState({});
    const [formData, setFormData] = useState({});
    const { title, description, price } = formData;
   const [enableButton,setEnableButton]=useState(true);
   
   useEffect(()=>{
    if(Url.length>0){
        setEnableButton(false)
        }
   },[Url])
   
    const NewService = {
        img: Url,
        title,
        description,
        price
    }
    console.log(NewService)
    const HandleReviewButton = (e) => {
        fetch('http://localhost:4500/addService', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(NewService)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('New Service Successfully Add')
                }
            })
        e.preventDefault();
    }


    const HandleInput = (e) => {
        if (e.target.name === 'ServiceName') {
            const title = e.target.value;
            const NewData = { ...formData }
            NewData.title = title
            setFormData(NewData)
        }
        else if (e.target.name === 'price') {
            const price = e.target.value
            const NewData = { ...formData }
            NewData.price = price
            setFormData(NewData)
        }
        else if (e.target.name === 'description') {
            const description = e.target.value
            const NewData = { ...formData }
            NewData.description = description
            setFormData(NewData)
        }

    }

    const HandleImageUpload = (event) => {
    const form = new FormData();
    form.set('key','20eb4f4a88d3505364e15416b41a0df2');
    form.append('image', event.target.files[0])
    axios.post('https://api.imgbb.com/1/upload',
    form)
    .then(data=>{
        console.log(data.data.data.display_url)
        setUrl(data.data.data.display_url)
    })
    .catch(err=>console.log(err))
    }

    return (
        <div>
            <div className='row'>
                <div className='col-md-3 col-2 col-sm-3'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-9 col-10 col-sm-8'>
                    <h2>Add New Service</h2>
                    <div className='addservice'>
                        <div className='form' >
                            <form onSubmit={HandleReviewButton}>
                                <div className="form-group">
                                    <input type="text" onBlur={HandleInput} className="form-control" required name="ServiceName" aria-describedby="ServiceName" placeholder="Enter Service Name" />
                                </div>
                                <div className="form-group">
                                    <input type="number" onBlur={HandleInput} className="form-control" required name="price" placeholder="Service Price" />
                                </div>
                                <div className="form-group description">
                                    <input type="text" onBlur={HandleInput} className="form-control " required name="description" placeholder="Description" />
                                </div>
                                <div className="form-group">
                                    <input type="file" onChange={HandleImageUpload} className="form-control" placeholder="Image Upload" />
                                </div>
                                <button disabled={enableButton} className='btn btn-info'>Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddService;
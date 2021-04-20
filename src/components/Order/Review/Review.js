import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import './Review.css';
const Review = () => {
  const [formData, setFormData] = useState({});
  const { title, description, customerName, customerTitle } = formData;
  const NewReview = {
    title,
    description,
    customerName,
    customerTitle,
    
  }

  const HandleReviewButton = (e) => {
    fetch('http://localhost:4500/addReview', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(NewReview)
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          alert('Your Review Successfully Done')
        }
      })
    // e.preventDefault();
  }


  const HandleInput = (e) => {
    if (e.target.name === 'ReviewTitle') {
      const Title = e.target.value;
      const NewData = { ...formData }
      NewData.title = Title
      setFormData(NewData)
    }
    else if (e.target.name === 'description') {
      const description = e.target.value
      const NewData = { ...formData }
      NewData.description = description
      setFormData(NewData)
    }
    else if (e.target.name === 'YourName') {
      const customerName = e.target.value
      const NewData = { ...formData }
      NewData.customerName = customerName
      setFormData(NewData)
    }
    else if (e.target.name === 'YourTitle') {
      const customerTitle = e.target.value
      const NewData = { ...formData }
      NewData.customerTitle = customerTitle
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
          <h2>Review</h2>
          <div className='review'>
            <div className='form' >
              <form onSubmit={HandleReviewButton}>
              <div className="form-group">
                  <input type="text" onChange={HandleInput} className="form-control" required name="YourName" aria-describedby="name" placeholder="Enter Your Name" />
                </div>
                <div className="form-group">
                  <input type="text" onChange={HandleInput} className="form-control" required name="YourTitle" aria-describedby="title" placeholder="Enter Your Title" />
                </div>
                <div className="form-group">
                  <input type="text" onChange={HandleInput} className="form-control" required name="ReviewTitle" aria-describedby="Review" placeholder="Enter Review Title" />
                </div>
                <div className="form-group description">
                  <input type="text" onChange={HandleInput} className="form-control " required name="description" placeholder="Description" />
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

export default Review;
import React from 'react';
import './ContactUs.css';
const ContactUs = () => {
    return (
        <section className='contact py-5' id='contact'>
            <h1>Contact Us</h1>
            <p>Any time we are ready for your massage</p>
            
            <div className='form' >
           <form>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="name" placeholder="Name" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                </div>

                <div className="massage">
                    <input type="text" className="form-control" id="massage" placeholder="Massage" />
                </div>
                <button type="submit" className="btn btn-light mb-3">Submit</button>
            </form>
            </div>
        </section>
    );
};

export default ContactUs;
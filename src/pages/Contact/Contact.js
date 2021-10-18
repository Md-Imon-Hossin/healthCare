import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <section>
                <div className='contact-title'>
                    <h3>Contact</h3>
                <p>We are here to help with any questions or concerns !
                </p>
                </div>
            </section>
            <section>
                <div className='contact-location py-5'>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className='contact-location-info'>
                                <h5>Location :</h5>
                                <h5>Australia
                                </h5>
                                <p>Envato INC 22 Elizabeth St.
                                </p>
                                </div>                                          
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className='contact-location-info'>
                                <h5>Email  :</h5>
                           <h5>Info@Yoursite.Com
                                </h5>
                                <p>Contact with us when you need anything.
                                </p>
                                </div>                
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className='contact-location-info'>
                                <h5>Phone :
                            </h5>
                                <h5>(1800)-456-7890
                                </h5>
                                <p>contact.healing@gmail.com
                                </p>
                                </div>                
                            </div>
                        </div>
                    </div>
                </div>
        </section>            
            <section>
                <div >
                    <div className="container">
                        <div className="row py-4">
                            <h2 className='mb-4'>Contact Us</h2>
                            <div className="col-xl-2 col-lg-2 col-md-2">                                
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8">
                                <form >
                                    <div className="row mb-3">
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-3">
                                        <input className='form-control ' placeholder='First Name' type="text" />

                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-3">
                                        <input className='form-control ' placeholder='Last Name' type="text" />
                                        </div>
                                </div>
                                    <div className="row mb-3">
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-3">
                                        <input className='form-control ' placeholder='Email' type="text" />
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-3">
                                        <input className='form-control ' placeholder='Number' type="text" />
                                        </div>
                                </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <textarea placeholder='Message' className='form-control' name="" id="" cols="30" rows="10"></textarea>
                                        </div>
                                </div>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <button className='btn btn-warning'>Send</button>
                                        </div>
                                </div>
                                </form>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2">
                            </div>
                        </div>
                    </div>
                </div>
            </section>           
        </div>
    );
};
export default Contact;
import React from 'react';
import './About.css'
import aboutDetailsImg from '../../images/about/about.jpg'
import expertDoctor from '../../images/about/clinic.jpg'
import signature from '../../images/about/signature.jpg'
import staff1 from '../../images/about/staff.jpg'
import staff2 from '../../images/about/staff (2).jpg'
import staff3 from '../../images/about/staff3.jpg'
const About = () => {
    return (
                <section>
            <div className='about-container'>
             <h2>About us</h2>
            </div>
            <div className='about-clinic-details py-5'> 
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="about-clinic-image">
                                <img className='img-fluid' src={aboutDetailsImg} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12">
                            <div className='our-clinic mt-4'>
                        <h2>About Our Clinic
                                </h2>
                                <h5>Clinic, an organized medical service offering diagnostic, therapeutic, or preventive outpatient services.</h5>
                                <p>information about allergies, illnesses, surgeries, immunizations, and results of physical exams and tests. It may also include information about medicines taken and health habits, such as diet and exercise.Insurer UnitedHealth to buy Everett Clinic operator for $4.9 billion as lines blur in health care. UnitedHealth will acquire DaVita's physician group for about $4.9 billion in cash
                            </p>
                            </div>
                            <div className='our-clinic mt-4'>
                        <h3>Our History</h3>
                                <h5>A record of information about a person's health.</h5>
                                <p>information about allergies, illnesses, surgeries, immunizations, and results of physical exams and tests. It may also include information about medicines taken and health habits, such as diet and exercise.Insurer UnitedHealth to buy Everett Clinic operator for $4.9 billion as lines blur in health care. UnitedHealth will acquire DaVita's physician group for about $4.9 billion in cash
                                </p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <div>                    
                    <div className=" healthCheck">
                    <h2 className='mb-2'>We Offer Different Treatment to your Pain</h2>
                    <p>Physical therapy is often one of the best choices you can make when you have long-term pain (also called chronic pain) or an injury.<br />  It can make you stronger and help you move and feel better</p>
                    </div>
                </div>
            <div className='expert py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div>
                                <img className='img-fluid' src={expertDoctor} alt="" />
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className='expert-info'>
                                <h2>Hello, I’m Doctor Julley
                                </h2>
                                <h5 className='text-primary'>Expert Clinical chiropractor in NY
                                </h5>
                                <p className='mt-4'>Chiropractic mind is the act of utilizing spinal arrangement to ease a wide assortment of physical infirmities, including muscle strain, neck torment, endless back torment, and then some. This is expert by altering the position of the spinal segment to its appropriate shape, giving a non-intrusive</p>
                                <p className='mt-3'>At Healing Chiropractic our chiropractic group is prepared to address with you to talk about your issues. We will outline a program that is appropriate for you. We anticipate meeting you.
                                </p>
                                <img src={signature} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='staff pb-5'>
                <div className="container">
                    <div className="row">
            <h2 className='text-danger mb-3'>Our Staffs
                        </h2>
                        <p className='mb-5'>A staff physical therapist works with people who are the victims of an accident, live <br /> with debilitating  diseases, and  have been confined to bed rest <br /> for a long period  of time, among other conditions</p>
                        <div className="col-lg-4">
                            <img className='img-fluid rounded-circle mb-3' src={staff2} alt="" />
                            <h3>Jonathan Kennedy
                            </h3>
                            <h5 className='text-danger'>THERAPIST
                            </h5>
                        </div>
                        <div className="col-lg-4">
                        <img className='img-fluid rounded-circle mb-3' src={staff1} alt="" />
                        <h3>Gordon Meyer
                            </h3>
                            <h5 className='text-danger'>THERAPIST
                            </h5>
                        </div>
                        <div className="col-lg-4">
                        <img  className='img-fluid rounded-circle mb-3'src={staff3} alt="" />
                        <h3>Susan Horton</h3>
                            <h5 className='text-danger'>THERAPIST
                        </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='accident-chance'>
                <div className='accident-chance-content'>
                <h5>Any problem by a sport, work accident etc._</h5>
                <h2>we welcome the chance to serve you.
                </h2>
                </div>               
            </div>           
</section>                                    
    );
};

export default About;
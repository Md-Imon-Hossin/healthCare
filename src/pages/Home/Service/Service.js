import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, img, name, description } = service;
    return (
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb-4'>
            <div className='Service-container h-100 shadow-sm'>
            <img className='img-fluid' src={img} alt="" />
            <h3 className='mt-3'>{name}</h3>
                <p className='py-1'>{description}</p>
                    <Link to={`/details/${id}`}>
                     <button className='btn btn-secondary mb-3 '>Details {name}</button>
                </Link>
            </div>    
        </div>
    );
};
export default Service;
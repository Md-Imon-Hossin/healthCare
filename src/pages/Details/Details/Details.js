// import { useEffect,useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceId } = useParams()
    // const [service, setService] = useState({})
    // useEffect(() => {
    //     const url = `public/services.json/details/${serviceId}`
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setService(data))
    // }, [])
    
    return (
        <div>
            <h2>This is details {serviceId} </h2>
            {/* {
                <small>{ service.name}</small>
            } */}
            
        </div>
    );
};
export default Details;
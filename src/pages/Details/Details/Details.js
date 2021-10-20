import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card, Col, Container, Row } from 'react-bootstrap'
import './Details.css'
const Details = () => {
    const { serviceId } = useParams()
    const [specific, setSpecific] = useState([])
    const [singleEmployee,setSingleEmployee] = useState({})
    useEffect(() => {
        fetch('/specific.json')
            .then(res => res.json())
        .then(data=>setSpecific(data.employee))
    }, [])
    useEffect(() => {
        const foundEmployee = specific.find(employee => employee.id == serviceId)
        setSingleEmployee(foundEmployee)
    },[specific])
    return (
        <div>
            <h2 className='mt-3'>This is details {serviceId} </h2>
            <Container>
                <Row className='py-5 mx-auto'>
                    <Col xl={6} lg={6}>
                        <span className='card-span '>
                        <Card className='img-fluid h-100'>
                        <Card.Img className=' h-100' variant="top" src={singleEmployee?.img} />
                        </Card>
                        </span>
                    </Col>
                    <Col xl={6} lg={6}>
                        <Card className='h-100 ' >
                    <Card.Body>
             <Card.Title >
                   <h3 className='mb-3'>{singleEmployee?.name}</h3>                 
             </Card.Title>
                <Card.Text>
                {singleEmployee?.description}
            </Card.Text>
            </Card.Body>
                </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default Details;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Card, Col, Container, Row} from 'react-bootstrap'
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
        const foundEmployee = specific.find(employee => employee.login.id == serviceId)
        setSingleEmployee(foundEmployee)
    },[specific])

    
    return (
        <div>
            <h2>This is details {serviceId} </h2>
            <p>{singleEmployee?.name}</p>
            
            <Container>
                <Row>

                    <Col xl={6}>
                        <Card>
                        <Card.Img className='img-fluid' variant="top" src={singleEmployee?.img} />

                        </Card>

                    </Col>

                    <Col xl={6}>
                    <Card style={{ width: '18rem' }}>
  <Card.Body>
            <Card.Title >{singleEmployee?.name}</Card.Title>
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
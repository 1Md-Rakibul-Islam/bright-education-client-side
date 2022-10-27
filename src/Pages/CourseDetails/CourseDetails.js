import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const CourseDetails = () => {
    const {about, _id, category_name, enrolled, instructor, picture, price, title, upload} = useLoaderData();

    return (
        <Container className='mt-5'>
            <Card class="mx-auto my-auto bg-light rounded-2" style={{ width: '65rem'}}>
            <Row>
                <Col>
                    <Card.Img class="w-100 h-100" src={picture} />
                    <Card.Footer>
                        <div className='d-flex justify-content-between'>
                            <p class="card-text"><small class="text-muted">Upload: {upload}</small></p>
                            <p class="card-text"><span class="text-warning">Enrolled: </span> {enrolled}</p>
                        </div>
                     </Card.Footer>
                </Col>
                <Col className='p-4'>
                    <Card.Body>
                        <Card.Title className='text-info'>
                            <h2>{title}</h2>
                        </Card.Title>
                        <h5>Instructor: {instructor}</h5>
                        <Card.Text class="card-text">About: {about}</Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Text>
                        <p class="card-text"><span class="text-primary">Price: </span> {price}</p>
                        </Card.Text>
                        <Link to={`/course/${_id}/checkout`}><Button variant="primary" >Checkout</Button></Link>
                    </Card.Body>
                </Col>
            </Row>
            <Card.Footer>
                <div className='d-flex justify-content-between'>
                    <p class="card-text"><small class="text-muted">Upload: {upload}</small></p>
                    <Link to={'/course'}><Button variant="primary">Go To Another Course</Button></Link>
                </div>
            </Card.Footer>
            </Card>
        </Container>
    );
};

export default CourseDetails;
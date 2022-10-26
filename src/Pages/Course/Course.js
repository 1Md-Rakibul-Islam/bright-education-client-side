import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Course.css'

const Course = ({course}) => {
    const {instructor, duration, title, picture, price} = course;

    return (
        <Col>
          <Card>
            <Card.Img className='course-img' variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <p>{instructor}</p>
          </Card.Body>
          <Card.Footer className='d-flex justify-content-between'>
            <small className="text-muted">Price: {price}</small>
            <small className="text-muted">Duration: {duration}</small>
          </Card.Footer>
          </Card>            
        </Col>

    );
};

export default Course;
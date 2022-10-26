import React from 'react';
import Header from '../Shared/Header/Header';
import CourseContent from '../CourseContent/CourseContent';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import { Row, Col, Container } from 'react-bootstrap';
// import Footer from '../Pages/Shared/Footer/Footer';

const Course = () => {
    return (
        <div>
            <Container fluied className=''>
                <Row>
                    <Col lg='8'>
                        <CourseContent></CourseContent>
                    </Col>
                </Row>
            </Container>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Course;
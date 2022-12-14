import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import Course from '../Pages/Course/Course';
import './CoursePageLayout.css';



const CoursePageLayout = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Container  className=''>
                <Row className=''>
                    <Col lg='3' sm='12'>
                        <LeftSideNav course={courses}></LeftSideNav>
                    </Col>
                    <Col lg='9' sm='12'>
                        <Row xs={1} sm={1} md={2} lg={3} xl={3} className="g-4 ">
                            {
                                courses.map( course => <Link className='singe-course' to={`/course/${course._id}`}><Course key={course._id} course={course}></Course></Link>)
                            }                      
                        </ Row>
                    </Col>
                </Row>
            </Container>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default CoursePageLayout;
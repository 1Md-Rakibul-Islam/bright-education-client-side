import React from 'react';
import { Outlet, useLoaderData } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import Course from '../Pages/Course/Course';



const CoursePageLayout = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Container fluied className=''>
                <Row>
                    <Col lg='4' className='d-none d-lg-block'>
                        <LeftSideNav course={courses}></LeftSideNav>
                    </Col>
                    <Col lg='8'>
                        {
                            courses.map( course => <Course key={course._id} course={course}></Course>)
                        }
                    </Col>
                </Row>
            </Container>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default CoursePageLayout;
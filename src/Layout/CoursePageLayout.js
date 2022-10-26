import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Pages/Shared/Header/Header';
import { Row, Col, Container } from 'react-bootstrap';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import Footer from '../Pages/Shared/Footer/Footer';
import Categories from '../Pages/Categories/Categories';
import Course from '../Pages/Course/Course';

const CoursePageLayout = () => {
    return (
        <div>
            <Container fluied className=''>
                <Row>
                    <Col lg='4' className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='8'>
                        <Course></Course>
                    </Col>
                </Row>
            </Container>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default CoursePageLayout;
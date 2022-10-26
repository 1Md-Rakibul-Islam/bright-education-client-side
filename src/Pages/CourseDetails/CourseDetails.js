import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';


const CourseDetails = () => {
    const courses = useLoaderData();
    // console.log(courses)
    return (
        <div>
            <h2>Course details</h2>
        </div>
    );
};

export default CourseDetails;
import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import './CoursePageLayout.css'
import ListGroup from 'react-bootstrap/ListGroup';

const LeftSideNav = ({course}) => {
    console.log(course);
    return (
        <div className='bg-info border rounded-2  left-nav'>
            <h4>Total Course: {course.length}</h4>
            <ListGroup className=''>
            {
                course.map( cs => <ListGroup.Item variant="primary">
                    <Link className='course-list' to={`/course/${cs._id}`}><li>{cs.title}</li></Link>
                </ListGroup.Item>)
            }
            </ListGroup>

        </div>
    );
};

export default LeftSideNav;
import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const LeftSideNav = ({course}) => {
    console.log(course);
    return (
        <div>
            <h4>Course: {course.length}</h4>
            {
                course.map( cs => <Link to={`/course/${cs._id}`}><li>{cs.title}</li></Link>)
            }
        </div>
    );
};

export default LeftSideNav;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from '../../Categories/Categories';

const LeftSideNav = () => {
    const category = useLoaderData()
    return (
        <div>
            <h2>Lesft side nav</h2>
            <Categories></Categories>
        </div>
    );
};

export default LeftSideNav;
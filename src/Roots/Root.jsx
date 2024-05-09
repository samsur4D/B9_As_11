import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Common/Navber';
import Footer from '../Common/Footer';

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
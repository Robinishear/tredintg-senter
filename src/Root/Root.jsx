import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';


const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;

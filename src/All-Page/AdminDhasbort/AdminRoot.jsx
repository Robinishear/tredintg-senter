import React from 'react';
import { Outlet } from 'react-router';
import AdminFooter from './AdminFooter';
import AdminNavbar from './AdminNavbar';

const AdminRoot = () => {
    return (
        <div className='bg-gray-900'>
            <AdminNavbar/>
             <Outlet/>
             <AdminFooter/>
        </div>
    );
};

export default AdminRoot;
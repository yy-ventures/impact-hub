import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const Layout = ({children}) => {
    
    return (
        <>
            <Navbar/>
            {children}
        </>
    );
};

export default Layout;
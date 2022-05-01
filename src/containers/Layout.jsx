// Un componente que recibe un hijo, que es la parte principal del proyecto

import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='Layout'>
            {children}
        </div>
    );
};

export default Layout;
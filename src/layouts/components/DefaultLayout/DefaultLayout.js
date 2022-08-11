import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import './DefaultLayout.scss';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="container-fluid">
                <div className="body">
                    <Sidebar />
                    <div className="content">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeSolidIcon, TVIcon } from '~/components/Icon';
import config from '~/config';
import './Sidebar.scss';

function Sidebar(props) {
    const navBar = [
        {
            id: 1,
            link: config.routes.home,
            icon: <HomeSolidIcon />,
            title: 'Home',
        },
        {
            id: 2,
            link: config.routes.tv,
            icon: <TVIcon />,
            title: 'Tv',
        },
    ];

    return (
        <div className="navBar">
            {navBar &&
                navBar.map((item) => (
                    <NavLink to={item.link} key={item.id} className="navBar_item">
                        <div className="sideBar_icon">{item.icon}</div>
                        <div className="sideBar_title">{item.title}</div>
                    </NavLink>
                ))}
        </div>
    );
}

export default Sidebar;

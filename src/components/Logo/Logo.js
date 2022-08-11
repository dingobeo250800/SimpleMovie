import React from 'react';
import Button from '../Button';
import { LogoIcon } from '../Icon';
import config from '~/config';
import './LogoIcon.scss';

function Logo(props) {
    return (
        <div className="logo_icon">
            <Button to={config.routes.home} className="logo">
                <LogoIcon />
            </Button>
            <Button to={config.routes.home} className="logo">
                <p>Wmovies</p>
            </Button>
        </div>
    );
}

export default Logo;

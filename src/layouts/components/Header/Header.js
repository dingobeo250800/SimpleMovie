import React from 'react';
import Button from '~/components/Button';
import Logo from '~/components/Logo';
import config from '~/config';
import Search from '../Search';
import './Header.scss';

function Header(props) {
    return (
        <div className="header">
            {/* logo */}
            <Logo />
            {/* search */}
            <Search />
            {/* action */}
            <Button bgColor_login="bgLogin" rounded='rounded' colorWhite='colorWhite' size='small' to={config.routes.login}>
                Login
            </Button>
        </div>
    );
}

export default Header;

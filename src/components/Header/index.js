import React from 'react';

import { Link } from 'react-router-dom';

// Images
import APILogo from '../../images/api-logo.png';
import SiteLogo from '../../images/logo.svg';

import { Wrapper, Content, LogoImg, APILogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to="/">
                <LogoImg src={SiteLogo} alt='site-logo' />
            </Link>
            <a href="https://api.chucknorris.io/" rel="noreferrer" target="_blank">
                <APILogoImg src={APILogo} alt='api-logo' />
            </a>
        </Content>
    </Wrapper>
)

export default Header;
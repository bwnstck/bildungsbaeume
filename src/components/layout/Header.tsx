import React from 'react';

import Image from 'next/image'

import styled from 'styled-components';

import Logo from "$public/icon.png"

interface MenuItemProp {
    name: string,
    onClick: () => void
}
const MenuItems: MenuItemProp[] = [{
    name: "Menu Item 1",
    onClick: () => document.getElementById('Section1').scrollIntoView()
},
{
    name: "Menu Item 2",
    onClick: () => document.getElementById('Section2').scrollIntoView()
},
{
    name: "UP",
    onClick: () => document.getElementById('Top').scrollIntoView()
}
]
const Header = () => {

    return <HeaderWrapper id="Top">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <LogoWrapper>
            <Image
                src={Logo} alt="Logo"
            />
        </LogoWrapper >
        <MenuWrapper>
            <p>Site Title</p>
            <ul>
                {MenuItems.map(menuItem => (
                    <li key={menuItem.name} onClick={menuItem.onClick}>{menuItem.name}</li>

                ))}
            </ul>
        </MenuWrapper> */}
    </HeaderWrapper>;
};

export default Header;

const MenuWrapper = styled.div`
    p{
        font-Size: 2rem;
        margin-left: .5rem;
        color: var(--text-color)
    }
    ul{
        display: flex;
        list-style: none;
        li{
            margin:0;
            padding: 0;
            user-select: none;
            cursor: default;
::selection {
    background-color: transparent;
}

            padding: .75rem;
            :active,:hover{
                color: red
            }
        }
    }
`
const LogoWrapper = styled.div`
width: 5rem;

`
const HeaderWrapper = styled.section`
display: flex;

width: 100%;
padding: 2rem;
/* max-width: 00px; */
background-color: var(--color-background);
color: var(--color-white);
`
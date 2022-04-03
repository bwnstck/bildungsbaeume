import React from 'react'

import Image from 'next/image'

import styled from 'styled-components'

import Logo from '$public/icon.png'

interface MenuItemProp {
  name: string
  onClick: () => void
}
const MenuItems: MenuItemProp[] = [
  {
    name: 'Menu Item 1',
    onClick: () => document.getElementById('Section1').scrollIntoView(),
  },
  {
    name: 'Menu Item 2',
    onClick: () => document.getElementById('Section2').scrollIntoView(),
  },
  {
    name: 'UP',
    onClick: () => document.getElementById('Top').scrollIntoView(),
  },
]
const Header = () => {
  return (
    <HeaderWrapper id="Top">
      <LogoWrapper>
        <Image src={Logo} alt="Logo" />
      </LogoWrapper>
      <MenuWrapper>
        <p>Site Title</p>
        <ul>
          {MenuItems.map((menuItem) => (
            <li key={menuItem.name} onClick={menuItem.onClick}>
              {menuItem.name}
            </li>
          ))}
        </ul>
      </MenuWrapper>
    </HeaderWrapper>
  )
}

export default Header

const MenuWrapper = styled.div`
  p {
    font-size: 2rem;
    margin-left: 0.5rem;
    color: var(--text-color);
  }
  ul {
    display: flex;
    list-style: none;
    li {
      margin: 0;
      padding: 0;
      user-select: none;
      cursor: default;
      ::selection {
        background-color: transparent;
      }

      padding: 0.75rem;
      :active,
      :hover {
        color: red;
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

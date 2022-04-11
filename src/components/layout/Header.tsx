import React from 'react'

import Image from 'next/image'

import styled from 'styled-components'

import Data from '/config.json'
import Logo from '$public/logoBB.png'

interface MenuItemProp {
  name: string
  onClick: () => void
}

const MenuItems: MenuItemProp[] = [
  {
    name: 'Was?',
    onClick: () => document.getElementById('Section1').scrollIntoView(),
  },
  {
    name: 'Wo?',
    onClick: () => document.getElementById('Section2').scrollIntoView(),
  },
  {
    name: 'Wie?',
    onClick: () => document.getElementById('Section3').scrollIntoView(),
  },
]
const Header = () => {
  return (
    <HeaderWrapper id="Top">
      <LogoWrapper>
        <Image src={Logo} alt="Logo" />
      </LogoWrapper>
      <MenuWrapper>
        <p>{Data.site_title}</p>
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
        color: #e6501a;
      }
    }
  }
`
const LogoWrapper = styled.div`
  width: 5rem;
  min-width: 5rem;
`
const HeaderWrapper = styled.section`
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding: 1rem 2rem 0;
  background-color: var(--color-background);
  color: var(--color-white);
`

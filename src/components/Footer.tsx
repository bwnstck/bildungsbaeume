import React from 'react'

import { MetaState } from './layout/FooterWithImpress'

import styled from 'styled-components'

import FooterContent from '$meta/footerContent.yml'

const Footer = ({
  onSetImpress,
}: {
  onSetImpress: (type: MetaState) => void
}) => {
  return (
    <FooterWrapper>
      <p>
        {FooterContent.footerMeta} © {new Date().getFullYear()}
        {FooterContent.impressBody &&
          <button onClick={() => onSetImpress('impress')}>Impressum</button>
        }
        {FooterContent.dataSecurityBody &&
          <button onClick={() => onSetImpress('dataSecurity')}>
            Datenschutz
          </button>
        }
      </p>
      <Credits>
        made with <span className="luv">❤️</span>by{' '}
        <a
          href="https://weinstock.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          bwnstck
        </a>
      </Credits>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
  height: 264;
  background-color: var(--color-background);

  padding: 2rem 1rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    padding: 2rem 0 1rem;
    font-size: var(--fontSize-small);
    color: var(--color-white);

    button {
      color: var(--color-white);
      border: 0;
      background-color: transparent;
    }
    button:active,
    button:hover {
      color: var(--primary-color);
    }
    button:first-child {
      padding: 0 0.75rem;
    }
  }
`

const Credits = styled.span`
  color: var(--color-white);
  font-size: var(--fontSize-small);
  margin: auto 0.5rem;
  height: 2rem;
  :hover .luv {
    font-size: 1rem;
    line-height: 0;
  }
  .luv {
    transition: all 300ms ease-in-out;
    margin-right: 0.3rem;
  }
`

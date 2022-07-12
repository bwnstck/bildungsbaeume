import React from 'react'
import ReactMarkdown from 'react-markdown'
import { ReactElement } from 'react-markdown/lib/react-markdown'

import Image from 'next/image'

import styled from 'styled-components'

interface SectionProps {
  isWhite?: boolean
  title?: string
  body?: string
  id: string
  logo: StaticImageData
  rounded?: 'top' | 'bottom'
  children?: ReactElement
}

const Section = ({
  isWhite,
  title,
  body,
  id,
  logo,
  rounded,
  children,
}: SectionProps) => {
  return (
    <StyledSection id={id} isWhite={isWhite} rounded={rounded}>
      <div>
        {logo && (
          <LogoWrapper>
            <Image src={logo} alt="Logo" />
          </LogoWrapper>
        )}
        <h4>{title}</h4>
      </div>
      {children}
      {body && <Body>{body}</Body>}
    </StyledSection>
  )
}

export default Section

interface StyledSectionProps {
  isWhite?: boolean
  rounded?: 'top' | 'bottom'
}

const LogoWrapper = styled.div`
  width: 3rem;
  min-width: 3rem;
  margin-right: 1rem;
`
const StyledSection = styled.div<StyledSectionProps>`
  background-color: ${(props) => (props.isWhite ? '#fff' : '#FFE1A6')};
  border-radius: ${(props) =>
    props.rounded === 'top'
      ? '5px 5px 0 0'
      : props.rounded === 'bottom'
      ? '0 0 5px 5px'
      : ''};
  padding: 2rem 2rem 1rem;

  > :first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  h4 {
    color: black;
  }

  ul {
    list-style-position: inside;
  }
`

// const ContentContainer = styled.div`
//   text-align: left;
// `

const Body = styled(ReactMarkdown)`
  text-align: left;
  font-size: 40px;
  margin: auto;
  > p {
    line-height: 40px;
    padding-bottom: 1rem;
  }
`

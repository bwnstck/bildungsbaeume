import React from 'react'

import Image from 'next/image'

import { getData } from '$lib/data'

import styled from 'styled-components'

import Sections from '$meta/sections.yml'

interface SectionProps {
  isWhite?: boolean
  slug?: string
  id: string
  logo: StaticImageData
  rounded?: 'top' | 'bottom'
  children: React.ReactNode
}

const Section = ({
  isWhite,
  slug,
  id,
  logo,
  rounded,
  children,
}: SectionProps) => {
  return (
    <StyledSection id={id} isWhite={isWhite} rounded={rounded}>
      <div>
        <LogoWrapper>
          <Image src={logo} alt="Logo" />
        </LogoWrapper>
        <h4>{getData({ data: Sections, slug }).name}</h4>
      </div>
      <ContentContainer>{children}</ContentContainer>
      {/* <Body>{getData({ data: Sections, slug }).content}</Body> */}
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
      ? '10px 10px 0 0'
      : props.rounded === 'bottom'
      ? '0 0 10px 10px'
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

const ContentContainer = styled.div`
  text-align: left;
`

// const Body = styled(ReactMarkdown)`
//   text-align: left;
//   font-size: 40px;
//   margin: auto;
//   > p {
//     line-height: 40px;
//     padding-bottom: 1rem;
//   }
// `

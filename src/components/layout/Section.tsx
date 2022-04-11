import React from 'react'
import ReactMarkdown from 'react-markdown'

import Image from 'next/image'

import { getData } from '$lib/data'

import styled from 'styled-components'

import Sections from '$meta/sections.yml'
interface SectionProps {
  isWhite?: boolean
  slug: string
  id: string
  logo: StaticImageData
}
const Section = ({ isWhite, slug, id, logo }: SectionProps) => {
  return (
    <StyledSection id={id} isWhite={isWhite}>
      <div>
        <LogoWrapper>
          <Image src={logo} alt="Logo" />
        </LogoWrapper>
        <h4>{getData({ data: Sections, slug }).name}</h4>
      </div>
      <Body>{getData({ data: Sections, slug }).content}</Body>
    </StyledSection>
  )
}

export default Section

interface StyledSectionProps {
  isWhite?: boolean
}

const LogoWrapper = styled.div`
  width: 3rem;
  min-width: 3rem;
  margin-right: 1rem;
`
const StyledSection = styled.div<StyledSectionProps>`
  background-color: ${(props) =>
    props.isWhite ? '#fff' : 'rgba(237, 169, 21, 0.2)'};
  padding: 2rem 2rem 0;

  > :first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  h4 {
    color: black;
  }
`

const Body = styled(ReactMarkdown)`
  text-align: left;
  font-size: 40px;
  margin: auto;
  > p {
    line-height: 40px;
    padding-bottom: 1rem;
  }
`

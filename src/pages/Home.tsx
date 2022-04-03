import ReactMarkdown from 'react-markdown'

import { getData } from '$lib/data'

import styled from 'styled-components'

import Sections from '$meta/sections.yml'


const LandingPage = () => {



  return (
    <BodyWrapper>
      <ContentBox id="Section1">
        {/* <Body>{HomeContent.body}</Body> */}
        <div id="Section1">
          <h1>{getData({ data: Sections, slug: "section1" }).name}</h1>
          <Body>{getData({ data: Sections, slug: "section1" }).content}</Body>
        </div>
        <div id="Section2">
          <h1>{getData({ data: Sections, slug: "section2" }).name}</h1>
          <Body>{getData({ data: Sections, slug: "section2" }).content}</Body>
        </div>
        <div id="Section3">
          <h1>{getData({ data: Sections, slug: "section3" }).name}</h1>
          <Body>{getData({ data: Sections, slug: "section3" }).content}</Body>
        </div>
        {/* <div id="Section1">
          <h1>{getData({ data: Sections, slug: "section4" }).name}</h1>
          <Body>{getData({ data: Sections, slug: "section4" }).content}</Body>
        </div> */}
      </ContentBox>
    </BodyWrapper>
  )
}

export default LandingPage


const BodyWrapper = styled.div`
    background-color: var(--color-white);
  text-align: center;
  margin: 0 auto;
  padding: 1rem 0.5rem;
`
const Body = styled(ReactMarkdown)`
  text-align: left;
  font-size: 40px;
  max-width: 600px;
  margin: auto;
  > p {
    line-height: 40px;
    padding-bottom: 1rem;
  }
`

const ContentBox = styled.div`
max-width: 600px;
margin: auto;

`

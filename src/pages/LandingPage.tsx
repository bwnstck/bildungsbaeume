import Carousel from '$components/Carousel'
import Section from '$components/layout/Section'

import styled from 'styled-components'

import Sprout from '$images/sprout.png'
import Support from '$images/support.png'
import Where from '$images/where.png'
import Sections from '$meta/sections.yml'

const SLIDE_COUNT = 5
const slides = Array.from(Array(SLIDE_COUNT).keys())

const LandingPage = () => {
  return (
    <BodyWrapper>
      <Carousel slides={slides} />
      <ContentBox id="Section1">
        <Section
          id={'Section1'}
          title={Sections.section1.title}
          body={Sections.section1.body}
          logo={Sprout}
          rounded={'top'}
        />
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube-nocookie.com/embed/4O4VtLf7RLA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Section
          id={'Section2'}
          title={Sections.section2.title}
          body={Sections.section2.body}
          logo={Where}
          isWhite
        />
        <Section
          id={'Section3'}
          title={Sections.section3.title}
          body={Sections.section3.body}
          logo={Support}
          rounded={'bottom'}
        />
      </ContentBox>
    </BodyWrapper>
  )
}

export default LandingPage

const BodyWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
`

const ContentBox = styled.div`
  max-width: 800px;
  margin: 0 auto 2rem;
  padding: 0 0.5rem 0;
`

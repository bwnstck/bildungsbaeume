import Section from '$components/layout/Section'

import styled from 'styled-components'

import Sprout from '$images/sprout.png'
import Support from '$images/support.png'
import Where from '$images/where.png'
import Sections from '$meta/sections.yml'
const LandingPage = () => {
  return (
    <BodyWrapper>
      <ContentBox id="Section1">
        <Section
          id={'Section1'}
          title={Sections.section1.title}
          body={Sections.section1.body}
          logo={Sprout}
          rounded={'top'}
        ></Section>
        <Section
          id={'Section2'}
          title={Sections.section2.title}
          body={Sections.section2.body}
          logo={Where}
          isWhite
        ></Section>
        <Section
          id={'Section3'}
          title={Sections.section3.title}
          body={Sections.section3.body}
          logo={Support}
          rounded={'bottom'}
        ></Section>
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

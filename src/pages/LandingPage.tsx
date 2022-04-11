import Section from '$components/layout/Section'

import styled from 'styled-components'

import Sprout from '$images/sprout.png'
import Support from '$images/support.png'
import Where from '$images/where.png'

const LandingPage = () => {
  return (
    <BodyWrapper>
      <ContentBox id="Section1">
        <Section id={'Section1'} slug={'section1'} logo={Sprout} />
        <Section id={'Section2'} slug={'section2'} logo={Where} isWhite />
        <Section id={'Section3'} slug={'section3'} logo={Support} />
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
  background-color: #fff;
  max-width: 800px;
  margin: 0 auto 2rem;
`

import ReactMarkdown from 'react-markdown'

import Image from 'next/image'

import InstaIcon from '$components/InstaIcon'

import styled from 'styled-components'

import Data from '$meta/underConstruction.yml'
import Logo from '$public/logoBB.png'

const UnderConstruction = () => (
  <StyledBody>
    <h1>{Data.title}</h1>
    <div className="logo">
      <Image src={Logo} alt="Logo" />
    </div>
    <StyledP>{Data.body}</StyledP>
    <InstaIcon text="Folge uns derweil auf Instagram" />
  </StyledBody>
)

export default UnderConstruction

const BodyWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
`
const StyledBody = styled(BodyWrapper)`
  display: flex;
  flex-direction: column;

  .insta-text {
    margin-top: 2rem;
    color: white;
    font-size: 1rem;
  }

  h1 {
    text-align: center;
    margin: 1em auto;
  }

  .logo {
    margin: auto auto 2rem;
    width: clamp(200px, 40%, 400px);
  }
  .insta-logo {
    align-self: center;
    margin-top: 1rem;
    width: 4rem;
    text-align: 'center';
  }
`

const StyledP = styled(ReactMarkdown)`
  color: var(--color-white);
`

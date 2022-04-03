import ReactMarkdown from 'react-markdown'

import Image from 'next/image'

import { BodyWrapper } from './Home'

import styled from 'styled-components'

import Data from '$meta/underConstruction.yml'
import Logo from "$public/LogoBB.png"
const UnderConstruction = () => {

    return (
        <StyledBody>
            <h1>{Data.title}</h1>
            <Image
                src={Logo} alt="Logo"
            />
            <StyledP>{Data.body}</StyledP>


        </StyledBody>
    )
}

export default UnderConstruction

const StyledBody = styled(BodyWrapper)`

    h1{
        text-align: center;
        margin: 1em auto
        }
`

const StyledP = styled(ReactMarkdown)`
color: white
`
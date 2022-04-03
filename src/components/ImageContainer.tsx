import styled from 'styled-components'

interface bgImageProps {
  backgroundUrl: string
}
const ImageContainer = styled.div<bgImageProps>`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.backgroundUrl});
  background-position: center;
  background-size: cover;
  padding: 0 20px;
  overflow: hidden;
  position: relative;
`

export default ImageContainer

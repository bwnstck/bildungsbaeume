import ReactMarkdown from 'react-markdown'

import styled from 'styled-components'

const MarkdownBody = styled(ReactMarkdown)`
  text-align: left;
  font-size: 40px;
  margin: auto;
  > p {
    line-height: 40px;
    padding-bottom: 1rem;
  }
  a {
    color: var(--primary-color);
    font-weight: 400;
  }
`
export default MarkdownBody

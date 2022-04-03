import React, { useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import Footer from '$components/Footer'

import styled from 'styled-components'

import FooterContent from '$meta/footerContent.yml'

export type MetaState = 'notShown' | 'impress' | 'dataSecurity'

interface ImpressProps {
  visible: boolean
}

const FooterWithImpress = () => {
  const [showImpress, setShowImpress] = useState<MetaState>('notShown')

  const impressRef = useRef(null)
  const dataSecurityRef = useRef(null)

  const handleShowMeta = (type: MetaState) => {
    if (type === 'impress') {
      setShowImpress('impress')
      setTimeout(() => {
        impressRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
    if (type === 'dataSecurity') {
      setShowImpress('dataSecurity')
      setTimeout(() => {
        dataSecurityRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
    if (type === 'notShown') {
      setShowImpress('notShown')
    }
  }

  return (
    <>
      <Footer onSetImpress={handleShowMeta} />
      <ImpressWrapper visible={showImpress === 'impress'} ref={impressRef}>
        <TitleAndClose>
          <h3>Impressum</h3>
          <button onClick={() => handleShowMeta('notShown')}>X</button>
        </TitleAndClose>
        <Body>{FooterContent.impressBody}</Body>
      </ImpressWrapper>
      <DataSecurityWrapper
        visible={showImpress === 'dataSecurity'}
        ref={dataSecurityRef}
      >
        <TitleAndClose>
          <h3>Datenschutz</h3>
          <button onClick={() => handleShowMeta('notShown')}>X</button>
        </TitleAndClose>
        <Body>{FooterContent.dataSecurityBody}</Body>
      </DataSecurityWrapper>
    </>
  )
}

export default FooterWithImpress

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
const ImpressWrapper = styled.div<ImpressProps>`
  display: ${(props) => (props.visible ? 'inherit' : 'none')};
  background-color: white;
  padding: 1rem 2rem;
`
const DataSecurityWrapper = styled(ImpressWrapper)``

const TitleAndClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    flex: 1;
    text-align: center;
  }
  button {
    background-color: transparent;
    border: 0;
    font-size: 2.5rem;
  }
`

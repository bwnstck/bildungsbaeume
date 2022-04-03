import Head from 'next/head'
import Script from "next/script"

import FooterWithImpress from './FooterWithImpress'
import Header from './Header'

import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <>
      <div className="root">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <link rel="stylesheet" href="https://use.typekit.net/afc8oob.css" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <Header />
        <Wrapper>{children}</Wrapper>
        <FooterWithImpress />
      </div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      />
      {/* <Script
        async
        src="https://performance.weinstock.it/tracker.js"
        data-ackee-server="https://performance.weinstock.it"
        data-ackee-domain-id="a4d4839b-3c03-4974-a22b-1e4ada2963f1"
      /> */}
    </>
  )
}

const Wrapper = styled.main`
  width: 100%;
`

import { AppProps } from 'next/app'

import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css'

import GlobalStyle from '$styles/global'

// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

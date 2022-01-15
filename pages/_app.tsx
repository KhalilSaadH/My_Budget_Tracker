import '../styles/globals.css'
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from '../context/context';

import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SpeechProvider appId="7c4aee08-1073-4a32-b862-ebe1850e0732" language="en-US">
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </SpeechProvider>
  )
}

export default MyApp

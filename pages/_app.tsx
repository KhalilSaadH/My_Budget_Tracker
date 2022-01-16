import '../styles/globals.css'
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from '../context/context';

import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SpeechProvider appId="e8016cb4-f9a4-4256-bf94-87314a2102bb" language="en-US">
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </SpeechProvider>
  )
}

export default MyApp

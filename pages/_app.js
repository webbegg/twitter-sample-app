import { TwitterContextProvider } from 'store'

import 'styles/global.css'

const App = ({ Component, pageProps }) => {
  return (
    <TwitterContextProvider>
      <Component {...pageProps} />
    </TwitterContextProvider>
  )
}

export default App

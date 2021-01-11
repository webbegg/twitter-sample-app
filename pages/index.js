import Head from 'next/head'

import Tweets from 'tweets/containers/TweetsContainer'

const Home = () => (
  <div>
    <Head>
      <title>Twitter app</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Tweets />
  </div>
)

export default Home

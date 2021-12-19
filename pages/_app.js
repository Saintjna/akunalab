import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="qxzGS3Eoynv6MG4GyylvMXQFFIXNye2QX5gdH51I_Ac" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

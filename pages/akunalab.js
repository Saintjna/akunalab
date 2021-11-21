import Head from 'next/head'
import Layout from '../components/Layout/Layout'

export default function AkunaLab() {
  return (
    <Layout>
      <Head>
        <title>Akuna Lab | Le fab lab</title>
        <meta name="description" content="Akuna Lab le fab-lab au service de l'innovation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl font-bold mt-4">Le fab lab</h1>
    </Layout>
  )
}

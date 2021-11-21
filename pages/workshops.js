import Head from 'next/head'
import Layout from '../components/Layout/Layout'

export default function Workshops() {
  return (
    <Layout>
      <Head>
        <title>Akuna Lab | Workshops</title>
        <meta name="description" content="Akuna Lab le fab-lab au service de l'innovation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl font-bold mt-4">Workshops</h1>
    </Layout>
  )
}

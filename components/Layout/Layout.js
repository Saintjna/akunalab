import Head from 'next/head'
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const Layout = ({ children, pageTitle }) => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white">
      <Head>
        <title>{`Akuna Lab | ${pageTitle}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Akuna Lab, le fab lab de l'Institut National Polytechnique Houphouët Boigny de Yamoussoukro!"/>
        <meta property="og:title" content="Innovons par notre intelligence - Akuna Lab"/>
        <meta property="og:description" content="Drones, Impression 3D, Photographie, nous disposons de tout pour révolutionner notre environnement."/>
        <meta property="og:url" content="https://akunalab.netlify.app"/>
        <meta property="og:type" content="website"/>
      </Head>
      <Navbar />
      <div className="flex flex-col justify-between w-full sm:max-w-5xl mx-auto mb-4 min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
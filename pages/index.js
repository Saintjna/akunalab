import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import Box from '../components/Box/Box'
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import printingImg from '../public/3d-printing.png'
import droneImg from '../public/drone.png'
import laserImg from '../public/laser.png'
import scienceImg from '../public/science (2).png'
import aboutImg from '../public/about-image.jpg'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Akuna Lab</title>
        <meta name="description" content="Akuna Lab le fab-lab au service de l'innovation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero img={scienceImg} img_alt="a light bulb as science">
        <h1 className="text-8xl sm:text-9xl font-bold font-mono">Akuna Lab</h1>
        <p className="text-xl text-red-600 font-bold">Le fab-lab au service de {`l'innovation`}.</p>
        <Button link="akunalab">En savoir plus</Button>
      </Hero>
      <Box>
        <div className="flex flex-col gap-4 w-full h-96 px-2 py-3">
          <h1 className="text-4xl sm:text-4xl font-bold font-mono">Vous avez dit {`"fab lab"`}?</h1>
          <p className="leading-8">
          {`"Fab Lab"`} est {`l'abréviation`} de Fabrication Laboratory. Il {`s'agit`} {`d'un`} environnement de développement et de conception de solution dans les domaines des technologies en général. Il a pour objectif de donner aux étudiants et passionés de technologie de mettre en oeuvre leurs projets avec des équipements de pointe et un accompagnement personnalisé.
          </p>
        </div>
        <div className="h-96 w-full relative z-0">
          <Image
            src={aboutImg}
            alt="Picture of soldering"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Box>
      <Box>
        <div className="h-96 w-full relative z-0">
          <Image
            src={aboutImg}
            alt="Picture of soldering"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-4 w-full h-96 px-2 py-3 items-end">
          <h1 className="text-4xl sm:text-4xl font-bold font-mono">Akuna Lab</h1>
          <p className="leading-8 text-right">
          Akuna signifie {`"réflexion"`} en langue Akyé. Akuna Lab est la branche de conception de {`l'initiative`} Akuna Innov qui se veut être {`l'intelligence`} au service de {`l'innovation`}.
          </p>
          <Button link="akunalab">En apprendre plus sur Akuna</Button>
        </div>
      </Box>
    </Layout>
  )
}

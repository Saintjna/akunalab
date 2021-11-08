import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import Box from '../components/Box/Box'
import Button from '../components/Button/Button'
import Card from '../components/Card/Card'
import printingImg from '../public/3d-printing.png'
import droneImg from '../public/drone.png'
import laserImg from '../public/laser.png'
import scienceImg from '../public/science (2).png'

const Equipements = () => {
  return (
    <Box bg="bg-red-400">
      <h1 className="text-3xl font-bold font-mono">Nos équipements</h1>
      <Box bg="bg-red-400" direction="flex-row">
      <Card 
        title="Impression 3d"
        text="Imprimez vos propres modèles 3d pour tous vos projets."
        img={printingImg}
        img_alt="3d printing machine"
      >
        <Button>Voir plus</Button>
        <div className="text-xs text-gray-500">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Card>
      <Card 
        title="Drones"
        text="Prenez de la hauteur avec nos drones !"
        img={droneImg}
        img_alt="a drone"
      >
        <Button>Voir plus</Button>
        <div className="text-xs text-gray-500">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Card>
      <Card 
        title="Découpe laser"
        text="Percez le métal avec nos découpes laser !"
        img={laserImg}
        img_alt="a laser cutting metal"
      >
        <Button>Voir plus</Button>
        <div className="text-xs text-gray-500">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Card>
      </Box>
    </Box>
  )
}

const Projets = () => {
  return (
    <Box>
      <h1 className="text-3xl font-bold font-mono">Nos projets à Akuna Lab</h1>
    </Box>
  )
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Akuna Lab</title>
        <meta name="description" content="Akuna Lab le fab-lab au service de l'innovation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero img={scienceImg} img_alt="a light bulb as science">
        <h1 className="text-7xl font-bold font-mono">Akuna Lab</h1>
        <p className="text-xl">Le fab-lab au service de {`l'innovation`}.</p>
      </Hero>
      <Box>
        <h1 className="text-3xl font-bold font-mono">Vous avez dit {`"fab lab"`} ?</h1>
        <p>{`"Fab Lab"`} est {`l'abréviation`} de Fabrication Laboratory. Il {`s'agit`} {`d'un`} environnement de développement et de conception de solution dans les domaines des technologies en général. Il a pour objectif de donner aux étudiants et passionés de technologie de mettre en oeuvre leurs projets avec des équipements de pointe et un accompagnement personalisé.</p>
        <Button>En savoir plus sur les Fab Lab</Button>
      </Box>
      <Box bg="bg-red-400" >
        <h1 className="text-3xl font-bold font-mono">Akuna Lab</h1>
        <p>Akuna signifie {`"réflexion"`} en langue Akyé. Akuna Lab est la branche de conception de {`l'initiative`} Akuna Innov qui se veut être {`l'intelligence`} au service de {`l'innovation`}.</p>
        <Button>En apprendre plus sur Akuna</Button>
      </Box>
      <Projets />
      <Equipements />
    </Layout>
  )
}

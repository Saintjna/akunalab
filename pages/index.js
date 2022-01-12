import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Hero/Hero'
import Box from '../components/Box/Box'
import Button from '../components/Button/Button'
import aboutImg from '../public/about-image.jpg'

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <Hero>
        <h1 className="text-8xl sm:text-9xl font-bold font-mono">Akuna Lab</h1>
        <p className="text-xl text-red-600 font-bold">Le fab-lab au service de {`l'innovation`}.</p>
        <Button link="/akunalab">En savoir plus</Button>
      </Hero>
      <Box colReverse="flex-col-reverse" bg="bg-red-500" shadow="shadow-lg">
        <div className="h-96 w-full relative z-0">
          <Image
            src={aboutImg}
            alt="Picture of soldering"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-4 w-full p-10 items-end">
          <h1 className="text-4xl sm:text-4xl font-bold font-mono">Nos Projets</h1>
          <p className="leading-8 text-right">
          Nous travaillons sur plusieurs projets avec pour objectif {`d'impacter`} et de transformer notre environnement.
          </p>
          <Button link="/projets">Découvrez ce qui se fait à Akuna Lab</Button>
        </div>
      </Box>
      <Box bg="bg-yellow-500" shadow="shadow-lg">
        <div className="flex flex-col gap-4 w-full p-8">
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
      <Box colReverse="flex-col-reverse" bg="bg-red-500" shadow="shadow-lg">
        <div className="h-96 w-full relative z-0">
          <Image
            src={aboutImg}
            alt="Picture of soldering"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-4 w-full p-8 items-end">
          <h1 className="text-4xl sm:text-4xl font-bold font-mono">Akuna Lab</h1>
          <p className="leading-8 text-right">
          Akuna signifie {`"réflexion"`} en langue Akyé. Akuna Lab est la branche de conception de {`l'initiative`} Akuna Innov qui se veut être {`l'intelligence`} au service de {`l'innovation`}.
          </p>
          <Button link="/akunalab">En apprendre plus sur Akuna</Button>
        </div>
      </Box>
      <Box bg="bg-green-500" shadow="shadow-lg">
        <div className="flex flex-col gap-4 w-full p-8">
          <h1 className="text-4xl sm:text-4xl font-bold font-mono">Nos équipements</h1>
          <p className="leading-8">
            Des imprimantes 3d au découpe laser, nous disposons des équipements utilisés {`aujourd'hui`} dans le monde de {`l'innovation`}.
          </p>
          <Button link="/equipements">Découvrez nos équipements</Button>
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
    </Layout>
  )
}
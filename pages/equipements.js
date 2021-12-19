import Card from '../components/Card/Card'
import Layout from '../components/Layout/Layout'

import aboutImg from '../public/about-image.jpg'


export default function Equipements() {
  return (
    <Layout pageTitle="Equipements">
      <h1 className="text-4xl font-bold mt-4 mb-4">Equipements</h1>
      <div className="flex flex-wrap gap-4">
      <Card
        title="Imprimante 3D"
        text="De votre esprit à l'ordinateur, de l'ordinateur à la réalité. Décourvez nos imprimantes 3D."
        img={aboutImg}
      />
      <Card
        title="Imprimante 3D"
        text="De votre esprit à l'ordinateur, de l'ordinateur à la réalité. Décourvez nos imprimantes 3D."
        img={aboutImg}
      />
      <Card
        title="Imprimante 3D"
        text="De votre esprit à l'ordinateur, de l'ordinateur à la réalité. Décourvez nos imprimantes 3D."
        img={aboutImg}
      />
      <Card
        title="Imprimante 3D"
        text="De votre esprit à l'ordinateur, de l'ordinateur à la réalité. Décourvez nos imprimantes 3D."
        img={aboutImg}
      />
      <Card
        title="Imprimante 3D"
        text="De votre esprit à l'ordinateur, de l'ordinateur à la réalité. Décourvez nos imprimantes 3D."
        img={aboutImg}
      />
      <Card
        title="Imprimante 3D"
        text="De votre esprit à l'ordinateur, de l'ordinateur à la réalité. Décourvez nos imprimantes 3D."
        img={aboutImg}
      />
      </div>
    </Layout>
  )
}

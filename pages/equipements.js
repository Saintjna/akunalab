import Card from "../components/Card/Card";
import Layout from "../components/Layout/Layout";

import aboutImg from "../public/about-image.jpg";
import imprimante3d from "../public/imprimante3d.JPG";
import appPhoto from "../public/appPhoto.JPG";
import drone1 from "../public/drone1.JPG";
import robotQuad from "../public/robotQuad.JPG";

export default function Equipements() {
  return (
    <Layout pageTitle="Equipements">
      <h1 className="text-4xl font-bold mt-4 mb-4">Equipements</h1>
      <div className="flex flex-wrap gap-4">
        <Card
          title="Imprimante 3D"
          text="De votre esprit à l'ordinateur, de l'ordinateur à la réalité. Décourvez nos imprimantes 3D."
          img={imprimante3d}
        />
        <Card
          title="Appareil Photo"
          text="Photos, Vidéos haute résolution pour le traitement d'images ou l'intelligence artificielle."
          img={appPhoto}
        />
        <Card
          title="Drone"
          text="Utilisez toute la puissance des drones pour réaliser des projets innovants."
          img={drone1}
        />
        <Card title="Robot" text="Des Robots intelligents." img={robotQuad} />
      </div>
    </Layout>
  );
}

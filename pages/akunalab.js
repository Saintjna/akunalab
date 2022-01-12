import Layout from "../components/Layout/Layout";
import Image from "next/image";
import akunalab from "../public/akunalab.JPG";
import akunalab2 from "../public/akunalab2.JPG";
import akunalab3 from "../public/akunalab3.JPG";
import akunalab4 from "../public/akunalab4.JPG";

export default function AkunaLab() {
  return (
    <Layout pageTitle="Le lab">
      <h1 className="text-4xl font-bold mt-4">Le fab lab</h1>
      <Image src={akunalab} alt="Porte fab-lab" />
      <Image src={akunalab4} alt="Porte fab-lab" />
      <Image src={akunalab2} alt="Porte fab-lab" />
      <Image src={akunalab3} alt="Porte fab-lab" />
    </Layout>
  );
}

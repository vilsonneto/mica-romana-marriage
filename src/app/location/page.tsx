import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Subtitle } from "@/components/Subtitle";

export default function LocationPage() {
  return (
    <>
      <Header underlineLink="/location" />
      <Hero
        image="/img/local2.png"
        objectPosition="12%"
        title="Altos do Vale"
        subtitle="Rua da Unidade 2800, Forqueta.
Caxias do sul - Rio Grande do Sul"
      />
      <div className="pt-12">
        <Subtitle>Como chegar</Subtitle>
      </div>
    </>
  );
}

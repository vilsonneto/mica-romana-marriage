import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Subtitle } from "@/components/Subtitle";

export default function RegistryPage() {
  return (
    <>
      <Header underlineLink="/registry" />
      <Hero
        image="/img/confirmacao.jpg"
        objectPosition="55%"
        title="Confirmação"
      />
      <div className="pt-12">
        <Subtitle>Como chegar</Subtitle>
      </div>
    </>
  );
}

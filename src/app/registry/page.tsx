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
        Leia o QR Code abaixo para nos enviar uma mensagem no WhatsApp e
        confirmar sua presença nesse dia tão especial. ❤️
      </div>
    </>
  );
}

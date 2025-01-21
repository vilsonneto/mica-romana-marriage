import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Subtitle } from "@/components/Subtitle";

export default function DressCodePage() {
  return (
    <>
      <Header underlineLink="/dress-code" />
      <Hero
        image="/img/dress.jpg"
        objectPosition="45% 38%"
        title="Dress Code"
      />
      <div className="pt-12 mb-6">
        <Subtitle>
          Inspirações para o Código de Vestimenta do Nosso Grande Dia
        </Subtitle>
      </div>
      <div className="px-6">
        {/* <p className="text-black md:text-3xl text-2xl md:w-2/3 w-full mb-2 mx-auto font-bold text-center">
          Traje: Esporte Fino
        </p> */}
        <p className="text-black md:text-2xl text-xl md:w-2/3 w-full mb-2 mx-auto text-center">
          Estamos ansiosos para ver nossos amigos e familiares elegantes em
          nosso casamento! O traje escolhido para a ocasião é{" "}
          <span className="font-bold">esporte fino</span>. Para as mulheres,
          sugerimos vestidos midi ou longos que unam leveza e sofisticação. Para
          os homens, calças sociais ou de alfaiataria combinadas com camisas e
          blazers são uma ótima escolha. Mal podemos esperar para eternizar
          momentos especiais ao lado de vocês em trajes tão incríveis!
        </p>
      </div>
    </>
  );
}

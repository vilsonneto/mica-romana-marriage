import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Subtitle } from "@/components/Subtitle";
import Image from "next/image";

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
          Pedimos que os convidados{" "}
          <span className="font-bold">evitem usar roupas na cor preta</span>,
          pois será a cor exclusiva do time de padrinhos e madrinhas.
          Agradecemos a compreensão e estamos animadospara ver o seu look
          especial!
        </p>
        <p className="text-black md:text-2xl text-xl md:w-2/3 w-full mb-2 mx-auto text-center">
          Estamos ansiosos para ver nossos amigos e familiares elegantes em
          nosso casamento! O traje escolhido para a ocasião é{" "}
          <span className="font-bold">esporte fino</span>. Para as mulheres,
          sugerimos vestidos midi ou longos que unam leveza e sofisticação. Para
          os homens, calças sociais ou de alfaiataria combinadas com camisas e
          blazers são uma ótima escolha.
        </p>
        <div className="mt-12 flex flex-wrap justify-around items-center w-2/3 m-auto gap-12">
          <div className="relative">
            <Image
              width={250}
              height={400}
              src="/img/convidados-man1.jpg"
              alt="convidado masculino"
            />
          </div>
          <div className="relative">
            <Image
              width={302}
              height={400}
              src="/img/convidados-w1.jpg"
              alt="convidada feminina"
            />
          </div>
          <div className="relative">
            <Image
              width={296}
              height={400}
              src="/img/convidados-man2.jpg"
              alt="convidado masculino"
            />
          </div>
          <div className="relative">
            <Image
              width={300}
              height={400}
              src="/img/convidados-w2.jpg"
              alt="convidada feminina"
            />
          </div>
        </div>
        ;
      </div>
    </>
  );
}

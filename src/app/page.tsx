import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header underlineLink="/" />
      <Hero
        image="/img/main-photo.jpg"
        objectPosition="40%"
        title="Micael & Romana"
        subtitle="Abril 19, 2024 - Caxias do Sul, RS"
      />
      <section className="mt-10 md:flex-row flex md:justify-center md:items-start gap-0 md:w-1/2 m-auto flex-col items-center w-full">
        <div className="flex py-6 flex-col justify-end items-center md:w-1/2 w-2/3">
          <Image alt="Character" src="/img/mica.JPG" height={478} width={240} />
          <h3 className="text-lemon-dark text-center text-4xl mt-6 mb-8 uppercase">
            Micael
          </h3>
          <p className="text-black md:text-2xl text-xl md:w-2/3 w-full text-center">
            Nascido e criado em Caxias do Sul, Micael é um homem apaixonado por
            Jesus e pela vida, vivendo com intensidade e propósito. Extremamente
            divertido e carismático, ele é um sanguíneo nato, o verdadeiro
            golden retriever das amizades. Suas paixões incluem cantar, dançar,
            viajar e ministrar momentos de adoração. Micael sempre faz questão
            de que todos ao seu redor se sintam amados e respeitados,
            especialmente a Romana, com quem sonha em viver de forma intensa o
            plano de Deus para eles.
          </p>
        </div>
        <div className="flex py-6 flex-col justify-end items-center md:w-1/2 w-2/3">
          <Image
            alt="Character"
            src="/img/romana.jpg"
            height={478}
            width={240}
          />
          <h3 className="text-lemon-dark text-center text-4xl mt-6 mb-8 uppercase">
            Romana
          </h3>
          <p className="text-black md:text-2xl text-xl md:w-2/3 w-full text-center">
            Nascida e criada por 13 anos em Veranópolis, Romana se mudou para
            Caxias devido ao trabalho de seu pai. Sonhadora, ela nunca está
            completamente satisfeita com o que vive e acredita que pode
            conquistar algo novo a cada dia. Para isso, às vezes precisa dar uma
            choradinha antes, uma verdadeira melancólica. Romana é dedicada e
            está sempre disposta a aprender coisas novas. Descobriu que seu
            maior valor está em Cristo e que nEle encontra tudo o que precisa
            para ser feliz.
          </p>
        </div>
      </section>
      <section className="relative w-full h-screen mt-6 mb-6">
        <Image
          src="/img/section.jpg"
          alt="alt"
          fill={true}
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </section>

      <section className="lg:grid lg:grid-cols-2  lg:grid-rows-[auto, auto] gap-6 flex flex-col w-3/4 m-auto pt-6">
        <div className="">
          <h2 className="text-lemon-dark text-center text-4xl uppercase">
            Nossa história
          </h2>
        </div>
        <div className="lg:block hidden"></div>
        <div className="">
          <p className="text-black md:text-xl text-2xl text-center mb-6 md:mb-3">
            Micael e Romana se conheceram na igreja Verbo da Vida, em Caxias do
            Sul. À primeira vista, Romana achava que Micael era entojado,
            enquanto ele pensava que ela era quieta. Mal sabiam eles que, na
            verdade, eram igualmente doidos e estavam prestes a descobrir isso
            juntos.
          </p>
          <p className="text-black md:text-xl text-2xl text-center mb-6 md:mb-3">
            Romana havia decidido que não queria sentir nada por ninguém, mas
            algo mudava quando olhava para Micael. Era um sentimento que, até
            hoje, ela não consegue explicar — ainda mais depois de descobrir que
            ele sentia o mesmo por ela.
          </p>
          <p className="text-black md:text-xl text-2xl text-center mb-6 md:mb-3">
            Após três meses de observação e muita oração, Deus encontrou um
            jeito curioso de aproximá-los. Durante uma janta entre amigos,
            Micael acabou ficando com um refratário da mãe de Romana. Esse
            simples recipiente virou o “pretexto perfeito” para puxar assunto,
            e, a partir dali, as primeiras conversas começaram a acontecer.
          </p>
          <p className="text-black md:text-xl text-2xl text-center mb-6 md:mb-3">
            Ainda como amigos, começaram a compartilhar sonhos, valores e
            projetos futuros. Foi nesse processo que perceberam estar caminhando
            na mesma direção e decidiram trilhar esse caminho juntos.
          </p>
          <p className="text-black md:text-xl text-2xl text-center mb-6 md:mb-3">
            Apaixonados, começaram a planejar o casamento antes mesmo de ficarem
            noivos, acreditando firmemente que Deus, que ama o casamento,
            estaria com eles em cada passo. Desde então, têm vivido experiências
            incríveis da graça de Deus, vendo Seu cuidado em cada detalhe e
            sendo testemunhas de verdadeiros milagres.
          </p>
          <p className="text-black md:text-xl text-2xl text-center mb-6 md:mb-3">
            Essa é apenas uma pequena amostra da linda jornada que começaram
            juntos — e do muito que ainda está por vir!
          </p>
        </div>
        <div className="xl:w-2/3 lg:w-full lg:h-full md:w-[250px] md:h-[250px] w-[200px] h-[200px] relative m-auto">
          <Image
            src="/img/char.jpg"
            alt="alt"
            fill={true}
            className="object-cover md:object-bottom bject-bottom "
            // style={{ objectFit: "cover", objectPosition: "55% 10%" }}
          />
        </div>
      </section>
    </>
  );
}

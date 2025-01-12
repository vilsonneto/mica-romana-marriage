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
      <div className="pt-12 mb-6">
        <Subtitle>Como chegar</Subtitle>
      </div>
      <p className="text-black md:text-2xl text-xl md:w-2/3 w-full text-center mb-2 mx-auto">
        Escolhemos o Altos do Vale para celebrar o nosso casamento, um lugar que
        tem um significado muito especial para nós. Com sua vista incrível e o
        ambiente acolhedor, esse local reflete perfeitamente a energia do nosso
        amor e a felicidade desse dia tão esperado.
      </p>
      <p className="text-black md:text-2xl text-xl md:w-2/3 w-full text-center mb-2 mx-auto">
        Queremos que todos se sintam parte dessa celebração mágica, rodeados
        pela natureza e por um cenário único que vai tornar este momento ainda
        mais inesquecível.
      </p>
      <p className="text-black md:text-2xl text-xl md:w-2/3 w-full text-center mb-6 mx-auto">
        Abaixo, você pode acessar o mapa para facilitar o caminho até o local.
        Estamos ansiosos para compartilhar esse dia maravilhoso com você!
      </p>
      <div className="flex py-6 flex-col justify-end items-center w-full">
        <iframe
          id="map-canvas"
          className="map_part"
          width="300"
          height="300"
          src="https://maps.google.com/maps?width=100%&height=100%&hl=pt-BR&q=Altos%20do%20Vale%20-%20Casa%20de%20Eventos%20Caxias%20do%20Sul,%20Estado%20do%20Rio%20Grande%20do%20Sul,%20Brasil&t=&z=18&ie=UTF8&iwloc=B&output=embed"
          title="Google Maps Embed"
        >
          Desenvolvido por{" "}
          <a
            href="https://www.googlemapsgenerator.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Maps Embed
          </a>{" "}
          e{" "}
          <a
            href="https://xn--mikroln-jxa.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mikrolån
          </a>
        </iframe>
      </div>
    </>
  );
}

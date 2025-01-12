import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Subtitle } from "@/components/Subtitle";
import Image from "next/image";

export default function RegistryPage() {
  return (
    <>
      <Header underlineLink="/registry" />
      <Hero
        image="/img/confirmacao.jpg"
        objectPosition="55%"
        title="Confirmação"
      />
      <section className="mt-10 flex gap-0 m-auto flex-col items-center w-full">
        <div className="flex py-6 flex-col justify-end items-center md:w-3/4 w-2/3">
          <p className="text-black md:text-2xl text-xl md:w-2/3 w-full text-center mb-6">
            Leia o QR Code abaixo e nos envie uma mensagem para confirmar sua
            presença nesse dia tão especial.
          </p>
          <div className="border-black border-solid border-[1px] border-opacity-25 rounded-sm">
            <Image
              alt="Character"
              src="/img/qrcode.png"
              height={478}
              width={240}
            />
          </div>
          <p className="text-black md:text-2xl text-xl md:w-2/3 w-full text-center mt-6">
            Você também pode confirmar sua presença{" "}
            <a
              href="https://w.app/gjo3Rn"
              target="_blank"
              className="font-bold underline"
            >
              clicando aqui
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

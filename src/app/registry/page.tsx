"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Subtitle } from "@/components/Subtitle";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import QRCode from "react-qr-code";

export default function RegistryPage() {
  const [convidado, setConvidado] = useState("");
  const [linkGerado, setLinkGerado] = useState("");

  const gerarQRCode = () => {
    setLinkGerado(
      `https://wa.me/555493213572?text=Ol%C3%A1%2C%20Micael%20e%20Romana%21%20%F0%9F%A5%B0%F0%9F%92%8D%0A%0AEstou%20confirmando%20a%20presen%C3%A7a%20de%20${convidado}%20no%20casamento%20de%20voc%C3%AAs%21%20Mal%20posso%20esperar%20para%20celebrar%20esse%20dia%20t%C3%A3o%20especial%20ao%20lado%C2%A0de%C2%A0voc%C3%AAs.%C2%A0%F0%9F%8E%89%E2%9C%A8`
    );
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConvidado(event.target.value);
  };

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
          {!!linkGerado ? (
            <>
              <p className="text-black md:text-2xl text-xl md:w-2/3 w-full text-center mb-6">
                Leia o QR Code abaixo e nos envie uma mensagem para confirmar a
                presença de <span className="font-bold">{convidado}</span> nesse
                dia tão especial.
              </p>
              <div className="border-black border-solid border-[1px] border-opacity-25 rounded-sm p-3">
                <QRCode value={linkGerado} />
              </div>
              <p className="text-black md:text-2xl text-xl md:w-2/3 w-full text-center mt-6">
                Você também pode confirmar sua presença{" "}
                <a
                  href={linkGerado}
                  target="_blank"
                  className="font-bold underline"
                >
                  clicando aqui
                </a>
                .
              </p>
            </>
          ) : (
            <>
              <p className="text-black md:text-2xl text-xl md:w-2/3 w-full text-center mb-6">
                Escreva no campo abaixo o nome que está no seu convite e clique
                no botão para gerar a sua confirmação de presença.
              </p>
              <div className="flex flex gap-4 w-full max-w-md min-w-[300px]">
                <div className="relative md:w-2/3 w-full">
                  <input
                    style={{ touchAction: "none" }}
                    onChange={handleChange}
                    className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:border-slate-500 shadow-sm focus:shadow-md focus:static absolute z-10"
                  />
                  <label
                    className={`
                    ${
                      convidado
                        ? "-top-2 left-2.5 text-xs text-slate-400 scale-90 z-10"
                        : "left-2.5 top-2.5"
                    }
                      absolute cursor-text bg-white px-2 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90 peer-focus:z-10 z-0`}
                  >
                    Nome do convite
                  </label>
                </div>
                <div className=" w-auto">
                  <button
                    className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    disabled={!convidado}
                    onClick={gerarQRCode}
                  >
                    Confirme
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

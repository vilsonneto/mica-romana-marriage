import Image from "next/image";
import { Digitador } from "../components/Digitador/index";

export default function Home() {
  return (
    <>
      <header className="w-screen max-w-6xl flex flex-col items-center">
        <svg
          width="320"
          height="80"
          viewBox="0 0 200 25"
          fill="#000"
          aria-hidden="true"
        >
          <text
            x="0"
            y="20"
            font-family="Times New Roman, serif"
            font-size="22"
            font-weight="bold"
          >
            The New Life Times
          </text>
        </svg>
        <div className="w-full max-w-6xl h-1 mb-4 border-double border-b-4 border-black"></div>
      </header>
      <main className="w-full h-[91vh] bg-notice bg-auto bg-no-repeat bg-center bg-cover flex justify-center items-center">
        <Digitador text="Gerando boas novas..." />
      </main>
    </>
  );
}

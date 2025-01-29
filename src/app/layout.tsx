import type { Metadata } from "next";
import "./globals.css";
import { AudioProvider } from "@/providers/AudioProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mica & Romana",
  description:
    "Essa é apenas uma pequena amostra da linda jornada que começaram juntos — e do muito que ainda está por vir!",
  openGraph: {
    title: "Mica & Romana",
    description:
      "Essa é apenas uma pequena amostra da linda jornada que começaram juntos — e do muito que ainda está por vir!",
    url: "https://micaeromana.vercel.app", // Altere para o URL do seu site
    siteName: "Mica & Romana",
    images: [
      {
        url: "/img/meta.jpg", // Adicione uma imagem relevante para o Open Graph
        width: 1200,
        height: 630,
        alt: "Imagem de Mica & Romana",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Exibe uma imagem grande no Twitter
    title: "Mica & Romana",
    description:
      "Essa é apenas uma pequena amostra da linda jornada que começaram juntos — e do muito que ainda está por vir!",
    images: "/img/meta.jpg", // Adicione uma imagem relevante para o Twitter
  },
  robots: {
    index: true, // Permite que o site seja indexado
    follow: true, // Permite que links sejam seguidos pelos crawlers
  },
  icons: {
    icon: "/favicon.ico", // Favicon
    apple: "/img/aliancas.png", // Ícone para dispositivos Apple
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex justify-center flex-col font-minerva`}>
        <AudioProvider>
          <div>{children}</div>
          <footer className="w-full h-[15vh] mt-16 bg-lemon"></footer>
        </AudioProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mica & Romana",
  description: "Está sendo gerado algo incrível, novas notícias em breve!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex justify-center flex-col font-minerva`}>
        <div>{children}</div>
        <footer className="w-full h-[15vh] mt-16 bg-lemon"></footer>
      </body>
    </html>
  );
}

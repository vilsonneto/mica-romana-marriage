import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

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
      <body className={`flex justify-center flex-col`}>
        <div>{children}</div>
      </body>
    </html>
  );
}

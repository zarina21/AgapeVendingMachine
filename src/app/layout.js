import "../styles/globals.scss";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "700"], // Puedes incluir más estilos si es necesario
});

export const metadata = {
  title: "Agape Vending Machine",
  description: "The new generation of vending machines in california.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={kanit.className}>
      <body className="has-background-white layout">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

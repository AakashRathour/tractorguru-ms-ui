import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/Header";
import menuData from "../utilities/data/menuData.json";
import footerJsonData from "../utilities/data/footerData.json";
import Footer from "../components/layout/footer";

export const metadata: Metadata = {
  title: "Tractor Guru",
  description: "Tractor Guru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Header menuData={menuData}/>
        {children}
        <Footer footerData={footerJsonData} />
      </body>
    </html>
  );
}

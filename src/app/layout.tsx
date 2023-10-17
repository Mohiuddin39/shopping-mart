import Header from "@/components/Header";
import "./css/globals.css";
import type { Metadata } from "next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mohiuddin Shopping Mart",
  description: "Shopping mart is here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-bodyFont w-full bg-main-bg text-darkText">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

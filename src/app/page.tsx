import Banner from "@/components/Banner";
import "../app/css/globals.css";
import Products from "@/components/Products";

export default async function Home() {
  return (
    <>
      <Banner />
      <Products />
    </>
  );
}

import Image from "next/image";
import Hero from "./components/Hero";
import ProductLayout from "./components/ProductLayout";

export default function Shop() {
  return (
    <main className='w-full  '>
      <Hero />
      <ProductLayout />
    </main>
  );
}

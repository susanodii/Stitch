import { Button } from "@/components/ui/button";
import React from "react";

const ProductExplore = () => {
  return (
    <main className='bg-white mt-[2rem] py-[1rem] mb-[2rem] overflow-auto md:py-[4rem] md:mt-[4rem] md:mb-[4rem] flex flex-col items-center justify-center gap-2'>
      <h2 className=' w-full text-center text-3xl font-sans md:text-[48px] md:leading-[60px] font-medium text-primary self-center'>
        Ready to discover fashion that fits you?
      </h2>
      <p className='w-full font-secondaryNormal font-normal text-[16px] leading-[24px] text-center md:w-1/3'>
        Start exploring our collections or create your custom look today.
        Welcome to the future of fashion!!
      </p>

      <Button className=' mt-6 bg-primary text-accent rounded-3xl border-primary border font-secondaryExraBold font-semibold leading-[24px]'>
        Explore Products
      </Button>
    </main>
  );
};

export default ProductExplore;

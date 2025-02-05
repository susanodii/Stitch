import React from "react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

const Popular = () => {
  return (
    <main className='mt-[4rem] '>
      <section className='w-full flex justify-between  items-center'>
        <p className='font-playfair font-medium leading-[16px] text-[20px]'>
          {" "}
          Popular Designs{" "}
        </p>
        <Button className='bg-accent text-primary rounded-3xl font-secondaryExraBold font-light leading-[19.2px] text-[16px]'>
          View All
        </Button>
      </section>

      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-[2rem]'>
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className='relative border border-gray-300 rounded-lg overflow-hidden'
            >
              <Image
                className='w-full h-auto'
                width={400}
                height={382}
                alt='logo-stitch'
                src={"/assets/images/pupolar-designs-img.png"}
              />

              {/* Product Details */}
              <div className='p-4 mt-2'>
                <h3 className='text-sm text-gray-500'>Crepe</h3>
                <h2 className='text-lg font-semibold text-gray-800'>
                  Patterned Crepe Long Dress
                </h2>
                <p className='text-gray-600 mt-1'>₦26,000</p>
              </div>
            </div>
          ))}
      </section>
      {/* <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-[2rem]'>
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className='relative border border-gray-300 rounded-lg overflow-hidden'
            >
              <Image
                className='w-full h-auto'
                width={400}
                height={382}
                alt='logo-stitch'
                src={"/assets/images/pupolar-designs-img.png"}
              />

              
              <div className='p-4 mt-2'>
                <h3 className='text-sm text-gray-500'>Crepe</h3>
                <h2 className='text-lg font-semibold text-gray-800'>
                  Patterned Crepe Long Dress
                </h2>
                <p className='text-gray-600 mt-1'>₦26,000</p>
              </div>
            </div>
          ))}
      </section> */}
    </main>
  );
};

export default Popular;

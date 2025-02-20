import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const OurService = () => {
  const OurServiceDetails = [
    {
      image: "/assets/images/shop-icon.png",

      header: "Shop for trendy wears",

      details: " Get unique outfit for any occasion from our top rated",
    },

    {
      image: "/assets/images/mesurement-icon.png",

      header: "  Request for Size recommendation",

      details: " Get the perfect fit using our AI size recommendation tool",
    },

    {
      image: "/assets/images/delivary-icon.png",

      header: "Sell your wears",

      details: "   Register your store to reach a wide range of customers",
    },

    {
      image: "/assets/images/van.png",

      header: " Get your wears delivered to you",

      details: " Get the perfect fit using our AI size recommendation tool",
    },
  ];

  const firstSection = OurServiceDetails.slice(0, 2);
  const secondSection = OurServiceDetails.slice(2);
  return (
    <main className='mt-[3rem] md:mt-[6rem]  w-full'>
      <section className='flex flex-col items-center'>
        <h2 className='text-3xl font-sans md:text-[48px]  md:leading-[60px] font-medium text-black'>
          We Provide Valuable Service At All Time
        </h2>

        <p className='w-full mt-[1rem] leading-5 font-secondaryNormal md:leading-[20px] md:w-[42%] text-sm text-center  md:text-lg'>
          Effortlessly browse and shop ready-to-wear collections from top
          designers or take control of your style by working directly with
          designers to create bespoke, custom-tailored pieces.
        </p>
      </section>

      <section className='mt-[2rem] md:mt-[5rem]'>
        <Card className='w-full py-[1rem] flex flex-col justify-center items-center md:py-[4rem] gap-2 md:gap-6'>
          <div className='flex flex-col gap-2 md:gap-[3rem] md:flex-row'>
            {firstSection.map((data, index) => (
              <div className='flex flex-col md:flex-row gap-6 '>
                <div className='hidden md:block'>
                  <Image width={91} height={90} alt='shop' src={data.image} />
                </div>

                <div className='p-2 m-auto flex flex-col items-center md:items-start md:p-0'>
                  <p className='font-sans font-semibold md:text-[25px] leading-[44.48px]'>
                    {data.header}
                  </p>
                  <p className='text-center md:text-start font-secondaryNormal font-normal text-[16px] leading-[28.46px] md:w-[70%]'>
                    {data.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className='hidden md:block'>
            <Image
              width={960}
              height={2}
              alt='shop'
              src={"/assets/images/line 4.png"}
              className='bg-gray'
            />
          </div>

          <div className='flex flex-col gap-2 md:gap-[3rem] md:flex-row'>
            {secondSection.map((data, index) => (
              <div className='flex justify-center   '>
                <div className='flex flex-col md:flex-row gap-6'>
                  <div className='hidden md:block'>
                    <Image width={91} height={90} alt='shop' src={data.image} />
                  </div>

                  <div className='p-2 m-auto flex flex-col items-center md:items-start md:p-0'>
                    <p className='font-sans font-semibold md:text-[25px] leading-[44.48px]'>
                      {data.header}
                    </p>
                    <p className='text-center md:text-start font-secondaryNormal font-normal text-[16px] leading-[28.46px] md:w-[70%]'>
                      {data.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
};

export default OurService;

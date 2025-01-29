import React from "react";
import Image from "next/image";

const OurDiffernce = () => {
  const ourDiffenceDetails = [
    {
      image: "/assets/images/proffessionalTialor-img.png",
      uniqueDiffereence: " Professional tailor",
      details: " AI size fit & Recommendation",
    },

    {
      image: "/assets/images/Ai-img.png",
      uniqueDiffereence: " Professional tailor",
      details: "   Our tailors are experienced, and reliable",
    },

    {
      image: "/assets/images/modernDesign-img.png",
      uniqueDiffereence: "  Modern Designs",
      details: "Our designers keep with trends",
    },
  ];

  return (
    <main className='mt-[6rem] justify-center m-auto flex flex-col  items-center gap-[5rem]'>
      <h2 className='font-playfair text-center font-extrabold leading-[61.45px] text-[48px] '>
        What Makes Us Different
      </h2>
      <section className='grid justify-items-center m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full'>
        {ourDiffenceDetails.map((data, index) => (
          <div className='flex flex-col gap-3 '>
            <div className='bg-lightGray p-6 rounded-b-full rounded-t-full rounded-l-full w-[221.49px] h-[285.04px] '>
              <Image
                width={166}
                height={179}
                alt='logo-sticth'
                src={data.image}
              />
            </div>
            <div>
              <p className='font-semibold  leading-[24.38px] text-[20px] font-playfair'>
                {data.uniqueDiffereence}
              </p>
              <p className='font-secondaryNormal font-normal'>{data.details}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default OurDiffernce;

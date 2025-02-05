import React from "react";
import Image from "next/image";

const WhatClientSay = () => {
  const details = [
    {
      image: "/assets/images/Female.png",
      name: "Linda Eze",
      occupation: "Entrepreneur",
      review: "Thanks to Stitch, I got my desired wears from a nearby Tailor",
      bg: "#8B9467",
      text: "#FFFFFF",
      icon: "/assets/images/client-say-qtn.png",
    },
    {
      image: "/assets/images/Female.png",
      name: "Linda Eze",
      occupation: "Entrepreneur",
      review: "Thanks to Stitch, I got my desired wears from a nearby Tailor",
      text: "black",
      bg: "#FFFFFF",
      icon: "/assets/images/client-say-qtn.png",
    },
    {
      image: "/assets/images/Female.png",
      name: "Linda Eze",
      occupation: "Entrepreneur",
      review: "Thanks to Stitch, I got my desired wears from a nearby Tailor",
      bg: "#8B9467",
      text: "#FFFFFF",
      icon: "/assets/images/client-say-qtn.png",
    },
  ];

  return (
    <main className='mt-[6rem] px-4 sm:px-8'>
      <h2 className='text-center font-extrabold leading-[61.45px] text-[48px] sm:text-[36px] font-playfair'>
        What Our Clients Say
      </h2>

      <section className='mt-[2rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center place-items-center '>
        {details.map((data, index) => (
          <div
            key={index}
            className='border border-gray-300 rounded-tl-3xl rounded-br-3xl w-full sm:w-80 p-4 overflow-hidden shadow-lg'
            style={{ backgroundColor: data.bg }}
          >
            {/* User Info */}
            <div className='flex items-center gap-4'>
              <div className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full overflow-hidden'>
                <Image
                  width={100}
                  height={100}
                  alt='client-profile'
                  src={data.image}
                  className='w-full h-full object-cover'
                />
              </div>

              <div>
                <h4
                  className='font-extrabold font-playfair text-[20px] sm:text-[24px] leading-[30.73px]'
                  style={{ color: data.text }}
                >
                  {data.name}
                </h4>
                <p
                  className='font-secondaryBold font-medium leading-[30.73px] text-[16px] sm:text-[20px]'
                  style={{ color: data.text }}
                >
                  {data.occupation}
                </p>
              </div>
            </div>

            {/* Review Text */}
            <p
              className='mt-4 font-secondaryBold font-medium leading-[30px] text-[16px] sm:text-[20px]'
              style={{ color: data.text }}
            >
              {data.review}
            </p>

            {/* Quote Icon */}
            <div className='flex justify-end'>
              <Image width={40} height={40} alt='quote-icon' src={data.icon} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default WhatClientSay;

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Hero = () => {
  return (
    <main className='flex flex-col-reverse sm:flex-row justify-between items-center mb-16 px-4 sm:px-8 lg:px-16 xl:px-24'>
      {/* Left Content */}
      <div className='flex flex-col gap-4 w-full sm:w-[60%] lg:w-[50%] mt-12 sm:mt-0'>
        <p className='text-[20px] leading-8 sm:text-[32px] sm:leading-[48px] lg:text-[36px] lg:leading-[50px] font-medium font-playfair text-center sm:text-left'>
          Discover <span className='text-primary'>Fashion</span> That Fits You
          <br />
          Shop Ready-to-Wear or Customize Your Look
        </p>
        <p className='text-[14px] leading-5 sm:text-[18px] sm:leading-[28px] lg:text-[20px] lg:leading-[32px] font-normal font-secondaryNormal text-darkGray text-center sm:text-left'>
          From the latest trends to bespoke creations, find your perfect fit
          with top designers.
        </p>

        <div className='flex flex-wrap gap-4 justify-center sm:justify-start'>
          <Button className='bg-primary text-accent rounded-3xl border-primary border font-secondaryExraBold font-semibold leading-[24px] hover:text-primary'>
            Discover designers
          </Button>
          <Button className='bg-accent text-primary rounded-3xl font-secondaryExraBold font-semibold leading-[24px]'>
            Create Store
          </Button>
        </div>
      </div>

      {/* Right Content */}
      <div className='w-full sm:w-[40%] lg:w-[50%] flex justify-center sm:justify-end mt-8 sm:mt-0'>
        <Image
          width={490}
          height={386}
          alt='hero-image'
          src='/assets/images/hero-img.png'
          className='w-full max-w-[400px] sm:max-w-[490px] h-auto'
        />
      </div>
    </main>
  );
};

export default Hero;

// import React from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export const Hero = () => {
//   return (
//     <main className='flex flex-col-reverse sm:flex-row justify-between mb-[4rem] px-4 sm:px-8 '>
//       <div className='flex flex-col gap-4 w-full sm:w-[609px]  mt-[3rem] '>
//         <p className='leading-10 text-[20px] sm:leading-[50px] sm:text-[36px] font-medium font-playfair '>
//           Discover <span className='text-primary'>Fashion </span> That Fits You
//           Shop Ready-to-Wear or Customize Your Look
//         </p>
//         <p className='font-secondaryNormal leading-5 text-[14px] sm:leading-[29px] sm:text-[24px] font-normal text-darkGray '>
//           From the latest trends to bespoke creations, find your perfect fit
//           with top designers.
//         </p>

//         <div className='flex flex-wrap gap-4 sm:gap-8'>
//           {" "}
//           <Button className=' bg-primary text-accent rounded-3xl border-primary border font-secondaryExraBold font-semibold leading-[24px] hover:text-primary'>
//             Discover designers
//           </Button>
//           <Button className='bg-accent text-primary rounded-3xl font-secondaryExraBold font-semibold leading-[24px]'>
//             Create Store
//           </Button>
//         </div>
//       </div>
//       <div className=' w-full sm:w-auto mt-[4rem] sm:mt-0"'>
//         {" "}
//         <Image
//           width={490}
//           height={386}
//           alt='logo-sticth'
//           src={"/assets/images/hero-img.png"}
//         />
//       </div>
//     </main>
//   );
// };

// export default Hero;

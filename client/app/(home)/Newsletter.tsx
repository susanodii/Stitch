import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Newsletter = () => {
  return (
    <div className='mt-[6rem] flex flex-col items-center justify-center  sm:flex-row sm:justify-around sm:items-start'>
      <p className='font-medium font-playfair text-[28px] leading-[36px]'>
        Sign up for our Newsletter
      </p>
      <div className='w-full mt-[1rem] flex sm:w-1/2 sm:mt-0 '>
        <Input
          type='email'
          className='rounded-l-3xl  h-[56px] rounded-none'
          placeholder='Type your email here....'
        />

        <Button className='bg-accent text-primary rounded-r-3xl h-[56px] font-secondaryExraBold font-semibold leading-[24px]'>
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import React from "react";

// const Newsletter = () => {
//   return (
//     <div className="mt-[6rem] flex flex-col md:flex-row items-center justify-center text-center md:text-left px-4">
//       {/* Text */}
//       <p className="font-medium font-playfair text-[24px] md:text-[28px] leading-[36px] mb-4 md:mb-0">
//         Sign up for our Newsletter
//       </p>

//       {/* Input & Button */}
//       <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center md:items-stretch gap-2 md:gap-0">
//         <Input
//           type="email"
//           className="rounded-3xl md:rounded-l-3xl md:rounded-none h-[50px] md:h-[56px] w-full md:w-auto px-4"
//           placeholder="Type your email here...."
//         />

//         <Button className="bg-accent text-primary rounded-3xl md:rounded-r-3xl md:rounded-none h-[50px] md:h-[56px] font-secondaryExraBold font-semibold w-full md:w-auto px-6">
//           Subscribe
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Newsletter;

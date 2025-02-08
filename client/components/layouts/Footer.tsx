// import { footerLinks } from "@/lib/constants";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { BsTwitterX } from "react-icons/bs";
// import { IoLogoLinkedin } from "react-icons/io";
// import { PiInstagramLogoFill } from "react-icons/pi";
// import { RiFacebookFill } from "react-icons/ri";

// function Footer() {
//   return (
//     <footer className='w-full h-[20rem] bg-accent flex justify-center mt-[4rem]'>
//       <section className='max-w-[1440px] w-full flex justify-between items-center'>
//         <div className='flex flex-col gap-4'>
//           <Image
//             width={140}
//             height={140}
//             alt='logo-sticth'
//             src={"/assets/images/stitch-logo.svg"}
//           />
//           <p>info@stitch.com</p>
//           <p>+234 70 233 2343</p>
//           <div className='flex items-center gap-4'>
//             <BsTwitterX size={24} />
//             <IoLogoLinkedin size={24} />
//             <RiFacebookFill size={24} />

//             <PiInstagramLogoFill size={24} />
//           </div>
//         </div>
//         <div className='flex flex-col gap-2 '>
//           <h2 className='text-xl font-bold'>Shop</h2>
//           <div className='flex flex-col gap-2 '>
//             {footerLinks["Shop"].map((link, index) => (
//               <Link key={index} href={link?.url}>
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//         <div className='flex flex-col gap-2 '>
//           <h2 className='text-xl font-bold'>About Us</h2>
//           <div className='flex flex-col gap-2 '>
//             {footerLinks["About Us"].map((link, index) => (
//               <Link key={index} href={link?.url}>
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//         <div className='flex flex-col gap-2 '>
//           <h2 className='text-xl font-bold'>Help</h2>
//           <div className='flex flex-col gap-2 '>
//             {footerLinks["Help"].map((link, index) => (
//               <Link key={index} href={link?.url}>
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//         <div className='flex flex-col gap-2 '>
//           <h2 className='text-xl font-bold'>Support</h2>
//           <div className='flex flex-col gap-2 '>
//             {footerLinks["Support"].map((link, index) => (
//               <Link key={index} href={link?.url}>
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </footer>
//   );
// }

// export default Footer;

import { footerLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { RiFacebookFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className='w-full bg-accent flex justify-center mt-16 py-10 px-6'>
      <section className='max-w-[1440px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center md:text-left'>
        {/* Logo & Contact Section */}
        <div className='flex flex-col items-center md:items-start gap-4'>
          <Image
            width={140}
            height={140}
            alt='logo-stitch'
            src={"/assets/images/stitch-logo.svg"}
          />
          <p className='text-sm'>info@stitch.com</p>
          <p className='text-sm'>+234 70 233 2343</p>
          <div className='flex items-center gap-4'>
            <BsTwitterX size={24} />
            <IoLogoLinkedin size={24} />
            <RiFacebookFill size={24} />
            <PiInstagramLogoFill size={24} />
          </div>
        </div>

        {/* Footer Links Sections */}
        {["Shop", "About Us", "Help", "Support"].map((category) => (
          <div key={category} className='flex flex-col gap-2'>
            <h2 className='text-lg font-semibold'>{category}</h2>
            <div className='flex flex-col gap-2 text-sm'>
              {footerLinks[category].map((link, index) => (
                <Link key={index} href={link.url} className='hover:underline'>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </footer>
  );
}

export default Footer;

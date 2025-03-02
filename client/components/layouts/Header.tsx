"use client";

import { headerLinks } from "@/lib/constants";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "../ui/button";
import { useMediaQuery } from "@/hooks/use-mediaQuery";
import { MdOutlineMenu } from "react-icons/md";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function Header() {
  const isDesktop = useMediaQuery("(min-width:768px)");
  return (
    <>
      {isDesktop ? (
        <nav className='w-full h-[84px] bg-white flex justify-center items-center sticky top-0'>
          <section className='max-w-[1440px] w-full flex justify-between items-center'>
            <Image
              priority
              width={140}
              height={140}
              alt='logo-sticth'
              src={"/assets/images/stitch-logo.svg"}
            />
            <div className='flex gap-8 items-center font-medium '>
              {headerLinks.map((link, idx) => (
                <Link
                  className='hover:border-b-primary hover:border-b-2'
                  key={idx}
                  href={link.url}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className='flex gap-2 items-center'>
              <FiShoppingCart className='text-primary' size={24} />

              <Link href='/signup'>
                {" "}
                <Button className='bg-primary text-white rounded-3xl transition delay-150 duration-300 ease-in-out  hover:text-primary border-primary border '>
                  Register
                </Button>
              </Link>

              <Button className='bg-accent text-primary rounded-3xl border-primary border'>
                Login
              </Button>
            </div>
          </section>
        </nav>
      ) : (
        <nav>
          <Drawer direction='right'>
            <DrawerTrigger asChild>
              <div className='py-2 flex justify-between items-center px-2'>
                <Image
                  priority
                  width={140}
                  height={140}
                  alt='logo-sticth'
                  src={"/assets/images/stitch-logo.svg"}
                />
                <MdOutlineMenu size={30} />
              </div>
            </DrawerTrigger>
            <DrawerContent className='py-4'>
              <div className='flex flex-col gap-8  font-medium  px-6 '>
                {headerLinks.map((link, idx) => (
                  <Link
                    className='hover:border-b-primary hover:border-b-2'
                    key={idx}
                    href={link.url}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className='flex flex-col gap-2 px-6 mt-8'>
                {/* <FiShoppingCart className='text-primary' size={24} /> */}
                <Button className='bg-primary text-white rounded-3xl'>
                  Register
                </Button>
                <Button className='bg-accent text-primary rounded-3xl border-primary border'>
                  Login
                </Button>
              </div>
            </DrawerContent>
          </Drawer>
        </nav>
      )}
    </>
  );
}

export default Header;

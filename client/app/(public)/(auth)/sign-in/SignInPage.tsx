"use client";

import React from "react";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/forminputs/CustomFormInput";
import { Input } from "@/components/ui/input";

const SignInPage = () => {
  return (
    <section className='flex  h-lvh justify-around  '>
      <div className='hidden md:block w-1/2 bg-[#ECECE0] py-[3rem] px-[3rem]'>
       
        <p className='text-2xl text-[#245949] mt-[2rem] '>
          Discover the perfect 
          fit with Stitch
        </p>

        <div className='py-[2rem]'>
          <Image
            priority
            width={500}
            height={500}
            alt='hero-image'
            src='/assets/images/abt-img.png'
            className=''
          />
        </div>
      </div>

      {/* form */}
      <div className=" bg-white self-center">

         <div>
              <Image
                priority
                width={30}
                height={30}
                alt='hero-image'
                src='/assets/images/logo1.png'
                className=''
              />
            </div>

             <div className='  flex justify-center items-center m-auto  text-center '>
        <SignUpForm />
      </div>
      </div>
     
    </section>
  );
};

export default SignInPage;

export function SignUpForm() {
  const form = useForm();

  return (
    <Form {...form}>
      <div className='   '>
        <div className=' bg-white '>
        

          {/* form */}

          <form className=''>

             <p className='text-2xl '>Sign In </p>
            
            {/* Email */}
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='flex flex-col items-start'>
                  <FormLabel className='text-[#666666] text-sm'>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder='Email' {...field} className='w-full' />
                  </FormControl>
                </FormItem>
              )}
            />


        

            {/* Password */}
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='md:col-span-1'>
                  <FormLabel className='flex justify-between'>
                    <p className='text-[#666666] text-sm'>Password</p>
                    <div className='flex gap-2 items-center'>
                      <Image
                        priority
                        width={20}
                        height={20}
                        alt='hide'
                        src='/assets/images/hide.png'
                      />
                      <p className='text-[#666666] text-sm'>Hide</p>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Password'
                      {...field}
                      className='w-full'
                    />
                  </FormControl>
                </FormItem>
              )}
            />

           
            {/* Submit Button */}
            <div className='flex items-center gap-2 md:col-span-2  '>
                 <div>
                <Button type='submit'>Sign In</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Form>
  );
}

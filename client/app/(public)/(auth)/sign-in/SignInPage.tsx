
"use client";

import React from "react";
import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"


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
import Link from "next/link";

const SignInPage = () => {
  return (
    <section className='flex  h-l00vh   w-full '>
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
      <div className=" bg-white  py-[1rem] flex  flex-col justify-center items-center m-auto w-full md:w-1/2   ">

         <div className="flex justify-center items-center mb-[2rem]">
              <Image
                priority
                width={70}
                height={70}
                alt='hero-image'
                src='/assets/images/logo1.png'
                className=''
              />

            
            </div>

             {/* <div className='  flex justify-center items-center m-auto  text-center '> */}
              <div className="w-full md:w-3/4 lg:w-1/2 px-4">
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
      <div className='    w-full   py-[2rem] '>
            <p className='text-2xl '>Sign In </p>
            
        <p className="mb-[2rem]">
          Don't have an account?

<Link href="/signup" className="text-blue-500 hover:underline ml-1"> 
Sign up
</Link>
        </p>
        
    <Form {...form}>
      
         

          {/* form */}

          <form className=''>

            
            {/* Email */}
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='flex flex-col items-start w-full mb-4'>
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
                <FormItem className=''>
                  <FormLabel className='flex justify-between '>
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
                      className='w-full mb-4'
                    />
                  </FormControl>
                  <div className="flex justify-between w-full items-center mt-[1rem] ">

                    
                         <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Remember Me</Label>
      </div>

                    <Link href="/reset-password" className="text-blue-500 hover:underline text-sm">
                      Forgot Password?
                    </Link>

                  </div>
            
                </FormItem>
              )}
            />

           
            {/* Submit Button */}
            <div className='flex items-center w-full mt-4 '>
                 
                <Button  size='lg' className="w-full" >Sign In</Button>
              
            </div>
          </form>
      
    </Form>
        </div>
  );
}









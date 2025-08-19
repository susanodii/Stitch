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

const Signup = () => {
  return (
    <section className='flex  h-lvh justify-around'>
      <div className='hidden md:block w-1/2 bg-[#ECECE0] py-[3rem] px-[3rem]'>
        <div className='flex  items-center gap-3'>
          {/* <Image
            priority
            width={100}
            height={100}
            alt='hero-image'
            src='/assets/images/logo1.png'
            className=''
          /> */}

          <p className='text-[#245949] text-3xl font-bold'>Stich</p>
        </div>
        <p className='text-2xl text-[#245949] mt-[2rem] '>
          Discover the perfect <br />
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
      <div className=' self-center flex justify-center items-center m-auto  text-center '>
        <SignUpForm />
      </div>
    </section>
  );
};

export default Signup;

export function SignUpForm() {
  const form = useForm();

  return (
    <Form {...form}>
      <div className='   '>
        <div className=' bg-white '>
          <div className='flex gap-4 mb-[3rem]'>
            <div>
              <Image
                priority
                width={40}
                height={40}
                alt='hero-image'
                src='/assets/images/logo1.png'
                className=''
              />
            </div>

            <p className='text-2xl '>Sign up </p>
          </div>

          {/* form */}

          <form className='w-full  grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* First Name */}
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='flex flex-col items-start'>
                  <FormLabel className='text-[#666666] text-sm '>
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='First Name'
                      {...field}
                      className='w-full'
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className='flex flex-col items-start'>
                  <FormLabel className='text-[#666666] text-sm'>
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Last Name'
                      {...field}
                      className='w-full'
                    />
                  </FormControl>
                </FormItem>
              )}
            />

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

            {/* Phone Number */}
            <FormField
              control={form.control}
              name='phoneNumber'
              render={({ field }) => (
                <FormItem className='flex flex-col items-start'>
                  <FormLabel className='text-[#666666] text-sm'>
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Phone Number'
                      {...field}
                      className='w-full'
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Address */}
            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem className='flex flex-col items-start w-full md:col-span-2 '>
                  <FormLabel className='text-[#666666] text-sm'>
                    Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Address'
                      {...field}
                      className='w-full'
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='md:col-span-2'>
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

            <div className='flex gap-2 items-center w-full md:col-span-2 mt-[1.5rem]'>
              <Image
                priority
                width={20}
                height={20}
                alt='hide'
                src='/assets/images/checked.png'
              />
              <p className=''>
                By creating an account, I agree to our Terms of use and Privacy
                Policy{" "}
              </p>
            </div>
            {/* Submit Button */}
            <div className='flex items-center gap-2 md:col-span-2  '>
              <p className='py-4'>Already have an account? </p>
              <div>
                <Button type='submit'>Login</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Form>
  );
}

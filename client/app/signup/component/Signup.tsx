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
    <section className='bg-[#ECECE0] flex pt-[3rem] px-[4rem] h-lvh justify-around'>
      <div className='w-1/2'>
        <div className='flex  items-center gap-3'>
          <Image
            priority
            width={100}
            height={100}
            alt='hero-image'
            src='/assets/images/logo1.png'
            className=''
          />

          <p className='text-[#245949] text-2xl font-bold'>Stich</p>
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
      <div className='bg-white px-10 py-8 flex-1'>
        <p className='text-3xl mb-[2rem]'>Sign up now</p>
        <div className='flex gap-4'>
          <Button>Designer</Button>
          <Button>Buyer</Button>
        </div>

        <SignUpForm />
      </div>
    </section>
  );
};

export default Signup;

export function SignUpForm() {
  const form = useForm();

  return (
    <div className='  p-6  '>
      <Form {...form}>
        <form className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* First Name */}
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
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
              <FormItem>
                <FormLabel>Last Name</FormLabel>
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
              <FormItem>
                <FormLabel>Email</FormLabel>
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
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
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
              <FormItem className='md:col-span-2'>
                <FormLabel>Address/Location</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Address/Location'
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
                  <p>Password</p>
                  <div className='flex gap-2 items-center'>
                    <Image
                      priority
                      width={20}
                      height={20}
                      alt='hide'
                      src='/assets/images/hide.png'
                    />
                    <p>Hide</p>
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
            <div>
              <Button type='submit' className=''>
                Sign Up
              </Button>
            </div>

            <p className='py-4'>Already have an account? Log in </p>
          </div>
        </form>
      </Form>
    </div>
  );
}

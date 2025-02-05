import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const News = () => {
  const newsDetails = [
    {
      image: "/assets/images/Desktop.png",
      date: "13 JAN 2021",
      header: "Fashion Trends in 2024",
      title: "Fashion",
      details:
        "A new year means new trends. Fashion experts are predicting that statement sleeves, earthy colors, and tracksuits will be all the rage...",
    },
    {
      image: "/assets/images/news-img-1.png",
      date: "23 FEB 2024",
      title: "Trending",
      header: "Fashion Trends in 2024",
      details:
        "A new year means new trends. Fashion experts are predicting that statement sleeves, earthy colors, and tracksuits will be all the rage...",
    },
    {
      image: "/assets/images/news-img-1.png",
      date: "23 FEB 2024",
      title: "Trending",
      header: "Fashion Trends in 2024",
      details:
        "A new year means new trends. Fashion experts are predicting that statement sleeves, earthy colors, and tracksuits will be all the rage...",
    },
    {
      image: "/assets/images/news-img-1.png",
      date: "23 FEB 2024",
      title: "Trending",
      header: "Fashion Trends in 2024",
      details:
        "A new year means new trends. Fashion experts are predicting that statement sleeves, earthy colors, and tracksuits will be all the rage...",
    },
  ];

  return (
    <main className='mt-12  '>
      {/* Section Header */}
      <section className='w-full flex justify-between items-center mb-6'>
        <p className='font-playfair font-medium text-lg sm:text-xl'>News</p>
        <Button className='bg-accent text-primary rounded-3xl text-sm sm:text-base'>
          Read More
        </Button>
      </section>

      {/* News Cards */}
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {newsDetails.map((data, index) => (
          <div
            key={index}
            className='border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300'
          >
            {/* Image Section */}
            <div className='relative'>
              <Image
                width={400}
                height={382}
                alt='news-image'
                src={data.image}
                className='w-full h-auto'
              />
              <h4 className='absolute left-0 bottom-0 bg-accent text-black px-3 py-1 text-xs rounded-tr-full'>
                {data.title}
              </h4>
            </div>

            {/* Content Section */}
            <div className='p-4'>
              <h3 className='text-xs sm:text-sm text-gray-500'>{data.date}</h3>
              <h2 className='text-base sm:text-lg font-semibold text-gray-800'>
                {data.header}
              </h2>
              <p className='text-gray-600 mt-1 text-sm'>{data.details}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default News;

import React from "react";
import Image from "next/image";

interface ReviewDataProps {
  data: {
    count: number;
    icon: string;
    label: string;
  };
}

const Review: React.FC = () => {
  const reviewDetails = [
    {
      count: 45000,
      icon: "/assets/images/Heart.png",

      label: " Happy Customers",
    },

    {
      count: 40000,
      icon: "/assets/images/shirt-icon.png",

      label: "  Products Sold",
    },

    {
      count: 32146,
      icon: "/assets/images/Phone.png",

      label: "Contact Mobile",
    },
  ];

  return (
    // <div className='flex justify-around items-center  w-11/12 h-[191px] m-auto font-playfair bg-lightGray'>
    <div className='flex flex-col gap-[2rem]  sm:flex-row justify-around items-center w-11/12 max-w-[1200px] min-h-[150px] sm:min-h-[191px] m-auto p-4 sm:p-6 font-playfair bg-lightGray sm:gap-4'>
      {reviewDetails.map((data) => (
        <ReviewData data={data} />
      ))}
    </div>
  );
};

export default Review;

const ReviewData: React.FC<ReviewDataProps> = (props) => {
  const { data } = props;

  return (
    <main className=''>
      <div className='flex flex-col gap-2 items-center self-center '>
        <Image width={48} height={48} alt='logo-sticth' src={data.icon} />
        <h2 className='font-medium text-[48px] leading-[60px] text-darkGray'>
          {data.count}
        </h2>
        <h5 className='text-[20px] font-medium leading-[28px] text-darkGray font-secondaryNormal'>
          {data.label}
        </h5>
      </div>
    </main>
  );
};

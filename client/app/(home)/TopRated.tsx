import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TopRatedDataProps {
  data: {
    storeName: string;
    topRateImage: string;
    storeDetails: string;
    locationIcon: string;
  };
}

const TopRated = () => {
  const topRatedDetails = [
    {
      storeName: "  Dee Store",
      topRateImage: "/assets/images/topRate-img.png",
      storeDetails:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse et dui nequetincidunt at imperdiet a nam fusce.&",
      locationIcon: "/assets/images/entypo_location-pin.png",
      location: " Jabi",
      map: "  view on map",
      mapDetails: "  2km from your location",
      chatTailor: " Chat",

      book: "    Book",
      shareIcon: "/assets/images/share.png",
      bookMarkIcon: "/assets/images/bookMark-icon.png",
    },

    {
      storeName: "  Dee Store",
      topRateImage: "/assets/images/topRate-img.png",
      storeDetails:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse et dui nequetincidunt at imperdiet a nam fusce.&",
      locationIcon: "/assets/images/entypo_location-pin.png",
      location: " Jabi",
      map: "  view on map",
      mapDetails: "  2km from your location",
      chatTailor: " Chat",

      book: "    Book",
      shareIcon: "/assets/images/share.png",
      bookMarkIcon: "/assets/images/bookMark-icon.png",
    },

    {
      storeName: "  Dee Store",
      topRateImage: "/assets/images/topRate-img.png",
      storeDetails:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse et dui nequetincidunt at imperdiet a nam fusce.&",
      locationIcon: "/assets/images/entypo_location-pin.png",
      location: " Jabi",
      map: "  view on map",
      mapDetails: "  2km from your location",
      chatTailor: " Chat",

      book: "    Book",
      shareIcon: "/assets/images/share.png",
      bookMarkIcon: "/assets/images/bookMark-icon.png",
    },
  ];

  return (
    <main className='mt-[4rem] w-11/12 mx-auto'>
      {/* Header */}
      <section className='w-full flex justify-between items-center'>
        <p className='font-playfair font-medium leading-[16px] text-[20px]'>
          Top Rated Designers
        </p>
        <Button className='bg-accent text-primary rounded-3xl font-secondaryExraBold font-light leading-[19.2px] text-[16px]'>
          View All
        </Button>
      </section>

      {/* Card Section */}
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 justify-items-center'>
        {topRatedDetails.map((store, index) => (
          <Card
            key={index}
            className='w-full sm:w-[300px] md:w-[350px] lg:w-[400px]'
          >
            <Image
              width={400}
              height={174}
              alt='logo-stitch'
              src={store.topRateImage}
            />

            <div className='flex justify-between mt-2 p-2'>
              <div className='flex flex-col gap-3'>
                <CardHeader className='font-medium font-playfair leading-[15.85px] text-[16px] p-0'>
                  {store.storeName}
                </CardHeader>
                <CardContent className='font-secondaryNormal font-normal leading-[17px] p-0 text-[14px]'>
                  {store.storeDetails}
                </CardContent>

                <div className='flex gap-6 items-center'>
                  <div className='flex gap-1 items-center'>
                    <Image
                      width={15}
                      height={15}
                      alt='location-pin'
                      src={store.locationIcon}
                    />
                    <p className='font-secondaryNormal leading-[15px] text-[15px]'>
                      {store.location}
                    </p>
                  </div>
                  <p className='font-secondaryNormal leading-[15px] text-[15px] cursor-pointer'>
                    {store.map}
                  </p>
                </div>
                <p className='font-secondaryNormal leading-[8px] text-gray'>
                  {store.mapDetails}
                </p>

                <div className='flex gap-8 mt-[3rem]'>
                  <Button className='bg-primary text-accent rounded-3xl w-full sm:w-[100px] border-primary border font-secondaryExraBold font-semibold leading-[24px]'>
                    Chat
                  </Button>
                  <Button className='bg-accent text-primary rounded-3xl w-full sm:w-[100px] font-secondaryExraBold font-semibold leading-[24px]'>
                    Book
                  </Button>
                </div>
              </div>

              <div className='flex gap-2'>
                <div className='h-[24px] w-[24px] cursor-pointer'>
                  <Image
                    width={20}
                    height={20}
                    alt='bookmark'
                    src={store.bookMarkIcon}
                  />
                </div>
                <div className='h-[24px] w-[24px] cursor-pointer'>
                  <Image
                    width={20}
                    height={20}
                    alt='share'
                    src={store.shareIcon}
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </section>
    </main>

    // <main className=' mt-[4rem]  m-auto '>
    //   <section className='w-full flex justify-between  items-center'>
    //     <p className='font-playfair font-medium leading-[16px] text-[20px]'>
    //       {" "}
    //       Top Rated Designers{" "}
    //     </p>
    //     <Button className='bg-accent text-primary rounded-3xl font-secondaryExraBold font-light leading-[19.2px] text-[16px]'>
    //       View All
    //     </Button>
    //   </section>

    //   {/* card seco */}

    //   <section className='flex justify-between mt-4'>
    //     {topRatedDetails.map((store, index) => (
    //       <Card key={index} className='w-[400px]  '>
    //         <Image
    //           width={400}
    //           height={174}
    //           alt='logo-sticth'
    //           src={store.topRateImage}
    //         />
    //         <div className='flex justify-between mt-2 p-2'>
    //           <div className='flex flex-col gap-3'>
    //             <CardHeader className='font-medium font-playfair leading-[15.85px] text-[16px] p-0'>
    //               {store.storeName}
    //             </CardHeader>
    //             <CardContent className='font-secondaryNormal font-normal leading-[17px] p-0 text-[14px]'>
    //               {store.storeDetails}
    //             </CardContent>

    //             <div className='flex gap-6 items-center'>
    //               <div className='flex gap-1 items-center'>
    //                 <Image
    //                   width={15}
    //                   height={15}
    //                   alt='logo-sticth'
    //                   src={store.locationIcon}
    //                 />
    //                 <p className='font-secondaryNormal leading-[15px] text-[15px]'>
    //                   {store.location}
    //                 </p>
    //               </div>
    //               <p className='font-secondaryNormal leading-[15px] text-[15px] cursor-pointer'>
    //                 {store.map}
    //               </p>
    //             </div>
    //             <p className='font-secondaryNormal leading-[8px] text-gray'>
    //               {store.mapDetails}
    //             </p>

    //             <div className='flex gap-8 mt-[3rem]'>
    //               {" "}
    //               <Button className=' bg-primary text-accent rounded-3xl w-[100px] border-primary border font-secondaryExraBold font-semibold leading-[24px]'>
    //                 Chat
    //               </Button>
    //               <Button className='bg-accent text-primary rounded-3xl  w-[100px] font-secondaryExraBold font-semibold leading-[24px]'>
    //                 Book
    //               </Button>
    //             </div>
    //           </div>
    //           <div className='flex gap-2'>
    //             <div className='h-[24px] w-[24px] cursor-pointer'>
    //               <Image
    //                 // width={12}
    //                 // height={15.4}
    //                 width={20}
    //                 height={20}
    //                 alt='bookmark'
    //                 src={store.bookMarkIcon}
    //               />
    //             </div>

    //             <div className='h-[24px] w-[24px] cursor-pointer'>
    //               <Image
    //                 width={20}
    //                 height={20}
    //                 alt='share'
    //                 src={store.shareIcon}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </Card>
    //     ))}
    //   </section>
    // </main>
  );
};

export default TopRated;

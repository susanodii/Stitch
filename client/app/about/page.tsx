import React from "react";
import Explore from "./Explore";
import OurService from "./OurService";
import OurMission from "./OurMission";
import OurVision from "./OurVision";
import ProductExplore from "./ProductExplore";

export default function page() {
  return (
    <div className='px-4 md:px-10 bg-accent pt-4 overflow-y-auto'>
      <Explore />
      <OurService />
      <OurMission />
      <OurVision />
      <ProductExplore />
    </div>
  );
}

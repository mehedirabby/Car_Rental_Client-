import React from "react";
import Banner1 from "../../../assets/homeCarousel/Banner1.jpg";
import Banner8 from "../../../assets/homeCarousel/Banner8.jpg";
import banner2 from "../../../assets/homeCarousel/banner2.jpg";
import banner3 from "../../../assets/homeCarousel/banner3.jpg";
import "./Banner.css";
import BannerItems from "./BannerItems";

const Banner = () => {
  const bannerData = [
    {
      image: Banner1,
      prev: 8,
      id: 1,
      next: 2,
    },
    {
      image: banner2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: banner3,
      prev: 2,
      id: 3,
      next: 8,
    },
    {
      image: Banner8,
      prev: 3,
      id: 8,
      next: 5,
    },
  ];
  return (
    <div className="carousel w-full py-0">
      {bannerData.map((slide) => (
        <BannerItems key={slide.id} slide={slide}></BannerItems>
      ))}
    </div>
  );
};

export default Banner;

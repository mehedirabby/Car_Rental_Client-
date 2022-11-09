import React from "react";
import "./Banner.css";

const BannerItems = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2  left-24  top-1/4">
        <h3 className="text-5xl text-white font-bold">
          Best Car Rental <br /> service <br />
          In Dhaka
        </h3>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-24 text-xl w-2/5  top-1/2">
        <p className="text-white toto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          vitae fugiat accusamus eum quod fuga? Mollitia eveniet error officiis
          dicta, perferendis velit maiores porro cum aliquid, illum repudiandae
          nobis. Amet.
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-error">Warning</button>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItems;

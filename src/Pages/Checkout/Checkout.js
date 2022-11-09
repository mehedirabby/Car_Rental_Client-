import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const { title, img, price, description } = useLoaderData();
  return (
    <section>
      <div>
        <div className="hero " style={{ backgroundImage: `url(${img})` }}>
          <div className="hero-overlay bg-opacity-60"></div>

          <div className="hero-content text-center text-neutral-content">
            <h2 className="text-3xl top1/4">Details:</h2>
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">{description}</p>
              <p className="text-info-600 text-2xl">Price:{price}$ Per Hour</p>
            </div>
          </div>
        </div>

        {/* another section */}

        <div>
          <form>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

import React from "react";
import Image from "next/image";
import Poster from "/public/poster.webp";
import { ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-16 md:flex md:flex-row md:items-center">
        {/* Hero Text */}
        <div className="md:w-1/2 space-y-8 md:pr-16">
          <button
            aria-label="Redirect to all products page"
            className="bg-blue-100 py-2 px-3 text-blue-500 text-lg rounded-xl"
          >
            Sale 70%
          </button>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            An Industrial Take On Streetwear
          </h1>
          <p className="mb-8 leading-relaxed text-lg font-light">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <div className="flex ">
            <button className="inline-flex items-center text-white font-bold bg-black border-0 py-3 px-6 space-x-4 focus:outline-none hover:bg-gray-300 hover:text-black rounded text-lg">
              <ShoppingCart className="w-5 h-5" />
              <p>Start Shopping</p>
            </button>
          </div>
          {/* hero small brand images  */}
          <div className="flex gap-x-8 mt-8">
            <Image
              src={"/assets/img/Featured1.webp"}
              alt="bazar"
              width={128}
              height={64}
            />
            <Image
              src={"/../assets/img/Featured2.webp"}
              alt="burstle"
              width={128}
              height={64}
            />
            <Image
              src={"/../assets/img/Featured3.webp"}
              alt="versace"
              width={128}
              height={64}
            />
            <Image
              src={"/../assets/img/Featured4.webp"}
              alt="instyle"
              width={128}
              height={64}
            />
          </div>
        </div>
        {/* Hero Image */}
        <div className="md:w-1/2 w-5/6 mx-auto">
          <div className="bg-heroimgback rounded-full">
            <Image src={Poster} alt="hero image" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";
import girl2 from "../../assets/img/girl2.png";

const Jewellery = () => {
  return (
    <section className=" px-4 py-16 mt-8 mb-8 ">
      <h1 className="scroll-m-20  text-3xl font-bold tracking-tight pt-8 pb-8 lg:text-5xl">
        Unique and Authentic Vintage Designer Jewellery
      </h1>
      <div className="flex  flex-wrap">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2  md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 h-60">
            <div className="">
              <h2 className="scroll-m-20 border-b pt-5 pb-5 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                Using Good Quality Materials
              </h2>
              <p className="leading-5 pb-5 [&:not(:first-child)]">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className="  ">
              <h2 className="scroll-m-20 border-b  pt-5 pb-5 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                Modern Fashion Design
              </h2>
              <p className="leading-5 pb-5 [&:not(:first-child)]">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2  md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 h-60">
            <div className=" ">
              <h2 className="scroll-m-20 border-b pt-5 pb-5 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                100% Handmade Products
              </h2>
              <p className="leading-5 pb-5 [&:not(:first-child)]">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
            <div className=" ">
              <h2 className="scroll-m-20 border-b  pt-5 pb-5 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
                Discount for Bulk Orders
              </h2>
              <p className="leading-5 pb-5 [&:not(:first-child)]">
                Lorem ipsum dolor sit amt, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
            <div className=" ">
              <Image src={girl2} alt={""} />
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
            <div className=" ">
              <p className="leading-5 pb-5 w-full  pt-10 [&:not(:first-child)]">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </p>
              <button className="inline-flex  text-white font-bold bg-black border-0 py-3 px-6 space-x-4 focus:outline-none hover:bg-gray-300 hover:text-black rounded text-lg">
                See All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jewellery;

import Image from "next/image";
import React from "react";
import Event1 from "../../assets/img/event1.webp";
import Event2 from "../../assets/img/event2.webp";
import Event3 from "../../assets/img/event3.webp";

const Promotion = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <span className=" text-blue-400 ">PROMOTIONS</span>
        <h1 className="text-3xl font-bold title-font text-gray-900 mb-12 text-center">
          Our Promotions Events
        </h1>
        {/* promotion left side start here   */}
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/2 w-full ">
            <div className=" h-1/2 bg-cat1 px-8 rounded flex justify-between items-center">
              <div className="">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl">
                  GET UP TO 60%
                </h1>
                <p className="leading-relaxed  font-medium">
                  For the summer season
                </p>
              </div>
              <Image src={Event1} alt={"event"} width={240} height={200} />
            </div>
            <div className=" h-1/2 mt-2 bg-cat2 text-white  rounded  ">
              <div className=" text-center pt-4 space-y-5">
                <h1 className="scroll-m-20  text-4xl font-bold tracking-tight lg:text-5xl">
                  GET 30% Off
                </h1>
                <p className="leading-relaxed font-medium">USE PROMO CODE</p>
                <button className="inline-flex text-white font-bold bg-slate-700 border-0 py-3 px-6 space-x-4 focus:outline-none hover:bg-gray-300 hover:text-black rounded text-lg">
                  ODINEWEEKENDSALE
                </button>
              </div>
            </div>
          </div>
          {/* promotion right side start here  */}
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full rounded flex gap-x-2">
              <div className=" bg-cat1">
                <div className="text-left pt-5">
                  <p>
                    Flex Sweatshirt <br />
                    <span className=" line-through">$100.00</span> $75.00
                  </p>
                  <Image src={Event2} alt={"Evene2"} />
                </div>
              </div>
              <div className=" bg-cat3">
                <div className="text-left pt-5">
                  <p>
                    Flex Sweatshirt <br />
                    <span className=" line-through">$100.00</span> $75.00
                  </p>
                  <Image src={Event3} alt={"Evene3"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;

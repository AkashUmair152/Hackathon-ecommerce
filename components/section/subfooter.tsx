import React from "react";

const Subfooter = () => {
  return (
    <div>
      <div className="">
        <hr className="border border-gray-300 border-b-2 my-4" />

        <div className="container mx-auto py-4 px-5 flex justify-between flex-wrap flex-col sm:flex-row">
          <div>
            <p className="text-gray-500 text-sm text-center sm:text-left">
              <span className="font-semibold">Copyright</span> © 2022 Dine
              Market
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm text-center sm:text-left">
              Design by:<span className=" font-bold"> AKASH UMAIR</span>
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm text-center sm:text-left">
              Code by:
              <span className="font-bold"> AKASH UMAIR on github</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subfooter;

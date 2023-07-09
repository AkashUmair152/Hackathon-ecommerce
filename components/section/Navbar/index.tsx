import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";
import { NavbarArray, NavbarIteamTypes } from "../../utils/NavArrayTypes";

const Navbar = () => {
  function item({
    value,
    index,
    array,
  }: {
    value: NavbarIteamTypes;
    index: number;
    array: NavbarIteamTypes[];
  }): ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <header className="text-gray-600 body-font mt-5">
      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <button className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">
            <Image
              src={"/Logo.png"}
              alt={"ODine MarketPlace"}
              width={150}
              height={150}
            />
          </span>
        </button>
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-x-8 font-semibold">
          {NavbarArray.map((item: NavbarIteamTypes, index: number) => (
            <li key={index} className="list-none ">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </div>
        <button className=" rounded-full relative flex justify-center w-12 h-12 items-center bg-gray-100 border-0 focus:outline-none hover:bg-gray-300 text-base mt-4 md:mt-0">
          <div className=" absolute bg-red-600 w-3 h-3 rounded-full flex justify-center items-center right-2 top-2 ">
            1{" "}
          </div>
          <ShoppingCart />{" "}
        </button>
      </div>
    </header>
  );
};

export default Navbar;

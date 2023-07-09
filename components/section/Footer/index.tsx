import Image from "next/image";
import Link from "next/link";

import { NavbarArray, NavbarIteamTypes } from "../../utils/NavArrayTypes";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 space-y-3 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl ">
              <Image
                src={"/logo.png"}
                alt={"ODine MarketPlace"}
                width={200}
                height={200}
              />
            </span>
          </a>
          <p className="mt-2 text-gray-500">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className=" uppercase title-font font-bold text-lg text-gray-900 tracking-widest mb-3">
              categories
            </h2>
            <nav className="list-none mb-10 space-y-3 font-medium">
              {NavbarArray.map((item: NavbarIteamTypes, index: number) => (
                <li key={index} className="list-none ">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-lg   text-gray-900 tracking-widest mb-3">
              COMPANY
            </h2>
            <nav className="list-none mb-10 space-y-3 font-medium">
              <li>
                <a className="text-gray-600 hover:text-gray-800">About</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  How it Works
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-lg mb-3">
              SUPPORT
            </h2>
            <nav className="list-none mb-10 space-y-3 font-medium">
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  Support Carrer
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">24h Service</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Quick Chat</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-lg text-gray-900 tracking-widest  mb-3">
              CONTACT
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Whats app</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">
                  24 Hours Support
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

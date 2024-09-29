import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/Logo.svg";

export const Navbar = () => {
  return (
    <section>
      <nav className="top-0 sticky border-b border-gray-400 shadow flex justify-evenly w-full h-24">
        <div className="flex flex-row gap-2 p-2 text-white items-center font-semibold text-3xl">
          <Image src={Logo} alt="" height={30} width={30} className="" />
          <Link href={"/"}>KENZO</Link>
        </div>
        <div className=" hidden lg:flex py-4 px-4 gap-6 text-white items-center">
          <div className="hover:bg-white hover:p-2 hover:text-black hover:shadow-md hover:shadow-white ">
            <Link href={"/allproducts"}>All Products</Link>
          </div>
          <div className="hover:bg-white hover:p-2 hover:text-black hover:shadow-md hover:shadow-white ">
            <Link href={"/men"}>Men</Link>
          </div>
          <div className="hover:bg-white hover:p-2 hover:text-black hover:shadow-md hover:shadow-white ">
            <Link href={"/female"}>Female</Link>
          </div>
          <div className="hover:bg-white hover:p-2 hover:text-black hover:shadow-md hover:shadow-white ">
            <Link href={"/kids"}>Kids</Link>
          </div>
        </div>
        <div className="">S</div>
      </nav>
    </section>
  );
};

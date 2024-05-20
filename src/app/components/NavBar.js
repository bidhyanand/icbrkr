"use client";
import Image from "next/image";
import Link from "next/link";
import {  usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import logo from "../../../public/assests/Subtract.png"; 
import profileImage from "../../../public/assests/9d9eb08c28bc8c6b43f73f133f60da3c.png";
import {  FaRegBell } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const router = useRouter();

  const pathname = usePathname();

  return (
    <div className="z-50 sticky top-0">
      <nav className="flex justify-between py-3 px-6  z-50 h-20 shadow-md ">
        <div className="flex gap-32  ">
          <div className="flex gap-4 ">
            <div>
              <Link href={"/"}>
                <Image
                  src={logo}
                  width={100}
                  height={100}
                  alt="Logo"
                  className="h-10 w-10"
                />
              </Link>
            </div>
            <h1 className="font-semibold text-2xl mt-1 ">LOGO</h1>
          </div>

          <div className=" flex ">
            <tab className="font-normal text-base p-3 "> Home </tab>
            <tab className="font-normal text-base p-3 flex gap-1 ">
              <text>Analytics</text>

              <ChevronDown />
            </tab>
          </div>
        </div>

        <div className="flex gap-8  items-center ">
          <FaRegBell size={25} />
          <div className="flex gap-4">
            <div>
              <Image
                src={profileImage}
                alt="profile"
                width={100}
                height={100}
                className="rounded-xl  h-11 w-11 "
              />
            </div>

            <div className=" flex gap-4 ">
              <div className="grid">
                <text className="font-light text-lg ">Thakali Ghar</text>
                <text className="font-normal text-xs text-black/50 ">
                  Thakali Khana
                </text>
              </div>

              <ChevronDown className="mt-3" />
            </div>
          </div>
        </div>
      </nav>
      {/* Dropdown menu */}
      {/* {isMenuOpen && (
        <div className="sm:hidden z-50 top-16 right-6 flex flex-col mx-2 bg-white shadow-md  mt-2">
          <Link href="/">
            {pathname === "/" ? (
              <text className="uppercase text-red-500 font-bold">Home</text>
            ) : (
              <text className="uppercase  ">Home</text>
            )}
          </Link>
          <Link href="/About">
            {pathname === "/About" ? (
              <text className="uppercase text-red-500 font-bold">About</text>
            ) : (
              <text className="uppercase  ">About</text>
            )}
          </Link>
          <Link href="/CaseStudy">
            {pathname === "/CaseStudy" ? (
              <text className="uppercase text-red-500 font-bold">
                Case Study
              </text>
            ) : (
              <text className="uppercase  ">case study</text>
            )}
          </Link>
          <Link href="/Services">
            {pathname === "/Services" ? (
              <text className="uppercase text-red-500 font-bold">service</text>
            ) : (
              <text className="uppercase  ">service</text>
            )}
          </Link>
          <Link href="/Program">
            {pathname === "/Program" ? (
              <text className="uppercase text-red-500 font-bold">program</text>
            ) : (
              <text className="uppercase  ">program</text>
            )}
          </Link>
          <Link href="/GetInvolved">
            {pathname === "/GetInvolved" ? (
              <text className="uppercase text-red-500 font-bold">
                Get Involved
              </text>
            ) : (
              <text className="uppercase  ">Get Involved</text>
            )}
          </Link>
        </div>
      )} */}
    </div>
  );
}

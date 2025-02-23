import { ChevronRight, Copyright, MailIcon, PhoneCallIcon } from "lucide-react";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" p-4 pt-16 bg-[#1A2A36] text-white space-y-7">
      <div className="flex flex-col  justify-center gap-7 md:flex-row md:justify-between max-w-6xl mx-auto">
        <div className="flex flex-col  gap-5 md:gap-7 ">
          <p className="md:text-lg font-semibold">Address</p>
          <div className="flex flex-col  gap-2 ">
            <div className="flex items-center gap-2 ">
              <MdLocationPin className="w-5 h-5 md:w-7 md:h-7 text-slate-300" />
              <p className="text-xs md:text-sm text-slate-300">
                1234 Main Street, New York, NY 10010
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <PhoneCallIcon className="w-5 h-5 md:w-7 md:h-7 text-slate-300" />
              <p className="text-xs md:text-sm text-slate-300">
                + (123) 456-7890
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <MailIcon className="w-5 h-5 md:w-7 md:h-7 text-slate-300" />
              <p className="text-xs md:text-sm text-slate-300">
                info@solarcompany.com
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2 ">
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-full"
                asChild
              >
                <Link href={"/"}>
                  <FaFacebook className="w-6 h-6 text-blue-400" />
                </Link>
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-full"
                asChild
              >
                <Link href={"/"}>
                  <FaYoutube className="w-6 h-6 text-red-500" />
                </Link>
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="rounded-full"
                asChild
              >
                <Link href={"/"}>
                  <FaLinkedinIn className="w-6 h-6 text-blue-800" />
                </Link>
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                asChild
                className="rounded-full"
              >
                <Link href={"/"}>
                  <FaTwitter className="w-6 h-6 text-sky-600" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-5 md:gap-7 ">
          <p className="md:text-lg font-semibold">Quick Links</p>
          <div className="flex flex-col  gap-2 ">
            <Link
              href={"/about"}
              className="flex items-center gap-2 hover:text-[#32C36C] hover:scale-105 duration-300 ease-linear transition-all text-slate-300"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 " />
              <p className="text-xs md:text-sm ">About Us</p>
            </Link>
            <Link
              href={"/service"}
              className="flex items-center gap-2 hover:text-[#32C36C] hover:scale-105 duration-300 ease-linear transition-all text-slate-300"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 " />
              <p className="text-xs md:text-sm ">Our Services</p>
            </Link>
            <Link
              href={"/products"}
              className="flex items-center gap-2 hover:text-[#32C36C] hover:scale-105 duration-300 ease-linear transition-all text-slate-300"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 " />
              <p className="text-xs md:text-sm ">Our Products</p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col  gap-5 md:gap-7 ">
          <p className="md:text-lg font-semibold">Projects Gallery</p>
          <div className="grid grid-cols-3 gap-4 justify-between">
            <div className="relative md:w-32 md:h-24 w-26 h-16 rounded-lg">
              <Image
                src={"/images/img1.jpg"}
                alt="project1"
                fill
                className=" object-fill rounded-lg"
              />
            </div>
            <div className="relative md:w-32 md:h-24 w-26 h-16 rounded-lg">
              <Image
                src={"/images/img2.jpg"}
                alt="project1"
                fill
                className=" object-fill rounded-lg"
              />
            </div>
            <div className="relative md:w-32 md:h-24 w-26 h-16 rounded-lg">
              <Image
                src={"/images/img3.jpg"}
                alt="project1"
                fill
                className=" object-fill rounded-lg"
              />
            </div>
            <div className="relative md:w-32 md:h-24 w-26 h-16 rounded-lg">
              <Image
                src={"/images/img4.jpg"}
                alt="project1"
                fill
                className=" object-fill rounded-lg"
              />
            </div>
            <div className="relative md:w-32 md:h-24 w-26 h-16 rounded-lg">
              <Image
                src={"/images/img5.jpg"}
                alt="project1"
                fill
                className=" object-fill rounded-lg"
              />
            </div>
            <div className="relative md:w-32 md:h-24 w-26 h-16 rounded-lg">
              <Image
                src={"/images/img6.jpg"}
                alt="project1"
                fill
                className=" object-fill rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="max-w-6xl mx-auto  border-slate-500" />
      <div className="flex flex-col  justify-center gap-4 md:flex-row md:justify-between max-w-6xl mx-auto items-center">
        <div className="flex gap-1">
          <Copyright className="w-5 h-5 text-slate-300" />
          <p className="text-sm md:text-base font-semibold">
            SBN Solar Company
          </p>
          <p className="text-sm md:text-base text-slate-300">
            {" "}
            All Rights Reserved
          </p>
        </div>
        <div className="flex gap-1">
          <p className="text-sm md:text-base text-slate-300">Designed by</p>
          <p className="text-sm md:text-base font-bold text-[#32C36C]">
            SBN Web Dev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

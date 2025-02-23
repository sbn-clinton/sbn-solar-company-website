import Link from "next/link";
import { PiSolarPanelBold } from "react-icons/pi";
import { Button } from "./ui/button";
import { Navmenu } from "./Navmenu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md bg-opacity-45 ">
      <div className="flex items-center justify-between px-4 py-5 md:py-6 max-w-7xl mx-auto">
        <Link
          href={"/"}
          className="flex items-center gap-1 md:gap-3 text-[#32C36C]"
        >
          <PiSolarPanelBold className="w-8 h-8 md:w-10 md:h-10" />
          <h1 className=" md:text-xl font-extrabold ">Solar Company</h1>
        </Link>
        <div className="hidden md:flex items-center justify-between  md:gap-8 font-semibold text-lg text-[#32C36C] ">
          <Link
            href={"/about"}
            className="hover:text-[#32C36C] hover:scale-105 duration-300 ease-linear transition"
          >
            About Us
          </Link>
          <Link
            href={"/products"}
            className="hover:text-[#32C36C] hover:scale-105 duration-300 ease-linear transition"
          >
            Our Products
          </Link>
          <Link
            href={"/service"}
            className="hover:text-[#32C36C] hover:scale-105 duration-300 ease-linear transition"
          >
            Our Services
          </Link>
        </div>
        <div className="flex items-center justify-between  gap-2">
          <Button
            size={"sm"}
            className="bg-[#32C36C] hover:bg-[#2B9A5A] md:hidden flex items-center justify-center"
            asChild
          >
            <Link href={"/contact"}>Contact Us</Link>
          </Button>
          <Button
            size={"lg"}
            className="bg-[#32C36C] hover:bg-[#2B9A5A] hidden md:flex items-center justify-center"
            asChild
          >
            <Link href={"/contact"}>Contact Us</Link>
          </Button>
          <Navmenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

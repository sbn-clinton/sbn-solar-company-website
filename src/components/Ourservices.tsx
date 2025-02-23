"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GiSolarSystem, GiWindTurbine } from "react-icons/gi";
import { FaSolarPanel } from "react-icons/fa6";
import { MdSolarPower } from "react-icons/md";
import { GrSolaris } from "react-icons/gr";
import { motion } from "framer-motion";

const Ourservices = () => {
  return (
    <div className="flex flex-col gap-8 py-10 px-4 font-sans">
      <div className="flex flex-col gap-2 items-center justify-center text-center max-w-2xl mx-auto">
        <h1 className="text-lg md:text-xl font-bold text-balance text-[#32C36C] ">
          Our Services
        </h1>
        <p className="text-xl md:text-3xl font-bold text-balance text-black ">
          We Are Pioneers In The World Of Renewable Energy
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:max-w-6xl mx-auto">
        {[
          {
            icon: <FaSolarPanel className="w-10 h-10 text-white" />,
            title: "Solar Panels",
            img: "/images/img1.jpg",
          },
          {
            icon: <GiWindTurbine className="w-10 h-10 text-white" />,
            title: "Wind Turbines",
            img: "/images/img2.jpg",
          },
          {
            icon: <MdSolarPower className="w-10 h-10 text-white" />,
            title: "Hydropower Plants",
            img: "/images/img3.jpg",
          },
          {
            icon: <FaSolarPanel className="w-10 h-10 text-white" />,
            title: "Installations",
            img: "/images/img4.jpg",
          },
          {
            icon: <GiSolarSystem className="w-10 h-10 text-white" />,
            title: "Maintenance & Repairs",
            img: "/images/img5.jpg",
          },
          {
            icon: <GrSolaris className="w-10 h-10 text-white" />,
            title: "Warehousing & Solar Systems",
            img: "/images/img6.jpg",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          >
            <Card className="flex flex-col gap-6 border-none rounded-lg">
              <div className="relative h-72 w-full rounded-t-lg">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
                <div className="absolute left-4 -bottom-8 p-4 flex items-center justify-center rounded-full bg-[#32C36C] text-white">
                  {service.icon}
                </div>
              </div>
              <div className="flex flex-col gap-4 p-4">
                <h1 className="text-lg font-bold text-balance">
                  {service.title}
                </h1>
                <p className="text-sm md:text-base text-black">
                  We offer a wide range of renewable energy solutions to help
                  you harness sustainable power.
                </p>
                <Link
                  href="/"
                  className="group flex items-center gap-2 text-[#32C36C]"
                >
                  <p className="text-sm md:text-base text-balance">Read More</p>
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group-hover:text-green-600"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ourservices;

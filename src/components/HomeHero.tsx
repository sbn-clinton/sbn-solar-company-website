"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/images/carousel-1.jpg",
    title: "Poineers Of Solar And Renewable Energy",
    description:
      "Poineers of Solar And Renewable Energy is a solar company that provides solar panels, solar systems, and solar energy systems to the renewable energy industry. .",
  },
  {
    id: 2,
    image: "/images/carousel-2.jpg",
    title: " Poineers Of Solar And Renewable Energy",
    description:
      "We offer a wide range of solar products and services to help you harness the power of the sun and make your business more sustainable.",
  },
  {
    id: 3,
    image: "/images/carousel-3.jpg",
    title: "Best In Solar Installations",
    description:
      "Poineers Of Solar And Renewable Energy is a solar company that provides solar panels, solar systems, and solar energy systems to the renewable energy industry.",
  },
];

const HomeHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } `}
          onClick={() => goToSlide(index)}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
          />
          <div className="bg-black bg-opacity-5 text-white p-6">
            <div className="flex flex-col max-w-6xl mx-auto absolute inset-0 justify-center px-6 py-12 gap-4 md:gap-5">
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className=" font-bold text-3xl md:text-6xl md:font-extrabold mb-2 max-w-xl"
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-4 max-w-lg md:text-lg"
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button className="w-fit md:hidden bg-[#32C36C] hover:bg-[#2B9A5A]">
                  Read More
                </Button>
                <Button
                  size={"lg"}
                  className="w-fit hidden md:block bg-[#32C36C] hover:bg-[#2B9A5A]"
                >
                  Read More
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex ? "bg-white w-4 h-4" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeHero;

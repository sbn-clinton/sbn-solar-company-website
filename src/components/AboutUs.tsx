import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "./ui/button";

const AboutUs = () => {
  return (
    <div className=" px-3 md:px-0 flex flex-col md:flex-row bg-slate-50">
      <div className=" md:w-1/2 ">
        <div className="relative h-[500px] md:h-[600px]">
          <Image
            src="/images/about.jpg"
            alt="Why Choose Us"
            fill
            className="md:w-full md:h-full object-cover"
          />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col gap-5 md:p-24  py-5 ">
        <div className="flex flex-col gap-2">
          <h1 className="md:text-lg text-balance font-bold text-[#32C36C] ">
            About Us
          </h1>
          <h1 className="text-xl md:text-3xl font-bold  text-black ">
            25+ Years Experience In Solar & Renewable Energy Industry
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-base text-black">
            We are a solar company that provides solar panels, solar systems,
            and solar energy systems to the renewable energy industry. We offer
            a wide range of solar products and services to help you harness the
            power of the sun and make your business more sustainable.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="w-5 h-5 md:w-6 md:h-6 text-balance text-[#32C36C] " />
              <p className="text-sm md:text-base text-balance text-black">
                Diam dolor diam ipsum
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="w-5 h-5 md:w-6 md:h-6 text-balance text-[#32C36C] " />
              <p className="text-sm md:text-base text-balance text-black">
                Aliqu diam amet diam et eos
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="w-5 h-5 md:w-6 md:h-6 text-balance text-[#32C36C] " />
              <p className="text-sm md:text-base text-balance text-black">
                Tempor erat elitr rebum at clita
              </p>
            </div>
          </div>
        </div>
        <Button
          size={"lg"}
          className="bg-[#32C36C] hover:bg-[#2B9A5A] w-fit rounded-full"
        >
          Explore More
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;

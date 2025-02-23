import { CheckCheck, ContactIcon } from "lucide-react";
import { AiFillCustomerService } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col bg-slate-50 md:flex-row py-10 px-4 md:px-0 md:py-0 font-sans gap-3 md:gap-0">
      <div className="flex flex-col  md:w-1/2 gap-4 md:gap-6 md:p-24 ">
        <div className="flex flex-col gap-2">
          <h1 className=" md:text-lg font-bold text-balance text-[#32C36C] ">
            Why Choose Us!
          </h1>
          <p className="text-xl md:text-3xl font-bold  text-black ">
            Complete Commercial & Residential Solar Systems
          </p>
        </div>
        <p className="text-base text-slate-400">
          We are a solar company that provides solar panels, solar systems, and
          solar energy systems to the renewable energy industry. We offer a wide
          range of solar products and services to help you harness the power of
          the sun and make your business more sustainable.
        </p>
        <div className="grid grid-cols-2 gap-3 justify-between ">
          <div className="flex items-center  gap-2">
            <div className="flex items-center justify-center p-3 bg-[#32C36C] rounded-full text-white">
              <CheckCheck className="md:w-8 md:h-8 w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs md:text-base text-balance text-slate-400">
                Quality
              </p>
              <h1 className=" md:text-xl font-bold text-balance text-black">
                Services
              </h1>
            </div>
          </div>
          <div className="flex items-center  gap-2">
            <div className="flex items-center justify-center p-3 bg-[#32C36C] rounded-full text-white">
              <FaUserCheck className="md:w-8 md:h-8 w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs md:text-base text-balance text-slate-400">
                Expert
              </p>
              <h1 className=" md:text-xl font-bold text-balance text-black">
                Workers
              </h1>
            </div>
          </div>
          <div className="flex items-center  gap-2">
            <div className="flex items-center justify-center p-3 bg-[#32C36C] rounded-full text-white">
              <ContactIcon className="md:w-8 md:h-8 w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs md:text-base text-balance text-slate-400">
                Free
              </p>
              <h1 className=" md:text-xl font-bold text-balance text-black">
                Consultation
              </h1>
            </div>
          </div>
          <div className="flex items-center  gap-2">
            <div className="flex items-center justify-center p-3 bg-[#32C36C] rounded-full text-white">
              <AiFillCustomerService className="md:w-8 md:h-8 w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs md:text-base text-balance text-slate-400">
                Customer
              </p>
              <h1 className=" md:text-xl font-bold text-balance text-black">
                Support
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:w-1/2 ">
        <div className="relative h-[500px] md:h-[600px]">
          <Image
            src="/images/feature.jpg"
            alt="Why Choose Us"
            fill
            className="md:w-full md:h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

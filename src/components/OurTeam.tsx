import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { Card } from "./ui/card";

const OurTeam = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-16 py-10 px-8 font-sans">
      <div className="flex flex-col gap-2 items-center justify-center text-center max-w-2xl mx-auto">
        <h1 className="text-lg md:text-xl font-bold text-balance text-[#32C36C] ">
          Team Members
        </h1>
        <p className="text-xl md:text-3xl font-bold text-black text-center">
          Experience Team Members
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full md:max-w-6xl mx-auto">
        {[
          {
            name: "John Doe",
            designation: "CEO",
            img: "/images/team-2.jpg",
          },
          {
            name: "Wilfred Curtis",
            designation: "Engineer",
            img: "/images/team-1.jpg",
          },
          {
            name: "Thomas Edison",
            designation: "Marketer",
            img: "/images/team-3.jpg",
          },
        ].map((member, index) => (
          <Card
            key={index}
            className="flex flex-col gap-3 border-none rounded-lg w-[90%] md:w-full mx-auto"
          >
            <div className="flex gap-5">
              <div className="relative h-96 w-[85%] rounded-r-full">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover rounded-r-full"
                />
              </div>
              <div className=" w-[15%] flex flex-col justify-end gap-4 ">
                <div className="flex items-center justify-center p-3 rounded-full text-[#32C36C] hover:text-white hover:bg-[#32C36C] border border-[#32C36C] w-fit">
                  <FaFacebook className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-center p-3 rounded-full text-[#32C36C] hover:text-white hover:bg-[#32C36C] border border-[#32C36C] w-fit">
                  <FaInstagram className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-center p-3 rounded-full text-[#32C36C] hover:text-white hover:bg-[#32C36C] border border-[#32C36C] w-fit">
                  <FaYoutube className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 p-2">
              <h1 className=" font-bold text-xl text-black">{member.name}</h1>
              <p className="text-sm md:text-base text-slate-400">
                {member.designation}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

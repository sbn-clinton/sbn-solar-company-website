"use client";

import { AwardIcon, Check } from "lucide-react";
import { Card } from "./ui/card";
import { FaUsers } from "react-icons/fa6";
import { GrUserSettings } from "react-icons/gr";
import CountUp from "./Countup";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Statistics = () => {
  return (
    <div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-4 md:gap-16 justify-between items-center px-4 py-10 md:py-20">
        {[
          {
            icon: <FaUsers className="w-6 h-6 text-white" />,
            number: 1987,
            title: "Happy Customers",
            description: "We have a great reputation for our customers",
          },
          {
            icon: <Check className="w-6 h-6 text-white" />,
            number: 3980,
            title: "Project Done",
            description: "We have completed over 200 projects",
          },
          {
            icon: <AwardIcon className="w-6 h-6 text-white" />,
            number: 4532,
            title: "Awards Won",
            description:
              "Our dominance in the industry has been recognized by many",
          },
          {
            icon: <GrUserSettings className="w-6 h-6 text-white" />,
            number: 9884,
            title: "Expert Workers",
            description:
              "Team of professionals who are dedicated to providing the best",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="flex flex-col gap-3 p-3 border-0 border-none shadow-none w-full">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center md:h-14 md:w-14 w-10 h-10 rounded-full bg-[#32C36C] p-2">
                  {item.icon}
                </div>
                <CountUp targetNumber={item.number} />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="md:text-xl font-bold">{item.title}</h1>
                <p className="text-xs md:text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;

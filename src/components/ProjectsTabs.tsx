"use client";

import { Card } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";

export function ProjectsTabs() {
  return (
    <Tabs defaultValue="all" className="w-full md:max-w-6xl mx-auto space-y-6">
      <TabsList className="flex gap-1 p-2 md:p-4 items-center justify-between md:max-w-[40%] mx-auto w-fit">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="solarpanels">Solar Panels</TabsTrigger>
        <TabsTrigger value="windturbines">Wind Turbines</TabsTrigger>
        <TabsTrigger value="hydropowerplants">Hydropower Plants</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:max-w-6xl mx-auto">
          {[
            {
              title: "Solar Panels",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
              img: "/images/img1.jpg",
            },
            {
              title: "Wind Turbines",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
              img: "/images/img2.jpg",
            },
            {
              title: "Hydropower Plants",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
              img: "/images/img3.jpg",
            },
            {
              title: "Installations",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
              img: "/images/img4.jpg",
            },
            {
              title: "Maintenance & Repairs",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
              img: "/images/img5.jpg",
            },
            {
              title: "Warehousing & Solar Systems",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
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
              <Card className="flex flex-col gap-3 border-none rounded-lg">
                <div className="relative h-52 w-full rounded-t-lg">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-4 p-2">
                  <h1 className=" font-bold text-balance text-[#32C36C] underline underline-offset-4">
                    {service.title}
                  </h1>
                  <p className="text-xl text-black font-bold">
                    {service.descriptions}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="solarpanels">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:max-w-6xl mx-auto">
          {[
            {
              title: "Installations",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
              img: "/images/img4.jpg",
            },
            {
              title: "Maintenance & Repairs",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
              img: "/images/img5.jpg",
            },
            {
              title: "Warehousing & Solar Systems",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
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
              <Card className="flex flex-col gap-3 border-none rounded-lg">
                <div className="relative h-52 w-full rounded-t-lg">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-4 p-2">
                  <h1 className=" font-bold text-balance text-[#32C36C] underline underline-offset-4">
                    {service.title}
                  </h1>
                  <p className="text-xl text-black font-bold">
                    {service.descriptions}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="windturbines">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:max-w-6xl mx-auto">
          {[
            {
              title: "Solar Panels",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
              img: "/images/img1.jpg",
            },
            {
              title: "Wind Turbines",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
              img: "/images/img2.jpg",
            },
            {
              title: "Hydropower Plants",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
              img: "/images/img3.jpg",
            },
            {
              title: "Installations",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
              img: "/images/img4.jpg",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut", delay: 1 }}
            >
              <Card className="flex flex-col gap-3 border-none rounded-lg">
                <div className="relative h-52 w-full rounded-t-lg">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-4 p-2">
                  <h1 className=" font-bold text-balance text-[#32C36C] underline underline-offset-4">
                    {service.title}
                  </h1>
                  <p className="text-xl text-black font-bold">
                    {service.descriptions}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="hydropowerplants">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full md:max-w-6xl mx-auto">
          {[
            {
              title: "Solar Panels",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
              img: "/images/img1.jpg",
            },
            {
              title: "Maintenance & Repairs",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
              img: "/images/img5.jpg",
            },
            {
              title: "Warehousing & Solar Systems",
              descriptions:
                "We Are pioneers of solar & renewable energy industry",
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
              <Card className="flex flex-col gap-3 border-none rounded-lg">
                <div className="relative h-52 w-full rounded-t-lg">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-4 p-2">
                  <h1 className=" font-bold text-balance text-[#32C36C] underline underline-offset-4">
                    {service.title}
                  </h1>
                  <p className="text-xl text-black font-bold">
                    {service.descriptions}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}

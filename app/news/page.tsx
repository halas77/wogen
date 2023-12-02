"use client"

import { news_page } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div className="bg-gray-50 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="w-full text-black">
          <div className="mx-6 md:mx:18 lg:mx-32 py-8">
            <h1 className="font-bold text-2xl font-sans text-slate-950 mb-5">
              Latest <span className="px-3 text-white bg-orange-500">News</span>
            </h1>
          </div>
        </div>
        {news_page.map((item, index) => (
          <div
            key={item.id}
            className="md:flex justify-center gap-14 items-center pb-16 mx-3"
          >
            <Image
              src={item.img}
              width={400}
              height={300}
              alt="Image"
              className="mb-2 md:mb-0 md:flex rounded-md"
            />
            <div>
              <h2 className="text-blue-950 text-xl md:text-xl font-bold">
                {item.title}
              </h2>
              <p className="max-w-xl py-3 pb-8 text-gray-700 "> {item.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const heroContent = {
  text: {
    subheading: "Empowering Ventures, Amplifying Success.",
    heading: "Diversified Excellence One Purpose.",
    desc: "At Wogen Holdings, diversity fuels our success. Across transportation, import-export, and education sectors, we champion innovation and unity. Each subsidiary operates independently, yet synergizes under our collective commitment to excellence, driving growth and fostering transformative solutions.",
  },
};

const Hero = () => {
  return (
    <section className="md:mt-28 lg:pb-16 mt-20 md:py-8 md:px-10 max-sm:py-10 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="lg:w-5/12 mb:10 lg:mb-0">
              <span className="inline-block font-sans text-heading font-semibold relative mb-7 before:content-['']  before:bg-white before:absolute before:w-2/3 before:bottom-0 before:z-[-1] before:left-0 before:top-0">
                <span className="border-b py-1 border-[#cd9c61]">
                  Empowering Ventures{" "}
                </span>{" "}
                Amplifying Success.
              </span>

              {heroContent.text.heading && (
                <h1 className="text-4xl lg:text-[46px] font-extrabold text-heading mb-7">
                  {heroContent.text.heading}
                </h1>
              )}

              {heroContent.text.desc && (
                <p className="leading-relaxed text-gray-500 font-sans mb-10">
                  {heroContent.text.desc}
                </p>
              )}

              <div className="flex max-md:flex-col md:space-x-3 text-center ">
                <Link
                  href="/about"
                  className="text-[16px] max-md:mb-3 py-3 px-10 max-md:text-lg  bg-[#cd9c61] text-slate-50 font-bold font-sans rounded-lg duration-300 transition-all ease-in-out hover:bg-orange-300 border hover:border-sky-200 hover:shadow-lg inline-block relative top-0 hover:-top-1"
                >
                  About us
                </Link>
                <Link
                  href="/contact"
                  className="text-[16px] max-md:mb-3 py-3 px-10 max-md:text-lg  border-[#cd9c61] text-slate-900 font-bold font-sans rounded-lg duration-300 transition-all ease-in-out hover:bg-orange-300 border hover:border-sky-200 hover:shadow-lg inline-block relative top-0 hover:-top-1"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="relative lg:w-6/12 space-y-2 max-lg:mt-3 flex justify-center i">
              <div className="grid grid-cols-2 col-span-2 gap-5 justify-center items-center rounded-full h-[420px] w-[420px] border bg-orange-100 p-3">
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="/ie3.png"
                  alt="/"
                />
                <img
                  className="row-span-1 object-cover w-full h-full rounded-lg"
                  src="/realstateq.png"
                  alt="/"
                />
                <img
                  className="row-span-1 object-cover w-full h-full rounded-lg"
                  src="/taxi1.png"
                  alt="/"
                />
                <img
                  className="object-cover w-full h-full rounded-lg"
                  src="/educationals.png"
                  alt="/"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

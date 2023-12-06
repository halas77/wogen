"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTiktok, FaInstagram, FaTelegram } from "react-icons/fa";
import Companies from "@/components/Companies";

const solution = {
  text: {
    headingTitle: "Wogen Holdings",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, qui quasi debitis aut quam explicabo nam mollitia cupiditate, natus vel accusantium iusto obcaecati aliquid inventore adipisci magnam tenetur quis aliquam blanditiis. Illo repellat delectus aut aliquid a quae expedita veniam iusto assumenda aliquam libero sapiente, et aspernatur fugiat est ad tenetur ab mollitia in. Laudantium, quaerat suscipit. Quas nam, dolorum optio, aut ipsa blanditiis molestias repudiandae sequi atque saepe ratione? Aliquam ea temporibus, qui ex dignissimos voluptas neque necessitatibus vel non nobis possimus fuga esse placeat unde magni quidem eveniet dolores? Asperiores ea quidem vero voluptas nobis animi a modi. ",
  },
  images: {
    img1: "/about.jpg",
    img3: "/",
    img2: "/import.jpeg",
  },

  experience: {
    year: "13+",
    label: "years of experience",
  },
};

const page = () => {
  return (
    <section className="mt-28 overflow-hidden pb-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="container px-4 mx-auto">
        <div className="absolute rounded-bl-full top-20 right-0 h-32 w-32 bg-[#cd9c61]"></div>
          <div className="lg:flex space-x-2 justify-between">
            <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20">
              <div className="flex gap-2">
                <div className="flex flex-col space-y-2">
                  <div></div>
                  <div className="flex justify-end gap-2">
                    <div className="w-4/12 flex">
                      <div className="ml-auto"></div>
                    </div>
                    <div className="w-6/12"></div>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex flex-col gap-2">
                    <div>
                      <div className="bg-greenLight w-10 h-10 lg:w-20 lg:20 rounded-2xl rounded-tr-[200px]"></div>
                    </div>
                    <div>
                      <Image
                        src={solution.images.img2}
                        width={370}
                        height={400}
                        alt="Image"
                        className="object-contain h-full w-full rounded-lg shadow-2xl xl:w-[500px]"
                      />
                    </div>
                    {solution.experience.label && (
                      <div>
                        <div className="p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5">
                          <strong className="block font-bold text-primary text-xl lg:text-5xl">
                            {solution.experience.year}
                          </strong>
                          <span>{solution.experience.label}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 relative z-10 flex flex-col justify-center">
              {solution.text.headingTitle && (
                <h2 className="text-blue-950 font-sans capitalize text-2xl lg:text-4xl font-bold mb-5">
                  {solution.text.headingTitle}
                </h2>
              )}
              {solution.text.desc && (
                <p className="text-body leading-relaxed mb-10 2xl:mr-20">
                  {solution.text.desc}
                </p>
              )}

              <div className="flex max-md:flex-col md:space-x-3 max-sm:mx-auto">
                <Link
                  href="/conact"
                  className="text-[16px] max-md:mb-3 py-4 px-14 max-md:text-lg bg-[#cd9c61] text-slate-50 font-bold font-sans rounded-xl duration-300 transition-all ease-in-out hover:bg-orange-300 border hover:border-orange-300 hover:shadow-lg inline-block relative top-0 hover:-top-1"
                >
                  Contact us
                </Link>
                <Link
                  href="/services"
                  className="text-[16px] max-md:my-3 py-4 px-14 border-2 border-[#cd9c61] text-gray-900 max-md:text-lg font-bold font-sans rounded-xl duration-300 transition-all ease-in-out hover:bg-gray-50 hover:shadow-lg inline-block relative top-0 hover:-top-1"
                >
                  Our services
                </Link>
              </div>
            </div>
          </div>
          <Companies />
        </div>
      </motion.div>
    </section>
  );
};

export default page;

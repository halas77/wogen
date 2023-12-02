"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { gallary_page } from "@/constants";

const Gallary = () => {
  return (
    <div className="w-full text-slate-900 bg-light">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
      >
        <div className="mt-20 mx-4 md:mx:18 lg:mx-32 py-12">
          <h1 className="font font-bold text-3xl font-sans mb-10">
            OUR{" "}
            <span className="font-sans border-b bg-orange-600 px-1 text-white">
              Gallary
            </span>
          </h1>
          <div className=""></div>
          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {gallary_page.map((item) => (
              <div key={item.id} className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover-black/30 transition-shadow">
                <div className="h-72 w-72">
                  <img
                    className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 "></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                  <h1 className="text-2xl font-bold text-white">
                    {" "}
                    {item.title}
                  </h1>
                  <p className="text-md italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {" "}
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Gallary;

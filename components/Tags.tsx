import { gallary } from "@/constants";
import Link from "next/link";
import React from "react";

const Tags = () => {
  return (
    <>
      <div className="w-full text-black">
        <div className="mx-6 md:mx:18 lg:mx-32 py-5">
          <h1 className="font font-bold text-xl lg:text-2xl font-sans flex justify-start">
            Gallary
          </h1>
        </div>
      </div>
      <div className="flex p-2 pb-10 items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {gallary.map((item, index) => (
            <div key={item.id} className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover-black/30 transition-shadow">
              <div className="h-72 md:w-72">
                <img
                  className="h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 "></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
                <h1 className="text-2xl font-bold text-white"> {item.title}</h1>
                <p className="text-md italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {" "}
                  {item.desc}
                </p>
                <Link href="/gallary" >
                <button className="rounded-full bg-[#cd9c61] py-2 px-3.5 text-sm capitalize text-white">
                  {" "}
                  See more
                </button>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tags;

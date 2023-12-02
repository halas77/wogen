"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import { MdHomeWork } from "react-icons/md";


const Counter = () => {
  const [Counter, setCounter] = useState(false);
  return (
    <div className="py-5 bg-gray-100 flex">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-6">
          <div className="flex-1 xl:border-r border-gray-300 flex justify-center items-center gap-5">
            <div className="flex flex-col items-center">
              <div className="text-4xl xl:text-6xl font-bold text-[#cd9c61] mb-1">
                <CountUp start={0} end={7} duration={3}></CountUp>
              </div>
              <div className="text-slate-950 text-xl font-semibold">
                Companies
              </div>
            </div>
          </div>
          <div className="flex-1 xl:border-r border-gray-300 flex flex-col items-center">
            <div className="text-4xl xl:xl:text-6xl font-bold text-[#cd9c61] mb-1">
              <CountUp start={0} end={234} duration={3}></CountUp>+
            </div>
            <div className="text-slate-950 text-xl font-semibold">
              Employees
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-4xl xl:xl:text-6xl font-bold text-[#cd9c61] mb-1">
              <CountUp start={0} end={13} duration={3}></CountUp>+
            </div>
            <div className="text-slate-950 text-xl font-semibold">
              Years
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

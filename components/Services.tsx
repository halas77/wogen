import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-gray-50 overflow-hidden">
      <div className="hidden xl:flex absolute left-5 z-0 w-52 h-52 bg-orange-100 rounded-b-full"></div>
      <div className="w-full text-black">
        <div className="mx-6 md:mx:18 lg:mx-32 py-8">
          <h1 className="font font-bold text-xl lg:text-3xl font-sans mb-3 flex justify-center mx-auto">
            Our Services
          </h1>
          <p className="text-slate-700 max-w-2xl pb-5 flex justify-center mx-auto text-center text-sm lg:text-md">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            ducimus molestias distinctio quis voluptatem enim, dolores, iusto
            impedit esse ipsum officiis aperiam obcaecati ad magni dolor nostrum
            pariatur laborum iure architecto aliquid vitae, odio sequi. Minus
            deserunt hic quisquam assumenda?
          </p>
        </div>
      </div>
      <div className="md:flex justify-center gap-14 items-center pb-16 mx-3">
        <Image
          src={"/import.jpeg"}
          width={300}
          height={200}
          alt="Image"
          className="mb-2 md:mb-0 md:flex rounded-md mx-auto md:mx-0"
        />
        <div>
          <h2 className="text-blue-950 text-xl md:text-xl font-bold text-center md:text-start">
            Import and Export
          </h2>
          <p className="max-w-xl py-3 pb-8 text-gray-700 text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            iusto voluptatibus? Error quae numquam pariatur ipsa officiis itaque
            quam eaque dolorum harum est sequi, esse, quod dignissimos? Aut
            minima soluta nostrum, sapiente modi totam. Dolor id ipsum delectus
            velit ut sed similique fugit ipsa consequatur. Iure porro dolorum
            aliquid fuga?
          </p>
          <button className="mx-auto md:mx-0 flex justify-center items-center border bg-orange-600 hover:bg-orange-800 duration-300 ease-in-out rounded-lg px-8 py-3 text-slate-50 font-bold">
            <Link href="/">Read more</Link>
            <span className="ml-2 flex justify-center items-center">
              <FaArrowRight size={12} className="text-white" />
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-14 items-center pb-16 mx-3">
        <div>
          <h2 className=" text-blue-950 text-xl md:text-xl font-bold md:py-3 text-center md:text-start">
            Transportation Sector
          </h2>
          <p className="max-w-xl py-3 pb-8 text-gray-700 text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            iusto voluptatibus? Error quae numquam pariatur ipsa officiis itaque
            quam eaque dolorum harum est sequi, esse, quod dignissimos? Aut
            minima soluta nostrum, sapiente modi totam. Dolor id ipsum delectus
            velit ut sed similique fugit ipsa consequatur. Iure porro dolorum
            aliquid fuga?
          </p>
          <button className="mx-auto md:mx-0 flex justify-center items-center border bg-orange-600 hover:bg-orange-800 duration-300 ease-in-out rounded-lg px-8 py-3 text-slate-50 font-bold">
            <Link href="/">Read more</Link>
            <span className="ml-2 flex justify-center items-center">
              <FaArrowRight size={12} className="text-white" />
            </span>
          </button>
        </div>
        <Image
          src={"/taxi1.png"}
          width={300}
          height={200}
          alt="Image"
          className="md:flex rounded-md mx-auto md:mx-0"
        />
      </div>
      <div className="md:flex justify-center gap-14 items-center pb-16 mx-3">
        <Image
          src={"/realstateq.png"}
          width={300}
          height={200}
          alt="Image"
          className="mb-2 md:mb-0 md:flex rounded-md mx-auto md:mx-0"
        />
        <div>
          <h2 className="text-blue-950 text-xl md:text-xl font-bold text-center md:text-start">
            Realstate Construction
          </h2>
          <p className="max-w-xl py-3 pb-8 text-gray-700 text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            iusto voluptatibus? Error quae numquam pariatur ipsa officiis itaque
            quam eaque dolorum harum est sequi, esse, quod dignissimos? Aut
            minima soluta nostrum, sapiente modi totam. Dolor id ipsum delectus
            velit ut sed similique fugit ipsa consequatur. Iure porro dolorum
            aliquid fuga?
          </p>
          <button className="mx-auto md:mx-0 flex justify-center items-center border bg-orange-600 hover:bg-orange-800 duration-300 ease-in-out rounded-lg px-8 py-3 text-slate-50 font-bold">
            <Link href="/">Read more</Link>
            <span className="ml-2 flex justify-center items-center">
              <FaArrowRight size={12} className="text-white" />
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-center gap-14 items-center pb-16 mx-3">
        <div>
          <h2 className=" text-blue-950 text-xl md:text-xl font-bold md:py-3 text-center md:text-start">
            Educational Sector
          </h2>
          <p className="max-w-xl py-3 pb-8 text-gray-700 text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            iusto voluptatibus? Error quae numquam pariatur ipsa officiis itaque
            quam eaque dolorum harum est sequi, esse, quod dignissimos? Aut
            minima soluta nostrum, sapiente modi totam. Dolor id ipsum delectus
            velit ut sed similique fugit ipsa consequatur. Iure porro dolorum
            aliquid fuga?
          </p>
          <button className="flex mx-auto md:mx-0 justify-center items-center border bg-orange-600 hover:bg-orange-800 duration-300 ease-in-out rounded-lg px-8 py-3 text-slate-50 font-bold">
            <Link href="/">Read more</Link>
            <span className="ml-2 flex justify-center items-center">
              <FaArrowRight size={12} className="text-white" />
            </span>
          </button>
        </div>
        <Image
          src={"/Educational1.png"}
          width={300}
          height={200}
          alt="Image"
          className="md:flex rounded-md mx-auto md:mx-0"
        />
      </div>
    </div>
  );
};

export default Services;

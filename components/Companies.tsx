import { wegen_data } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Companies = () => {
  return (
    <div className="p-2 m-2 pt-20 w-full flex flex-col justify-center items-center">
      <div className="flex gap-2 mt-5">
        {wegen_data.map((item, index) => (
          <Link
            key={item.img}
            href={item.href}
            className="border p-4 flex justify-center items-center rounded-2xl"
          >
            <Image
              src={item.img}
              width={150}
              height={50}
              alt="Image"
              className="flex justify-center items-center"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Companies;

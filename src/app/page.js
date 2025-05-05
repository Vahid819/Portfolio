import React from "react";
import { Background } from "@/../public/index";
import Image from "next/image";

function page() {
  return (
    <>
      <main className="w-full h-auto  flex items-center border border-black">
        <div className="w-[50%] h-32 flex items-center justify-center">
          text
        </div>
        <div className="w-[50%] h-full flex justify-center items-center">
          <Image
          src={Background}
          width={500}
          height={500}
          alt="This is a image"
          />
        </div>
      </main>
    </>
  );
}

export default page;

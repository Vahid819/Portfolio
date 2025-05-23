import React from "react";
import { Background, Download, Profileimage} from "@/../public/index";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Services from "@/components/services";
import Projects from "@/components/Projects";


function page() {
  return (
    <>
      <main
        className={`w-full mx-auto h-screen md:rounded-bl-[300px] mb-2 px-1 flex md:flex-row flex-col items-center border`}
      >
        <div className="md:w-[50%] h-auto w-full mt-3">
          <div className="mx-auto w-[80%] ">
            <h1 className="md:text-6xl text-3xl">Hello,</h1>
            <h1 className="flex items-center">
              <span className="md:text-5xl text-4xl">I'm</span>
              <span className="md:text-5xl text-5xl text-[#2cc295]">
                Vahid Momin
              </span>
            </h1>
            <h1 className="text-xl text-justify">
              I enjoy taking challenges | Building Complex software | Build a
              Full-Stack App in a Weekend | Train a Custom AI Model | Build a
              Chatbot Without APIs | cybersecurity challenges in a month |
              Deploy a Scalable App on AWS/Azure/GCP | Real-World System Design
            </h1>
          </div>
          <section
            id="socialmedi"
            className="w-full items-center justify-center gap-2 flex mt-3 mx-auto"
          >
            <Link
              href={
                "https://www.instagram.com/_vahid_1908?igsh=dTQwOHU4NTM2YjJh"
              }
            >
              <Instagram size={30} />
            </Link>
            <Link href={""}>
              <Facebook size={30} />
            </Link>
            <Link href={"https://www.linkedin.com/public-profile/settings"}>
              <Linkedin size={30} />
            </Link>
            <Link href={"https://github.com/Vahid819"}>
              <Github size={30} />
            </Link>
          </section>
        </div>
        <div className="md:w-[50%] w-full h-full flex justify-center items-center">
          <Image
            src={Background}
            width={600}
            height={700}
            alt="This is a image"
            className="md:block hidden"
          />
          <Image
            src={Download}
            width={500}
            height={500}
            alt="This is a image"
            className="md:hidden block"
          />
        </div>
      </main>
      <section id="about" className={`md:bg-[url(/aboutbanar.png)] bg-no-repeat bg-cover w-full md:h-screen h-screen md:p-0 p-3 md:flex`}>
        <div className="md:w-[50%] flex flex-col items-center justify-center">
          <div className="flex flex-col md:w-lg w-full">
            <p className="text-lg md:w-56 w-52 uppercase">Let's build future your creative ideas and my skill</p>
            <h1 className="md:text-7xl text-6xl md:mb-3 uppercase text-[#2cc295]">About me</h1>
          </div>
          <div className="md:w-lg mx-auto">
            <h1 className="text-lg">A story of my journey</h1>
            Hi! I'm a passionate programmer and full-stack developer who loves
            turning ideas into reality through code. I enjoy tackling complex
            challenges with creative problem-solving and building efficient,
            scalable solutions. Whether it's designing seamless user experiences
            or optimizing backend systems, I thrive on making technology work
            smarter.
          </div>
          <div className="md:w-lg mx-auto gap-4 flex md:my-0 my-4">
            <Button className={"font-raleway"}>
              <Link href={"#contact"}>Contact me</Link>
            </Button>
            <Button>
              <Link href={"/Resume.pdf"} download>
                Resume
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:w-[50%] flex md:m-0 my-14">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-10"
            >
            <path
            // className="drop-shadow-green-500 "
              fill="#2cc295"
              d="M42.5,-67.3C55.7,-57.5,67.6,-46.9,74.3,-33.6C80.9,-20.2,82.4,-4.1,81.2,12.4C80,28.9,76.2,45.8,65.8,56C55.4,66.2,38.5,69.7,21.8,74.9C5.2,80,-11.2,86.8,-25.1,83.6C-39,80.3,-50.5,67,-59,53.3C-67.6,39.6,-73.1,25.4,-77.9,9.6C-82.7,-6.3,-86.8,-23.9,-81.5,-38C-76.3,-52.1,-61.7,-62.7,-46.6,-71.6C-31.4,-80.4,-15.7,-87.5,-0.6,-86.6C14.6,-85.8,29.2,-77,42.5,-67.3Z"
              transform="translate(100 100)"
            />
          </svg>
          <div className="flex justify-center items-center w-full h-full z-30">
            <Image
              src={Profileimage}
              alt="Profileimage"
              className=" md:min-w-md w-60"
            />
          </div>
        </div>
      </section>
      <section id="service" className={`md:bg-[url(/projectbanar.png)] bg-no-repeat bg-cover flex flex-col justify-center items-center w-full h-screen  md:m-0 ` }>
        <div>
          <h3 className="w-56  flex text-center  flex-col mx-auto uppercase">What i will do for you</h3>
          <h1 className="uppercase text-4xl text-[#2cc295] w-56 text-center">Services</h1>
        </div>
        <div className="w-[90%] my-6">
          <Services />
        </div>
      </section>
      <section id="project">
        <div className="flex gap-3 justify-center">
          <h2 className="text-4xl text-[#2cc295]">Project</h2>
          <h1 className="text-4xl text-[#2cc295]">Portfolio</h1>
        </div>
        <div>
          <Projects />
        </div>
      </section>
      <section id="language">

      </section>
      <section id="contact">

      </section>
    </>
  );
}

export default page;

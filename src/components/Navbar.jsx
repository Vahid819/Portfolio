"use client";
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/../public/index";
import { AlignJustify } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  const [menu, setMenu] = useState(false);
  
  // console.log(menu);
  return !menu ? (
    <nav className="w-full h-auto fixed z-50 flex items-center md:justify-around justify-between bg-[#00DF81]">
      <section className="p-5">
        <Image
          src={Logo}
          height={50}
          width={50}
          alt="logo"
          className="rounded-full"
        />
      </section>
      <section className={`flex gap-2 items-center p-5`}>
        <Menubar className={"bg-transparent border md:flex hidden"}>
          <MenubarMenu>
            <Link href={"/"}>
              <MenubarTrigger className={"text-lg"}>Home</MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href={"#about"}>
              <MenubarTrigger className={"text-lg"}>About</MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
          <Link href={"#service"}>
          <MenubarTrigger className={"text-lg"}>Services</MenubarTrigger>
          </Link>
        </MenubarMenu>
          <MenubarMenu>
            <Link href={"#project"}>
              <MenubarTrigger className={"text-lg"}>Projects</MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href={"#languages"}>
              <MenubarTrigger className={"text-lg"}>Languages</MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href={"#contact"}>
              <MenubarTrigger className={"text-lg"}>Contact</MenubarTrigger>
            </Link>
          </MenubarMenu>
        </Menubar>
        <AlignJustify
          className="md:hidden block"
          onClick={() => setMenu(!menu ? true : false)}
        />
        <ModeToggle />
      </section>
    </nav>
  ) : (
    <nav className="w-full fixed h-screen flex flex-col transition bg-[#00DF81]">
      <div className="flex justify-between w-full">
        <section className="p-5">
          <Image
            src={Logo}
            height={50}
            width={50}
            alt="logo"
            className="rounded-full"
          />
        </section>
        <section className={`flex items-center px-5 py-8`}>
          <AlignJustify
            className="md:hidden block"
            onClick={() => setMenu(!menu ? true : false)}
          />
          <ModeToggle className={"bg-transparent"} />
        </section>
      </div>
      <Menubar
        className={
          "w-full h-full bg-transparent border-none flex flex-col justify-center items-center "
        }
      >
        <MenubarMenu>
          <Link href={"/"}>
            <MenubarTrigger onClick={()=> setMenu(!menu ? true : false)} className={"text-2xl"}>Home</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href={"#about"}>
            <MenubarTrigger onClick={(()=> setMenu(!menu ? true : false))} className={"text-2xl"}>About</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href={"#service"}>
          <MenubarTrigger onClick={(()=> setMenu(!menu ? true : false))} className={"text-2xl"}>Services</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href={"#projects"}>
            <MenubarTrigger onClick={(()=> setMenu(!menu ? true : false))} className={"text-2xl"}>Projects</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href={"#languages"}>
            <MenubarTrigger onClick={(()=> setMenu(!menu ? true : false))} className={"text-2xl"}>Languages</MenubarTrigger>
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href={"#contact"}>
          <MenubarTrigger onClick={(()=> setMenu(!menu ? true : false))} href={"#contact"} className={"text-2xl"}>
            Contact
          </MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
}

export default Navbar;

'use client'
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Layers, LaptopMinimalCheck } from "lucide-react";

const services = [
  {
    logo: Code,
    title: "software",
    description:
      "I build end-to-end web and software solutions, handling both frontend (UI/UX) and backend (APIs, databases, cloud) development. I deliver fast, scalable, and secure applications tailored to your needs—from concept to deployment.",
  },
  {
    logo: Layers,
    title: "Web design",
    description:
      "I transform Figma designs into fully functional, high-performance websites and web applications. As a full-stack developer, I bridge the gap between design and development, ensuring pixel-perfect implementation while building scalable backend systems.",
  },
  {
    logo: LaptopMinimalCheck,
    title: "Graphic design",
    description:
      "Boost your brand with high-quality, custom designs—logos, business cards, social media graphics, packaging, ads, and more. We combine creativity + strategy to make your brand stand out. Fast, affordable, and 100% satisfaction guaranteed!",
  },
];

function Services() {
  return (
    <div className="md:flex flex-1 flex-wrap gap-4">
      {services.map((card, index) => {
        const IconComponent = card.logo;
        return (
          <Card key={index} className="flex-1 md:my-0 my-3 hover:bg-[#2cc295] group transition duration-500 hover:scale-105">
            <CardContent className="p-6 group-hover:text-black">
              <div className="mb-4">
                <IconComponent size={60} className="text-[#2cc295] group-hover:text-black" />
              </div>
              <CardTitle className="mb-2 text-2xl capitalize group-hover:text-black">{card.title}</CardTitle>
              <CardDescription className={"text-lg group-hover:text-black"}>{card.description}</CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default Services;
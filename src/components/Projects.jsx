import React from 'react'
import {Pharmacy, Portfolio} from '@/../public/index'
import { 
    Card,
    CardHeader,
    CardDescription,
    CardTitle,
    CardContent,
   } from "@/components/ui/card";
import Image from 'next/image';
  
  const projects = [
    {
      img:Pharmacy,
      title: "Pharmacy Software",
      discription: "This is my pharmacy saas project"
    }, 
    {
        img: Portfolio,
        title: "Portfolio",
        discription: "This is my portfolio website"
    }
  ]

function Projects() {
  return (
    <div className='flex justify-around'>
        {
            projects.map((project, index)=>(
                <Card key={index} className="md:my-0 my-3 hover:bg-[#2cc295] group transition duration-500 hover:scale-105">
                    <CardContent className="p-6 group-hover:text-black">
                        <div>
                            <Image 
                            src={project.img}
                            alt={project.title}
                            width={400}
                            height={400}
                            />
                        </div>
                        <div>
                            <CardTitle className="mb-2 text-2xl capitalize group-hover:text-black">{project.title}</CardTitle>
                            <CardDescription className={"text-lg group-hover:text-black"}>{project.discription}</CardDescription>
                        </div>
                    </CardContent>
                </Card>
            ))
        }
    </div>
  )
}

export default Projects
"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "SNKR",
    description:
      "Proyecto de un ecommerce para negocio multimarca de venta de calzado.",
    stack: [{ name: "JavaScript" }, { name: "HTML" }, { name: "CSS" }],
    image: "/assets/SNKR2.png",
    live: "",
  },
  {
    num: "02",
    category: "frontend y backend",
    title: "HAMMER X",
    description:
      "Proyecto para un gimnasio con amplio staff el cual solicitaba un sistema online para gestionar/asignar de tareas y novedades incluyendo el manejo de postulaciones de potenciales empleados, en el back se utilizo Sequelize con modelos y controladores para un mejor manejo de los datos.",
    stack: [
      { name: "javaScript" },
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "MySQL" },
    ],
    image: "/assets/HAMMER1.png",
    live: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "GO PACK",
    description:
      "Proyecto para empresa de logistica en plan institucional, el mismo muestra el tipo de servicio prestado, las regiones en las que tienen presencia y un medio para contactarlos ",
    stack: [
      { name: "javaScript" },
      { name: "React.js" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/GOPACK1.png",
    live: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "Azucar Andina",
    description:
      "Proyecto para fraccionadora / distribuidora de Azucar en plan institucional y porporcionando varios medios para contactarlos.",
    stack: [
      { name: "javaScript" },
      { name: "React.js" },
      { name: "Tailwind.css" },
    ],
    image: "/assets/ANDINA1.png",
    live: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "Ragnar GYM",
    description:
      "Proyecto para un gimnasio mostrando su vision, marcas con la que trabaja, planes de abono y programas de entrenamiento ofrecidos tambien un medio para contactarlos",
    stack: [{ name: "javaScript" }, { name: "HTML" }, { name: "CSS" }],
    image: "/assets/RAGNAR1.png",
    live: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'} }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto text-black">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[32px] font-bold leading-none text-black group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-black/70">{project.description}</p>
              <ul className="flex ">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-xl text-accent font-semibold"
                    >
                      {item.name} {index !== project.stack.length - 1 && "|"}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-accent/30"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[180px] h-[50px] rounded-full bg-accent/50 flex justify-center items-center group mt-2">
                        <p className="text-black text-xl group-hover:text-white font-bold">
                          LIVE DEMO!
                        </p>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Ir al proyecto</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-accent/20">
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill alt="" />
                    </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent/50 hover:bg-accent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

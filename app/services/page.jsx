"use client";

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Desarrollador Web",
    description: "Como desarrollador web, ofrezco servicios completos de diseño y desarrollo de sitios web personalizados, optimizados y responsivos. Con experiencia en una variedad de tecnologías, me especializo en crear soluciones web que no solo son visualmente atractivas, sino también funcionales y fáciles de usar.",
    href: ""
  },
  {
    num: "02",
    title: "QA Manual",
    description: "Mi objetivo es proporcionar un control de calidad riguroso y detallado para garantizar que tus aplicaciones y sistemas funcionen de manera óptima y sin errores. Con un enfoque meticuloso y detallado, mediante distintos tipos de pruebas, ya sean funcionales, de usabilidad, compatibilidad o regresión con una gestion de incidencias detallada.",
    href: ""
  },
  {
    num: "03",
    title: "QA Automation",
    description: "Con la automatización de pruebas como regresiones podras mejorar la eficiencia y efectividad del proceso de QA, actualmente me encuentro perfeccionando en esta habilidad.",
    href: ""
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="win-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto text-black">
        <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: {delay: 2.4, duration: 0.4, ease:"easeIn"},
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((services,index)=>{
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{services.num}</div>
                  <Link href={services.href} className="w-[70px] h-[70px] rounded-full bg-accent/50 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-black/70 group-hover:text-accent transition-all duration-500">{services.title}</h2>
                <p className="text-black/70">{services.description}</p>
                <div className="border-b border-accent/50 w-full"></div> 
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
"use client";

import {
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiGit,
  DiMysql,
} from "react-icons/di";

import { SiPostman, SiTailwindcss, SiNextdotjs, SiCsharp } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "Algunos datos extra",
  description:
    "",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Emir Segovia",
    },
    {
      fieldName: "Experiencia",
      fieldValue: "2+ años",
    },
    {
      fieldName: "Telefono",
      fieldValue: "+54 3865 761910",
    },
    {
      fieldName: "Email",
      fieldValue: "emirvalles90@gmail.com",
    },
    {
      fieldName: "Nacionalidad",
      fieldValue: "Argentino",
    },
    {
      fieldName: "Idioma",
      fieldValue: "Castellano, Ingles",
    },
  ],
};

const experience = {
  icon: "/emir-portfolio/public/assets/badge.svg",
  title: "Mi experiencia",
  description:
    "Desde 2023 me he desempeñado como QA & Board Manager en Doors Tickets, donde he implementado y supervisado procesos de calidad y gestionado el ciclo de vida de los proyectos. Simultáneamente, desde 2024, trabajo como FullStack Developer en SoftFusion Technologies, desarrollando aplicaciones completas y soluciones tecnológicas. Además, desde 2022, he trabajado como FullStack Developer independiente, colaborando en diversos proyectos que abarcan una amplia gama de tecnologías y soluciones personalizadas para diferentes clientes.",
  items: [
    {
      company: "Doors Tickets",
      position: "QA & Board Manager",
      duration: "2023 - Presente",
    },
    {
      company: "SoftFusion Technologies",
      position: "FullStack Dev",
      duration: "2024 - Presente",
    },
    {
      company: "Freelance",
      position: "FullStack Dev",
      duration: "2022 - Presente",
    },
  ],
};

const education = {
  icon: "/emir-portfolio/public/assets/cap.svg",
  title: "Mi formación",
  description:
    "Mi formación académica incluye varios cursos uno de los mas destacados es el de Programación Fullstack de Rolling Code School (2022), a demas cuento con el título proximo a obtener de Técnico Universitario en Programación de Software de la UTN FRT (2022-2024), varios cursos de Quality Assurance donde el mas destacadoes con Underc0de - QARMY (2023), y una certificación de Postman API Fundamentals Student Expert (2023), tambien cuento con formacion en metodologias agiles, obtuve la certificación Scrum Fundamentals Certified (SFC™) de SCRUMstudy (2023) y tambien obtuve una acreditacion en Testing, Accredited Software Testing Fundamentals Certification (AICS® ASTFC) (2023).",
  items: [
    {
      institution: "Rolling Code School",
      degree: "Curso de Programacion Fullstack",
      duration: "2022",
    },
    {
      institution: "UTN FRT",
      degree: "Tec. Univ. en Programacion de software",
      duration: "2022-2024",
    },
    {
      institution: "Underc0de - QARMY",
      degree: "Curso de Quality Assurance",
      duration: "2023",
    },
    {
      institution: "Postman",
      degree: "Postman API Fundamentals Student Expert",
      duration: "2023",
    },
    {
      institution: "SCRUMstudy",
      degree: "Scrum Fundamentals Certified (SFC™)",
      duration: "2023",
    },
    {
      institution: "ASTFC",
      degree: "Testing",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "Mi stack",
  description: "Tecnologias que actualmente manejo",
  skillList: [
    {
      icon: <DiJsBadge />,
      name: "JavaScript",
    },
    {
      icon: <DiNodejsSmall />,
      name: "NodeJS",
    },
    {
      icon: <DiReact />,
      name: "React.js",
    },
    {
      icon: <SiCsharp />,
      name: "C#",
    },
    {
      icon: <DiGit />,
      name: "Git",
    },
    {
      icon: <DiMysql />,
      name: "My SQL",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Formación</TabsTrigger>
            <TabsTrigger value="skills">Stack</TabsTrigger>
            <TabsTrigger value="about">Sobre mi</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-black text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-black/70 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] text-black/70">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-accent/20 h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-star gap-1"
                        >
                          <span className="text-accent font-extrabold">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <p className="text-black/70">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-black text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-black/70 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-accent/20 h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-star gap-1"
                        >
                          <span className="text-accent font-extrabold">
                            {item.duration}
                          </span>
                          <h3 className="text-lg max-w-[260px] min-h-[100px] text-center lg:text-left text-black/70">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <p className="text-black/70">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-black">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-black/70 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="text-black/70 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return(
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-accent/20 rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize ">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-black text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-black/70 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid gird-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return(
                    <li key={index} className="text-black flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-black/70">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

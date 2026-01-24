"use client";

import {
  SiPlaywright,
  SiCypress,
  SiPostman,
  SiJira,
  SiTrello,
  SiGithubactions,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";
import { DiGit, DiJava } from "react-icons/di";
import { TbSql } from "react-icons/tb";
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
  description: "",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Emir Segovia",
    },
    {
      fieldName: "Experiencia",
      fieldValue: "3+ años",
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
      fieldName: "Ubicación",
      fieldValue: "Tucumán, Argentina",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Español, Inglés (B1)",
    },
  ],
};

const experience = {
  title: "Mi experiencia",
  description:
    "Experiencia profesional como QA Analyst, enfocado en testing manual y automatizado, validación de flujos críticos y trabajo colaborativo con equipos de desarrollo.",
  items: [
    {
      company: "Doors Tickets",
      position: "QA Analyst",
      duration: "08/2023 - Actualidad",
      description:
        "Plataforma digital para la gestión integral de eventos, ventas y control de accesos.",
      responsibilities: [
        "Responsable del diseño y ejecución de casos de prueba manuales para validar funcionalidades según criterios de aceptación, asegurando la correcta implementación de flujos críticos como accesos por DNI/QR, reportes en tiempo real y operaciones de venta.",
        "Automatización de pruebas funcionales y de regresión utilizando Playwright, así como mantenimiento y actualización del código de automatización para acompañar la evolución del producto.",
        "Trabajo colaborativo con el equipo de desarrollo para el reporte, análisis y seguimiento de defectos, ejecución de pruebas smoke y regresión en cada iteración, y gestión de tablero Kanban para garantizar un flujo de trabajo ordenado, trazable y eficiente.",
      ],
    },
    {
      company: "Softnik",
      position: "QA Analyst (Part-time)",
      duration: "10/2025 - Actualidad",
      description:
        "Plataforma cloud orientada a la gestión integral de recursos humanos, control de asistencia y administración de empleados.",
      responsibilities: [
        "Encargado del diseño y ejecución de pruebas manuales sobre funcionalidades clave como control horario, gestión de usuarios, reportes personalizados y módulos adicionales del ecosistema, validando reglas de negocio y criterios de aceptación.",
        "Trabajo colaborativo con el equipo de desarrollo para el reporte, análisis y seguimiento de defectos, ejecución de pruebas smoke y regresión en cada iteración.",
      ],
    },
  ],
};

const education = {
  title: "Mi formación",
  description:
    "Formación académica en programación e ingeniería de sistemas, complementada con certificaciones especializadas en Quality Assurance y metodologías ágiles.",
  items: [
    {
      institution: "UTN FRT",
      degree: "Ingeniería en Sistemas de Información",
      duration: "03/2026 - Actualidad",
    },
    {
      institution: "UTN FRT",
      degree: "Técnico Universitario en Programación",
      duration: "2022 - 2024",
    },
  ],
};

const certifications = {
  title: "Certificaciones",
  description:
    "Certificaciones profesionales que respaldan mis conocimientos en QA, testing y metodologías ágiles.",
  items: [
    {
      institution: "Globant University | Egg",
      degree: "Quality Control Automation",
      duration: "2024",
    },
    {
      institution: "QARMY | Underc0de",
      degree: "Quality Assurance",
      duration: "2023",
    },
    {
      institution: "AICS",
      degree: "Accredited Software Testing Fundamentals (ASTFC)",
      duration: "2023",
    },
    {
      institution: "Postman",
      degree: "API Fundamentals Student Expert",
      duration: "2023",
    },
    {
      institution: "SCRUM Study",
      degree: "SCRUM Fundamentals Certified (SFC)",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "Mi stack",
  description: "Herramientas y tecnologías que manejo actualmente",
  categories: [
    {
      name: "Testing Tools",
      skills: [
        { icon: <SiPlaywright />, name: "Playwright" },
        { icon: <SiCypress />, name: "Cypress" },
        { icon: <SiPostman />, name: "Postman" },
      ],
    },
    {
      name: "Project Management",
      skills: [
        { icon: <SiJira />, name: "Jira" },
        { icon: <SiTrello />, name: "Trello" },
      ],
    },
    {
      name: "DevOps & Version Control",
      skills: [
        { icon: <DiGit />, name: "Git" },
        { icon: <SiGithubactions />, name: "GitHub Actions" },
      ],
    },
    {
      name: "Programming Languages",
      skills: [
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <DiJava />, name: "Java" },
        { icon: <TbSql />, name: "SQL" },
      ],
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6 pb-20"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Formación</TabsTrigger>
            <TabsTrigger value="certifications">Certificaciones</TabsTrigger>
            <TabsTrigger value="skills">Stack</TabsTrigger>
            <TabsTrigger value="about">Sobre mí</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-black text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-black/70 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[450px] text-black/70">
                  <ul className="grid grid-cols-1 gap-[30px] pr-4">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-accent/20 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                        >
                          <span className="text-accent font-extrabold">
                            {item.duration}
                          </span>
                          <h3 className="text-xl font-semibold text-black">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <p className="text-black/70 font-medium">
                              {item.company}
                            </p>
                          </div>
                          <p className="text-black/60 text-sm">
                            {item.description}
                          </p>
                          {item.responsibilities && (
                            <ul className="text-black/60 text-sm space-y-2 mt-2 text-left">
                              {item.responsibilities.map((resp, respIndex) => (
                                <li key={respIndex} className="flex gap-2">
                                  <span className="text-accent mt-1">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
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
                          className="bg-accent/20 h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent font-extrabold">
                            {item.duration}
                          </span>
                          <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left text-black/70">
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

            {/* Certifications */}
            <TabsContent value="certifications" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-black text-4xl font-bold">
                  {certifications.title}
                </h3>
                <p className="max-w-[600px] text-black/70 mx-auto xl:mx-0">
                  {certifications.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certifications.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-accent/20 h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent font-extrabold">
                            {item.duration}
                          </span>
                          <h3 className="text-lg max-w-[280px] min-h-[50px] text-center lg:text-left text-black/70 font-medium">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <p className="text-black/60 text-sm">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
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
                <div className="flex flex-col gap-8">
                  {skills.categories.map((category, catIndex) => (
                    <div key={catIndex}>
                      <h4 className="text-lg font-semibold text-black/80 mb-4 text-center xl:text-left">
                        {category.name}
                      </h4>
                      <ul className="text-black/70 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {category.skills.map((skill, index) => {
                          return (
                            <li key={index}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-full h-[120px] bg-accent/20 rounded-xl flex justify-center items-center group">
                                    <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                      {skill.icon}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="capitalize">{skill.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-black text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-black/70 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="text-black flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-black/70">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
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

"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 3,
        text: "Años de experiencia",
    },
    {
        num: 8,
        text: "Proyectos completados",
    },
    {
        num: 6,
        text: "Tecnologias que manejo",
    },
    /*{
        num: 231,
        text: "Commits en Github",
    },*/
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index)=>{
                    return(
                        <div 
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-center"
                            key={index}>
                            <CountUp 
                            end={item.num}
                            duration={5}
                            delay={2}
                            className="text-4xl xl:text-6xl font-extrabold text-black/70"
                            />
                            <p className={`${item.text.length < 15 ? "max-w-[100px]":"max-w-[150px]"} leading-snug text-black/70`}>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats
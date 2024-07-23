import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-black/70">Software Developer</span>
            <h1 className="h1 mb-6 text-black">
              Hola soy
              <br /> <span className="text-accent">Emir Segovia</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-black/70">
              Tecnico universitario en Programación formado en la Universidad
              Tecnológica Nacional [Argentina]. Me considero una persona
              proactiva que valora la importancia de la comunicación y el
              trabajo en equipo. Me encuentro en constante aprendizaje para
              ampliar mis conocimientos y así poder ofrecer lo mejor de mí en
              cada oportunidad.
            </p>
            {/* redes */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 text-black/70"
              >
                <a
                  href="/download/Cv_Emir_Segovia.pdf"
                  download="Cv_Emir_Segovia"
                >
                  DESCARGAR CV
                </a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-black/70 text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;

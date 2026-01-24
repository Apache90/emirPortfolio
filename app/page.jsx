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
            <span className="text-xl text-black/70">QA Analyst | Dev</span>
            <h1 className="h1 mb-6 text-black">
              Hola soy
              <br /> <span className="text-accent">Emir Segovia</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-black/70">
              Soy una persona proactiva, con sólidas habilidades de comunicación 
              y que entiende la importancia del trabajo en equipo. Me motiva aportar 
              valor en cada proyecto, brindando lo necesario para alcanzar los objetivos 
              de manera eficiente. Disfruto aprender continuamente y seguir creciendo, 
              lo que me permite adaptarme con facilidad y dar siempre lo mejor de mí 
              ante cada nuevo desafío.
            </p>
            {/* redes */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 text-black/70 hover:text-white"
              >
                <a
                  href="/download/EmirSegovia_Cv.pdf"
                  download="EmirSegovia_Cv"
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

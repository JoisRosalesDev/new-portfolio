import { useState, useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Section } from "./components/layout/Section";
import { Button } from "./components/ui/Button";

// Assets
import pawsCover from "./assets/paws-cover.webp";
import myCondition from "./assets/mycondition.webp";
import yeezyVerse from "./assets/yeezyverse.webp";
import cvFile from "./assets/CV_Jois_Rosales.pdf";

const DESCRIPTIONS = [
  "Enfocado en perfeccionar mis habilidades como fullstack junior.",
  "Uso responsable de la IA: Planear, luego implementar.",
  "Experiencia trabajando bajo metodologías ágiles (SCRUM).",
  "Interés y experiencia con el desarrollo Frontend.",
];

const PROJECTS = [
  {
    title: "Paws At Route",
    description:
      "Plataforma que busca conectar a dueños de mascotas con paseadores de verificados.",
    tech: ["React", "Tailwind CSS", "Prisma", "Node.js"],
    image: pawsCover,
    link: "https://pawsatroute.netlify.app/",
    github: "https://github.com/vMattS/PawsAtRoute",
  },
  {
    title: "MyCondition",
    description:
      "Aplicación de seguimiento de salud personalizada para monitorear condiciones crónicas.",
    tech: ["HTML ", "CSS", "JavaScript"],
    image: myCondition,
    link: "https://joisrosalesdev.github.io/mycondition/",
    github: "https://github.com/JoisRosalesDev/mycondition",
  },
  {
    title: "YeezyVerse",
    description:
      "E-commerce conceptual inspirado en la cultura sneaker, con una interfaz ultra-minimalista.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: yeezyVerse,
    link: "https://yeezyverse-jois.vercel.app/",
    github: "https://github.com/JoisRosalesDev/yeezyverse",
  },
];

const ContactItem = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2 mb-6 text-left">
      <label className="text-sm font-medium text-black-700 dark:text-alabaster-grey-700 uppercase tracking-wider">
        {label}
      </label>
      <div className="flex gap-2">
        <input
          readOnly
          value={value}
          className="flex-1 px-4 py-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-prussian-blue-500 dark:text-white focus:outline-none"
        />
        <Button
          variant="outline"
          onClick={handleCopy}
          className="px-4 py-2 text-sm whitespace-nowrap"
        >
          {copied ? "Copiado!" : "Copiar"}
        </Button>
      </div>
    </div>
  );
};

const TECH_STACK = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Angular", "Astro"],
  },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "Prisma", "Express"] },
  { category: "Tools", items: ["Git", "Docker", "Vite", "Framer Motion"] },
];

function App() {
  const [descIndex, setDescIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setDescIndex((prev) => (prev + 1) % DESCRIPTIONS.length);
        setIsExiting(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="blob w-[500px] h-[500px] bg-orange-500/20 -top-48 -left-48" />
      <div className="blob w-[400px] h-[400px] bg-prussian-blue-400/30 bottom-0 -right-24" />

      <Header />

      <main>
        {/* Home Section */}
        <Section id="home">
          <div className="max-w-4xl relative">
            <p className="text-orange-500 font-bold mb-6 tracking-[0.3em] uppercase text-xs animate-fade-in">
              Creative Developer
            </p>
            <h1 className="text-5xl md:text-8xl font-black text-prussian-blue-500 dark:text-white mb-8 animate-fade-in-up stagger-1 leading-[1.1] md:leading-[0.9]">
              Jois Rosales<span className="text-orange-500">.</span>
            </h1>
            <h2 className="text-xl md:text-4xl font-medium text-black-800/60 dark:text-alabaster-grey-800/60 mb-10 animate-fade-in-up stagger-2">
              Ingeniero Informático &{" "}
              <span className="text-prussian-blue-500 dark:text-white">
                FullStack Developer
              </span>
            </h2>
            <div className="h-28 md:h-20 mb-12 animate-fade-in-up stagger-3 overflow-hidden">
              <p
                className={`text-lg md:text-2xl font-light text-black-700/80 dark:text-alabaster-grey-700/80 leading-relaxed transition-all duration-700 ${
                  isExiting
                    ? "opacity-0 blur-sm -translate-y-4"
                    : "opacity-100 blur-0 translate-y-0"
                }`}
              >
                {DESCRIPTIONS[descIndex]}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 animate-fade-in-up stagger-4">
              <Button
                className="px-8 md:px-10 py-3 md:py-4 text-base md:text-lg"
                onClick={() =>
                  document.getElementById("proyectos")?.scrollIntoView()
                }
              >
                Explorar Proyectos
              </Button>
              <a href={cvFile} download="CV_Jois_Rosales.pdf">
                <Button
                  variant="outline"
                  className="px-8 md:px-10 py-3 md:py-4 text-base md:text-lg"
                >
                  Descargar CV
                </Button>
              </a>
            </div>
          </div>
        </Section>

        {/* Tecnologías Section - BENTO GRID DESIGN */}
        <Section id="tecnologias" title="Stack Tecnológico">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[180px]">
            {/* Frontend Bento Box */}
            <div className="md:col-span-2 md:row-span-2 glass rounded-[2rem] p-6 md:p-10 flex flex-col justify-between group hover:border-orange-500/30 transition-all duration-500 min-h-[300px] md:min-h-0">
              <div className="mb-8 md:mb-0">
                <h3 className="text-3xl md:text-4xl font-black mb-4 dark:text-white flex items-center gap-3">
                  Frontend{" "}
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                </h3>
                <p className="text-black-700 dark:text-alabaster-grey-700/60 max-w-md text-sm md:text-base">
                  Creando interfaces reactivas y minimalistas con las
                  tecnologías más modernas del ecosistema web.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {TECH_STACK[0].items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-xs md:text-sm font-bold hover:text-orange-500 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Bento Box */}
            <div className="md:col-span-1 md:row-span-1 glass rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group hover:border-blue-500/30 transition-all duration-500 min-h-[150px] md:min-h-0">
              <h3 className="text-xl md:text-2xl font-black dark:text-white uppercase tracking-tighter">
                Backend Core
              </h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK[1].items.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] md:text-xs font-mono font-bold dark:text-alabaster-grey-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Workflow Bento Box */}
            <div className="md:col-span-1 md:row-span-1 glass rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group hover:border-green-500/30 transition-all duration-500 bg-orange-500/5 dark:bg-orange-500/[0.02] min-h-[150px] md:min-h-0">
              <h3 className="text-xl md:text-2xl font-black dark:text-white uppercase tracking-tighter">
                Workflow
              </h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK[2].items.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] md:text-xs font-mono font-bold text-orange-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Proyectos Section */}
        <Section id="proyectos" title="Proyectos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-[2rem] bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 p-6 md:p-8 flex flex-col h-full"
              >
                <div className="mb-6 h-48 bg-alabaster-grey-500 dark:bg-prussian-blue-400 rounded-2xl overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-prussian-blue-500 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-black-700 dark:text-alabaster-grey-700 mb-6 flex-1 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-auto mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono font-bold text-orange-500 bg-orange-500/5 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="primary"
                      className="w-full text-xs py-2.5 px-4"
                    >
                      Sitio Web
                    </Button>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full text-xs py-2.5 px-4"
                    >
                      Repositorio
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contacto Section */}
        <Section id="contacto" title="Contacto">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold text-prussian-blue-500 dark:text-white mb-6">
                ¿Hablamos?
              </h3>
              <p className="text-lg text-black-700 dark:text-alabaster-grey-700 mb-8 leading-relaxed">
                Estoy buscando nuevas oportunidades para colaborar y seguir
                creciendo profesionalmente. Mi bandeja de entrada siempre está
                abierta.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/JoisRosalesDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="px-8">GitHub</Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/jois-rosales-fernández-260baa24b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="px-8">LinkedIn</Button>
                </a>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] glass">
              <ContactItem label="Email" value="joisrosafer@gmail.com" />
              <ContactItem label="Teléfono" value="+56 9 3146 6378" />
              <a href="mailto:joisrosafer@gmail.com" className="block mt-4">
                <Button variant="primary" className="w-full py-4 text-lg">
                  Enviar un correo
                </Button>
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="py-12 text-center text-black-800 dark:text-alabaster-grey-800 text-sm border-t border-black/5 dark:border-white/5">
        <p>
          © {new Date().getFullYear()} Jois Rosales. Diseñado con minimalismo.
        </p>
      </footer>
    </div>
  );
}

export default App;

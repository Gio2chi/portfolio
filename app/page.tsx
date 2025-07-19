"use client";
import Head from "next/head";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function Home() {
  // const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("it");

  // const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === "it" ? "en" : "it");

  type EducationDegree = {
    degree: string;
    where: string;
    when: string;
    grade?: string;
    completed: boolean;
  };
  type Project = {
    title: string;
    description: string;
    company: string;
    when: string;
    link?: string;
  };
  type TranslationUnit = {
    degree: string;
    about: string;
    education: EducationDegree[];
    skills: string[];
    projects: Project[];
  };
  const translation = new Map<string, TranslationUnit>([
    [
      "it",
      {
        degree: "Ingegnere Informatico",
        about:
          "Sono uno studente al secondo anno di Ingegneria Informatica al Politecnico di Torino. Mi piace capire come funzionano le cose, automatizzarle e renderle più efficienti. Ho lavorato a progetti personali come bot per Telegram e Discord, plugin per Minecraft e sistemi containerizzati con Docker e Traefik. Cerco sempre occasioni per imparare qualcosa di nuovo, mettendo le mani in pasta.",
        education: [
          {
            degree: "Laurea in Ingegneria Informatica",
            where: "Politecnico di Torino",
            when: "2023 - in corso",
            completed: false,
          },
          {
            degree: "Maturità Scientifica - Opzione Scienze Applicate",
            where: "Liceo Scientifico G.B.Grassi",
            when: "2017 - 2023",
            grade: "70/100",
            completed: true,
          },
          {
            degree: "Partecipazione a competizioni di informatica",
            where: "Reply",
            when: "2020, 2021",
            completed: true,
          },
        ],
        skills: [
          "Problem Solving",
          "Sviluppo software",
          "Sistemi distribuiti",
          "Automazione",
          "Integrazione API\\SDK",
          "Controllo di Versione Git",
          "Docker",
          "Gestione Database",
          "Scripting",
          "Linux",
        ],
        projects: [
          {
            title: "Homelab su Oracle Cloud",
            company: "Gio2chi",
            when: "2024 - 2025",
            description:
              "Infrastruttura self-hosted su Oracle Cloud con Docker, Docker Compose e Traefik. Include autenticazione con Authelia, orchestrazione di server Minecraft tramite Crafty Controller, dashboard di monitoraggio e script personalizzati per automazione e manutenzione.",
          },
          {
            title: "Peer2you",
            company: "Rappresentazione Studentesca G.B.Grassi",
            when: "2023",
            description:
              "Peer2you è una piattaforma di peer tutoring progettata per mettere in contatto studenti che cercano supporto scolastico. La piattaforma permette agli studenti, in qualità di tutor, di aiutare i propri pari nello studio di materie specifiche.",
            link: "https://github.com/Gio2chi/Peer2you",
          },
          {
            title: "TP-Altar",
            company: "Gio2chi",
            when: "2024",
            description:
              "TP-Altar è un plugin di Minecraft che permette ai giocatori di teletrasportarsi in luoghi diversi utilizzando un sistema di altari personalizzato. I giocatori possono interagire con gli altari nel gioco per attivare eventi di teletrasporto, rendendo più facile muoversi nel mondo di Minecraft.",
            link: "https://github.com/Gio2chi/TP-Altar",
          },
          // {
          //   title: "SASBot",
          //   company: "Gio2chi",
          //   when: "2019 - 2021",
          //   description:
          //     "SASBot è un bot Discord personalizzato progettato per migliorare il tuo server con funzionalità di automazione e utilità. Sviluppato con Node.js, integra vari comandi e strumenti per gestire le attività e fornire funzionalità aggiuntive agli utenti.",
          //   link: "https://github.com/Gio2chi/SASBot",
          // },
        ],
      },
    ],
    [
      "en",
      {
        degree: "Software Engineer",
        about:
          "I'm a second-year Computer Engineering student at Politecnico di Torino. I enjoy figuring out how things work, automating them, and making them better. I've built personal projects like Telegram and Discord bots, Minecraft plugins, and containerized systems using Docker and Traefik. I'm always looking for ways to learn by doing.",
        education: [
          {
            degree: "Laurea in Ingegneria Informatica",
            where: "Politecnico di Torino",
            when: "2023 - in progress",
            completed: false,
          },
          {
            degree: "High School Diploma - Applied Sciences",
            where: "Liceo Scientifico G.B.Grassi",
            when: "2017 - 2023",
            grade: "70/100",
            completed: true,
          },
          {
            degree: "Participated in computer science competitions",
            where: "Reply",
            when: "2020, 2021  ",
            completed: true,
          },
        ],
        skills: [
          "Problem Solving",
          "Software development",
          "Distributed systems",
          "Automation",
          "API\\SDK Integration",
          "Git Version Control",
          "Docker",
          "Database Management",
          "Scripting",
          "Linux",
        ],
        projects: [
          {
            title: "Oracle Cloud Homelab",
            company: "Gio2chi",
            when: "2022 - 2025",
            description:
              "Self-hosted infrastructure on Oracle Cloud using Docker, Docker Compose, and Traefik. Includes authentication with Authelia, Minecraft server orchestration via Crafty Controller, monitoring dashboards, and custom scripts for automation and maintenance.",
          },
          {
            title: "Peer2you",
            company: "Rappresentazione Studentesca G.B.Grassi",
            when: "2023",
            description:
              "Peer2you is a peer-tutoring platform designed to connect students for academic assistance. The platform allows students, known as tutors, to help their peers study specific subjects.",
            link: "https://github.com/Gio2chi/Peer2you",
          },
          {
            title: "TP-Altar",
            company: "Gio2chi",
            when: "2024",
            description:
              "TP-Altar is a Minecraft plugin that allows players to teleport to different locations using a custom altar system. Players can interact with altars in the game to trigger teleportation events, making it easier to move across the Minecraft world.",
            link: "https://github.com/Gio2chi/TP-Altar",
          },
          // {
          //   title: "SASBot",
          //   company: "Gio2chi",
          //   when: "2019 - 2021",
          //   description:
          //     "SASBot is a custom Discord bot designed to enhance your server with automation and utility features. Built with Node.js, it integrates various commands and tools to manage tasks and provide additional functionality for users.",
          //   link: "https://github.com/Gio2chi/SASBot",
          // },
        ],
      },
    ],
  ]);

  const techStack = [
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "C",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Portainer",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/portainer/portainer-original.svg",
    },
    {
      name: "Linux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "GitLab",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    },
    {
      name: "Oracle",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
  ];

  return (
    <>
      <Head>
        <title>Giovanni Angaroni - Software Engineering Resume</title>
        <meta
          name="description"
          content="Giovanni Angaroni's Software Engineering Resume"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main container with dark background */}
      <div className="min-h-screen bg-[#1e293b] text-white max-w-[850px] mx-auto">
        {/* <div className="flex justify-end gap-4 mb-4 max-w-4xl mx-auto">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-1 bg-blue-500 text-white rounded shadow"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <button
            onClick={toggleLanguage}
            className="px-4 py-1 bg-green-500 text-white rounded shadow"
          >
            {language === "it" ? "English" : "Italiano"}
          </button>
        </div> */}

        {/* Left Sidebar */}
        <aside className="fixed  h-screen p-4 w-[80px] bg-[#0a192f] p-6">
          {" "}
          {/* Adjust width as needed */}
          {/* Top Dots - you'd use divs for these */}
          <div className="absolute top-6 left-6 flex flex-col space-y-2">
            <div className="w-4 h-4 rounded-full bg-blue-400"></div>
            <div className="w-4 h-4 rounded-full border-1 border-white"></div>
            <div className="w-4 h-4 rounded-full bg-white"></div>
          </div>
          <div className="absolute h-screen justify-center transform -translate-x-28 flex flex-col">
            <div className="relative transform -rotate-90 inline-flex items-center h-50">
              <Mail className="text-[#0a192f] w-8 h-8 p-1 rounded-full bg-gray-300" />
              <a
                className="ml-2 text-gray-300"
                href="mailto:info@angaronigiovanni.com"
              >
                info@angaronigiovanni.com
              </a>
            </div>
            <div className="relative transform -rotate-90 inline-flex items-center h-50">
              <Phone className="text-[#0a192f] w-8 h-8 p-1 rounded-full bg-gray-300" />
              <a className="ml-2 text-gray-300" href="tel:+393921553612">
                +393921553612
              </a>
            </div>
          </div>
          <div className="absolute left-1/2 transform m-5 h-screen w-px bg-gray-700"></div>
          {/* Add a subtle decorative line or shape at the bottom if needed */}
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 ml-[80px] p-10 z-10 relative">
          {/* Header Section */}
          <section className="flex justify-between items-center mb-10">
            <div className="flex flex-col">
              <h1 className="text-4xl pl-7 pr-7 p-1 w-60 text-center rounded-full font-bold bg-blue-400 text-[#1e293b]">
                GIOVANNI
              </h1>
              <h2 className="ml-29 text-4xl font-bold text-white mt-1">
                ANGARONI
              </h2>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex flex-col items-center">
                {/* Placeholder for the circular pattern */}
                <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-white"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold text-1xl">
                {translation
                  .get(language)
                  ?.degree.split(" ")
                  .map((element, index) => (
                    <p key={index}>{element}</p>
                  ))}
              </div>
            </div>
          </section>

          {/* About Me & Photo Section */}
          <section className="flex mb-10 bg-[#0f2038] rounded-lg overflow-hidden">
            <div className="p-4">
              {" "}
              {/* Adjust width as needed */}
              <div className="w-40 h-50 relative overflow-hidden rounded-lg">
                {/* Use Next.js Image component for optimization */}
                <Image
                  src="/fototessera.jpg" // You'll need to place your image here
                  alt="Giovanni Angaroni"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="w-2/3 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                ABOUT ME
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {translation.get(language)?.about}
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className="bg-[#0f2038] p-6 rounded-lg mb-10">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              EDUCATION
            </h3>
            {translation.get(language)?.education.map((element, index) => (
              <div key={index} className="flex space-y-3">
                {element.completed ? (
                  <div className="relative mx-3 pt-3 pb-5 h-auto">
                    <div className="rounded-full size-3 bg-blue-400 transoform -translate-1/2"></div>
                    <div className="h-full w-px bg-blue-400"></div>
                  </div>
                ) : (
                  <div className="relative mx-3 pt-3 pb-5 h-auto">
                    <div className="rounded-full size-3 bg-blue-400 transoform -translate-1/2 animate-pulse"></div>
                    <div className="h-full w-px bg-blue-400"></div>
                  </div>
                )}
                <div className="flex flex-col">
                  <p className="font-semibold">{element.degree}</p>
                  <p className="text-gray-400 text-sm">{element.where}</p>
                  <p className="text-gray-400 text-xs">{element.when}</p>
                  {element.grade ? (
                    <p className="text-gray-400 text-xs">
                      Grade: {element.grade}
                    </p>
                  ) : (
                    ""
                  )}
                  <br />
                </div>
              </div>
            ))}
          </section>

          {/* Projects & Professional Skills Section */}
          <section className="flex justify-between">
            {/* Projects */}
            <div className="w-11/20">
              {/* Adjust width and padding */}
              <h3 className="text-xl font-semibold text-blue-400 mb-4 px-8">
                PROJECTS
              </h3>
              <div className="space-y-6">
                {translation.get(language)?.projects.map((project, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-[#0f2038] p-6 rounded-lg mb-4">
                    <div className="w-4 h-4 rounded-full bg-blue-400 mt-1 flex-shrink-0"></div>
                    {!project.link ? (
                      <div className="transition-all duration-300 hover:max-h-[1000px] overflow-hidden max-h-26">
                        <p className="font-semibold text-white">
                          {project.title}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {project.company} | {project.when}
                        </p>
                        <p className="text-gray-300 text-sm mt-1">
                          {project.description}
                        </p>
                      </div>
                    ) : (
                      <a href={project.link}>
                        <p className="font-semibold">{project.title}</p>
                        <p className="text-gray-400 text-sm">
                          {project.company} | {project.when}
                        </p>
                        <p className="text-gray-300 text-sm mt-1 line-clamp-2 overflow-hidden">
                          {project.description}
                        </p>
                      </a>
                    )}
                  </div>
                ))}
                <a className="flex items-start space-x-4 bg-[#0f2038] px-14 py-2 rounded-lg mb-4" href="https://github.com/Gio2chi?tab=repositories">
                    More
                </a>
              </div>
            </div>

            {/* Professional Skills */}
            <div className="w-7/20 pl-3">
              {/* Adjust width and padding */}
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                PROFESSIONAL SKILL
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {/* Skill Buttons */}
                {translation.get(language)?.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="text-center bg-transparent border-2 border-blue-400 text-white py-2 px-4 rounded-full text-sm hover:bg-blue-400 hover:text-black transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="p-6 mb-10">
            <h2 className="text-xl font-semibold mb-4 text-blue-400">
              TECHNOLOGIES
            </h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech?.name}
                  className="flex flex-col items-center w-9 text-transparent hover:text-white transition-colors duration-150"
                >
                  <div className="rounded-full bg-[#0f2038]">
                    <img src={tech?.logo} alt={tech?.name} className="h-9" />
                  </div>
                  <span className="text-sm text-center">{tech?.name}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

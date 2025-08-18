"use client";
import Link from "next/link";
import Image from "next/image";
import {
  SiPython,
  SiPostgresql,
  SiDocker,
  SiFastapi,
  SiMongodb,
  SiAmazonwebservices,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { FiCopy } from "react-icons/fi";
import PythonOriginal from "react-devicons/python/original";
import Postgresql from "react-devicons/postgresql/original";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import ProjectsPage from "@/components/ui/projects";
import AboutPage from "@/components/ui/about";
import TechStack from "@/components/tech_stack";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleClipboardCopy = () => {
    const text = "enzocuellar12@gmail.com";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      console.log("Copied");
    });
  };

  return (
    <>
      <div className="h-auto flex flex-col items-center justify-center bg-gruvbox_gray-soft">
        <section className="flex flex-col-reverse md:flex-row items-center  max-w-6xl w-full gap-12 py-16 md:py-24">
          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#fbf1c7]">
              Enzo Cuellar
            </h1>
            <h2 className="mt-2 text-2xl font-semibold text-gruvbox_yellow italic">
              Backend & Data Engineer — diseño sistemas escalables y pipelines
              de datos robustos.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#d5c4a1]">
              I specialize in building scalable APIs, automating data pipelines,
              and designing backend systems that perform under pressure. My goal
              is to turn complex problems into efficient and maintainable
              solutions.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
              <a
                href="/projects"
                className="flex items-center justify-center text-nowrap px-6 py-3 bg-gruvbox_green text-[#282828] rounded-lg hover:bg-[#b8bb26] transition-colors font-medium"
              >
                View My Work
              </a>

              <div>
                <button
                  onClick={handleClipboardCopy}
                  className="w-max-full cursor-pointer flex-col justify-between  rounded-sm bg-gruvbox_gray-medium text-amber-50 border-1 border-gruvbox_blue  hover:bg-gruvbox_blue hover:bg-opacity-40"
                >
                  <div className="px-1  flex justify-between">
                    <div className="flex gap-1 items-center">
                      <MdEmail />
                      <span>Copy Email:</span>
                    </div>
                    <div className="flex text-sm gap-1 items-center">
                      <FiCopy />
                    </div>
                  </div>
                  <div>
                    <span className="px-1 flex w-full items-center justify-around">
                      enzocuellar12@gmail.com
                    </span>
                  </div>
                </button>
              </div>

              <div className="flex w-8/12 ">
                <ul className="flex gap-4 w-full p-2 ">
                  <Link
                    href={"https://github.com/devenzo35"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub className="w-8 h-8 text-gray-300 hover:text-white hover:scale-115 cursor-pointer transition-all duration-300" />
                  </Link>
                  <Link
                    href={"https://www.linkedin.com/in/devenzo35-backend/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiLinkedin className="w-8 h-8 text-blue-400 hover:text-blue-500 hover:scale-115 cursor-pointer transition-all duration-300" />
                  </Link>
                </ul>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex-1  flex flex-col gap-5 justify-center items-center">
            <div className="relative w-48 h-48 sm:w-70 sm:h-70 rounded-full overflow-hidden shadow-lg border-4 border-gruvbox_yellow">
              <Image
                src="/profile.png" // Coloca tu imagen en public/profile.jpg
                alt="Enzo profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex w-7/12 justify-around rounded-2xl  bg-gruvbox_gray-hard border-1 border-gruvbox_yellow">
              <ul className="w-full p-2 flex justify-around text-3xl">
                <PythonOriginal />
                <Postgresql />
                <SiDocker className="w-7 h-7 text-[#2496ed]" />
                <SiFastapi className="w-7 h-7 text-[#009688]" />
                <SiMongodb className="w-7 h-7 text-[#009688]" />
                <SiAmazonwebservices className="w-7 h-7 text-orange-500" />
              </ul>
            </div>
          </div>
        </section>
        {copied ? (
          <Alert
            className="fixed flex text-md items-center justify-center border-0  text-white text-center top-20 right-0 left-0"
            variant="destructive"
          >
            <AlertTitle className="rounded-sm w-8/12 p-3 border-2 border-gruvbox_blue  bg-gruvbox_blue ">
              <span className="p-18">
                "enzocuellar12@gmail.com" copied to clipboard!
              </span>
            </AlertTitle>
          </Alert>
        ) : (
          ""
        )}
      </div>
      <ProjectsPage />
      <AboutPage />
      <TechStack />
    </>
  );
}

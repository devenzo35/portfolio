import { FaCode, FaLaptopCode, FaLightbulb } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Mail,
  MapPin,
  Calendar,
  Building,
  Globe,
  CheckCircle,
} from "lucide-react";

export default function AboutPage() {
  return (
    <section className="min-h-screen w-full text-gruvbox_yellow bg-gruvbox_gray-soft">
      <section
        id="projects"
        className="pl-50  flex justify-start items-start text-gruvbox_yellow"
      >
        <div className="max-w-6xl py-5">
          <h1 className="text-5xl font-bold  to-accent bg-clip-text">
            About me
          </h1>
          <p className="text-[#d0c1be] pt-3 text-xl text-muted-foreground max-w-6xl mx-auto">
            Where I come from, what drives me, and where I’m headed.
          </p>
        </div>
      </section>
      <div className="flex justify-around items-center flex-wrap pt-5 px-26">
        <section className="w-5/12 flex-col justify-center items-center">
          <div className="flex justify-center">
            <div className=" text-amber-100">
              <Card className="bg-gruvbox_gray-hard border-gruvbox-gray flex justify-center">
                <div className=" w-full">
                  <CardHeader>
                    <CardTitle className="text-gruvbox-orange text-2xl">
                      Backend Developer
                    </CardTitle>
                    <CardDescription className="text-gruvbox-fg-dim text-base">
                      Passionate about designing clean and reliable systems.
                      Specialized in building APIs and database architectures
                      that bring order and clarity to complex problems.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gruvbox-fg leading-relaxed">
                      I help companies transform raw data into structured,
                      actionable systems. My approach blends technical precision
                      with a systems mindset — delivering solutions that are
                      efficient, scalable, and built to last.
                    </p>
                    <p className="text-gruvbox-fg leading-relaxed">
                      My journey hasn’t been linear — from exploring trades and
                      finance to teaching and programming, I’ve tested different
                      paths until I found where I truly flow: backend
                      development and data systems. Over the years, I’ve built a
                      disciplined, systematic approach to problem-solving, and
                      today I’m channeling that into a career focused on backend
                      engineering and the transition toward data engineering.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-4">
                      <div className="flex items-center gap-2 text-gruvbox-fg-dim">
                        <CheckCircle className="w-4 h-4 text-red-300" />{" "}
                        Structured & Detail-Oriented
                      </div>
                      <div className="flex items-center gap-2 text-gruvbox-fg-dim">
                        <Globe className="w-4 h-4 text-blue-300" />{" "}
                        Remote-friendly
                      </div>
                      <div className="flex items-center gap-2 text-gruvbox-fg-dim">
                        <Building className="w-4 h-4 text-green-300" /> Open to
                        long-term roles
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Container */}
        <div className="w-4/12 flex flex-col gap-12 items-center ">
          {/* Professional values */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-amber-500 underline decoration-solid">
              • My Professional Values
            </h2>
            <ul className="space-y-4 text-lg font-bold text-[#d0c1be]">
              <li className="flex items-center gap-3 bg-gruvbox_gray-hard p-3 rounded-2xl border border-amber-600">
                <FaCode className="text-gruvbox_blue text-3xl" />
                <span>Clean, maintainable code with strong architecture</span>
              </li>
              <li className="flex items-center gap-3 bg-gruvbox_gray-hard p-3 rounded-2xl border border-amber-600">
                <FaLaptopCode className="text-catppuccin_mauve text-3xl" />
                <span>
                  Continuous learning and adaptation to new technologies
                </span>
              </li>
              <li className="flex items-center gap-3 bg-gruvbox_gray-hard p-3 rounded-2xl border border-amber-600">
                <FaLightbulb className="text-yellow-300 text-2xl" />
                <span>Creative problem solving with a pragmatic approach</span>
              </li>
            </ul>
          </section>

          {/* Skills */}
        </div>
      </div>
    </section>
  );
}

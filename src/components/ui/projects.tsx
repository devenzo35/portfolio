import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "OrderFLow: Finance Managment System",
    description:
      "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard. Built with Next.js and PostgreSQL.",
    image: "/projects/orderflow.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: 2,
    title: "BCRA Sheets",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and project tracking features.",
    image: "/projects/sheets.png",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/taskapp",
  },
];

export default function ProjectsPage() {
  return (
    <div className="w-full bg-gruvbox_gray-soft text-gray-300">
      {/* Hero Section */}

      <section className="bg-gruvbox_gray-medium border-t-2 border-b-2 border-gray-400 py-7">
        <section
          id="projects"
          className="md:pl-50 text-center md:text-start  flex justify-center md:justify-start md:items-start"
        >
          <div className="max-w-6xl">
            <h1 className="text-3xl md:text-5xl font-bold text-gruvbox_yellow to-accent bg-clip-text">
              My Projects
            </h1>
            <p className="text-[#d0c1be] pt-3 text-sm md:text-xl text-muted-foreground max-w-6xl mx-auto">
              A collection of projects that showcase my skills in web
              development.
            </p>
          </div>
        </section>

        <div className="px-8 md:p-0 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 pt-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="flex flex-col justify-between p-0 border-4 border-gruvbox_gray-soft bg-gruvbox_gray-hard overflow-hidden group  transition-all duration-300"
              >
                <section>
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full rounded-t-2xl h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader>
                    <h3 className="mt-5 text-lg md:text-2xl font-bold text-gruvbox_yellow group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-2xl text-[#a88b87] leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                </section>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2 md:gap-0 justify-around w-full">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-cyan-900 text-blue-300 font-bold border border-blue-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-around py-6">
                    <Button
                      asChild
                      size="sm"
                      className=" flex items-center justify-center border border-amber-700 p-2 md:p-5 w-5/12 text-gray-900 bg-amber-700 text-sm md:text-lg hover:bg-gray-900 hover:text-amber-600 hover:border-amber-600"
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink /> Live Demo
                      </Link>
                    </Button>
                    <Button
                      className="p-2 md:p-5 w-5/12 border border-amber-50 text-sm md:text-lg hover:bg-gray-300 hover:text-gray-900"
                      asChild
                      variant="outline"
                      size="sm"
                    >
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center content-center "
                      >
                        <SiGithub />
                        <span>Docs</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

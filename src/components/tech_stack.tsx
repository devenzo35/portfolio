import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiN8N,
  SiMongodb,
  SiNginx,
  SiGnubash,
  SiApachekafka,
  SiDocker,
  SiGit,
} from "react-icons/si";

import PythonOriginal from "react-devicons/python/original";
import PostgresOriginal from "react-devicons/postgresql/original";
import VitestOriginal from "react-devicons/vitest/original";
import RedisOriginal from "react-devicons/redis/original";
import AirflowOriginal from "react-devicons/apacheairflow/original";
import CICDOriginal from "react-devicons/githubactions/original";

export default function TechStack() {
  const categories = [
    {
      title: "Frontend",
      icons: [
        { name: "Typescript", Icon: SiTypescript, color: "#3178C6" },
        { name: "NextJS", Icon: SiNextdotjs, color: "#FFFFFF" },
        {
          name: "TailwindCSS",

          Icon: SiTailwindcss,
          color: "#38B2AC",
        },
        {
          name: "Vitest",
          Icon: VitestOriginal,
          color: "#38B2AC",
        },
      ],
    },
    {
      title: "Backend",
      icons: [
        { name: "Python", Icon: PythonOriginal, color: "#339933" },
        { name: "FastApi", Icon: SiFastapi, color: "#009688" },
        { name: "PostgreSQL", Icon: PostgresOriginal, color: "#336791" },
        { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
        { name: "Redis", Icon: RedisOriginal, color: "#336791" },
      ],
    },
    {
      title: "Tools",
      icons: [
        { name: "Bash", Icon: SiGnubash, color: "#FFFFFF" },
        { name: "GitHub Actions", Icon: CICDOriginal, color: "#47A248" },
        { name: "Docker", Icon: SiDocker, color: "#2496ED" },
        { name: "Nginx", Icon: SiNginx, color: "#43A047" },
        { name: "Git", Icon: SiGit, color: "#F05032" },
      ],
    },
    {
      title: "Learning",
      icons: [
        { name: "n8n", Icon: SiN8N, color: "#EA4B71" },
        { name: "Airflow", Icon: AirflowOriginal, color: "#017CEE" },
        { name: "Kafka", Icon: SiApachekafka, color: "#231F20" },
      ],
    },
  ];

  return (
    <section className="flex-col justify-center w-full py-7 bg-gruvbox_gray-hard border-t-2 border-b-2 border-gray-400">
      <section
        id="projects"
        className="md:pl-50 text-center md:text-start  flex justify-center md:justify-start md:items-start"
      >
        <div className="max-w-6xl">
          <h1 className="text-3xl md:text-5xl font-bold text-gruvbox_yellow to-accent bg-clip-text">
            Tech Stack
          </h1>
          <p className="text-[#d0c1be] pt-3 text-sm md:text-xl text-muted-foreground max-w-6xl mx-auto">
            Solving problems through the right tools and technologies.
          </p>
        </div>
      </section>

      <div className="flex justify-center pt-7">
        <div className="md:w-7/12 text-gruvbox_yellow">
          <div className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-gruvbox_gray-medium w-9/12 md:w-11/12 flex-col justify-center py-3 px-6   rounded-xl shadow-lg border md:h-60"
              >
                <h3 className="text-xl font-semibold pb-4">{cat.title}</h3>
                <div className="flex justify-between items-center flex-wrap gap-4">
                  {cat.icons.map(({ name, Icon, color }, idx) => (
                    <div
                      key={name}
                      className="flex-col justify-center items-center w-fit text-center"
                    >
                      <Icon
                        key={idx}
                        size={70}
                        style={{ color }}
                        className="mx-auto mb-0.5"
                      />
                      <span className="text-amber-50 text-sm">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

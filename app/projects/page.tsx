import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { GitHub, ExternalLink } from "react-feather"; // Assuming you're using react-feather for icons

const projects = [
  {
    name: "Cosmic Calm",
    description: "Full Stack Web based Meditation App with Recommendation and Progress Tracking and Admin Dashboard",
    github: "https://github.com/harshsbhat/cosmic_calm.git",
    live: "https://cosmiccalm.vercel.app/",
    stack: ["React", "Node.js", "Firebase", "Flask", "AWS S3"],
  },
  {
    name: "Link Flow",
    description: "All in one link app for all social media platforms and personal/professional websites with Admin Dashboard.",
    github: "https://github.com/harshsbhat/Link-Flow.git",
    live: "https://harsh-linkflow.vercel.app/",
    stack: ["Next.js", "Tailwind Css", "MongoDB", "AWS S3"],
  },
  {
    name: "Http Server",
    description: "Implemented a Python-based HTTP server with support for handling various HTTP methods",
    github: "https://github.com/harshsbhat/http-Server-Python.git",
    stack: ["Python"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {projects.map((project, index) => (
            <Card key={index}>
              <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16">
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {project.name}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {project.description}
                  </span>
                  <div className="mt-4 flex gap-2">
                    {project.stack.map((item, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium text-zinc-200 bg-zinc-600 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-4 pt-8">
                    <div className="flex items-center gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-200"
                      >
                        <GitHub size={20} color="white" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-200"
                      >
                        GitHub
                      </a>
                    </div>
                    {project.live && (
                      <div className="flex items-center gap-2">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-zinc-200"
                        >
                          <ExternalLink size={20} color="white" />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-zinc-200"
                        >
                          Live
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

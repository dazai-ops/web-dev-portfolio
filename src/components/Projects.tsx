import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Laundry Management System",
      description: "Designed to streamline laundry operations — from managing transactions to tracking service progress.",
      techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Radix UI"],
      // liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com/dazai-ops/laundry-management-system",
    },
    {
      title: "Spotify Personality Insight",
      description: "Modern web application that analyzes your Spotify listening habits to reveal unique aspects of your personality, in music",
      techStack: ["Next.js", "TypeScript", "Spotify API", "Gemini AI", "Tailwind"],
      liveUrl: "https://songsona.vercel.app/home",
      githubUrl: "https://github.com/dazai-ops/spotify-personality-insight",
    },
    {
      title: "To-do List Mobile App",
      description: "A simple and user-friendly to-do list app for mobile devices, built with React Native",
      techStack: ["React Native"],
      // liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com/dazai-ops/ukk-todo-list-mobile",
    },
    {
      title: "Portfolio Website",
      description: "A modern and responsive portfolio website showcasing the skills and projects",
      techStack: ["React.js", "TypeScript", "Tailwind", "shadcn/ui", "Vercel"],
      // liveUrl: "yumaaji.vercel.app",
      // githubUrl: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="hover:shadow-glow transition-all duration-300 hover:scale-[1.02] border-border animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-accent/20 hover:bg-accent/5"
                  asChild
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-accent hover:bg-accent/90"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

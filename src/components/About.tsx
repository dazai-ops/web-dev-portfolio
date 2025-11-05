const About = () => {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Next.js", icon: "▲" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "PostgreSQL", icon: "🐘" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 animate-fade-in-up">
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a full-stack developer with a passion for creating beautiful,
                functional, and user-centered digital experiences. With expertise in
                modern web technologies, I transform ideas into scalable applications
                that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My philosophy is simple: write clean code, embrace best practices, and
                never stop learning. I believe great software is built through
                attention to detail and a deep understanding of user needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">
                Tech Stack & Tools
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="bg-card rounded-xl p-6 text-center hover:shadow-glow hover:scale-105 transition-all duration-300 border border-border hover:border-accent/50 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl mb-2">{tech.icon}</div>
                    <div className="text-sm font-medium text-foreground">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

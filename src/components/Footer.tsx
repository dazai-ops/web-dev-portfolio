import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Let's Connect</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Feel free to reach out for collaborations or just a friendly chat
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/dazai-ops"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent/10 border border-border hover:border-accent/50 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/yuma-aji-pengestu-a2aa702b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent/10 border border-border hover:border-accent/50 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/yumaaji12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-accent/10 border border-border hover:border-accent/50 transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Yuma Aji Pangestu. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

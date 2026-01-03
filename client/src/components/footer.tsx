import { Code2, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-primary rounded-lg text-primary-foreground">
              <Code2 className="h-4 w-4" />
            </div>
            <span className="font-display font-bold text-lg">Zikrulla</span>
          </div>
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Mohammed Zikrulla T Z. All rights reserved.</p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/mohammed-zikrulla" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

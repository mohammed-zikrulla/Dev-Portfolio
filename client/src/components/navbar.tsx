import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Code2 } from "lucide-react";
import { Link } from "wouter";

export function Navbar() {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-bold text-xl cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="p-1.5 bg-primary rounded-lg text-primary-foreground">
            <Code2 className="h-5 w-5" />
          </div>
          <span className="font-display">Zikrulla</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("timeline")} className="hover:text-primary transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}

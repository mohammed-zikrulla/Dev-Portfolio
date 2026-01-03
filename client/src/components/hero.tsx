import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden bg-background py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-primary/10 blur-[100px] rounded-full opacity-50 translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-display">
              Frontend Developer
              <span className="block text-primary mt-2">Creating Digital Magic</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              I build pixel-perfect, accessible, and performant web experiences. 
              Specializing in React, TypeScript, and modern UI/UX design.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button size="lg" onClick={scrollToContact} className="gap-2 text-base h-12 px-8">
                Let's Talk <ArrowRight className="h-4 w-4" />
              </Button>
              <div className="flex gap-4 pl-4 border-l border-border">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative w-full max-w-sm lg:max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-primary to-primary/20 p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="h-full w-full rounded-xl bg-muted overflow-hidden relative">
                {/* User photo - generic developer unsplash */}
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60"
                  alt="Developer Portrait" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

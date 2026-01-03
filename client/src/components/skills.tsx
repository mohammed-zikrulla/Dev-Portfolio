import { Section } from "./ui/section";

const skills = [
  "React", "TypeScript", "TailwindCSS", "Next.js", 
  "Node.js", "PostgreSQL", "GraphQL", "Framer Motion",
  "Figma", "Git", "Docker", "AWS"
];

export function Skills() {
  return (
    <Section className="py-12 border-y bg-muted/30">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold font-display mb-4">Tech Stack</h2>
        <p className="text-muted-foreground">The tools I use to bring ideas to life</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="px-4 py-2 rounded-full bg-background border shadow-sm text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
          >
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
}

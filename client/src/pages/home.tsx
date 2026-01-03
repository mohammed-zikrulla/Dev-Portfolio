import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { CareerTimeline } from "@/components/career-timeline";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <CareerTimeline />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

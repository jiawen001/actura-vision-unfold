import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import integrationLogos from "@/assets/integration-logos.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Your AI teammate<br />
            <span className="relative">
              who never misses a task.
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[hsl(var(--actura-blue))] rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[hsl(var(--actura-gray))] mb-8 font-light">
            Act quick. Act clever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="actura-button-primary text-lg px-8 py-4">
              Download
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="ghost" className="actura-button-secondary text-lg px-8 py-4">
              Contact sales
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <img 
              src={integrationLogos} 
              alt="Integration partners including Zoom, Notion, and Jira" 
              className="h-8 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
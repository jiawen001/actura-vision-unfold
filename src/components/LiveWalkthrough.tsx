import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const LiveWalkthrough = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[hsl(var(--actura-gray-light))/30] to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Live walkthrough</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="actura-card relative group cursor-pointer">
            <div className="aspect-video bg-[hsl(var(--actura-gray-light))] rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--actura-blue))/10] to-[hsl(var(--actura-blue-dark))/20]"></div>
              
              <Button className="actura-button-primary text-lg px-8 py-4 relative z-10 group-hover:scale-110 transition-transform">
                <Play className="mr-3 h-6 w-6" />
                Watch Demo
              </Button>
              
              <div className="absolute bottom-4 left-4 text-[hsl(var(--actura-gray))] text-sm">
                See Actura in action • 3 min demo
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-[hsl(var(--actura-gray))] text-lg">
              Watch how Actura transforms your meetings into actionable insights in real-time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveWalkthrough;
import { Button } from "@/components/ui/button";
import videoCallMockup from "@/assets/video-call-mockup.jpg";
import integrationLogos from "@/assets/integration-logos.jpg";

const LiveWalkthrough = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            See Actura in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience how Actura transforms your conversations into actionable insights
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-card rounded-3xl shadow-elegant p-8 mb-8">
              <img 
                src={videoCallMockup} 
                alt="Actura video call interface" 
                className="w-full rounded-2xl"
              />
            </div>
            <div className="text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Start Live Walkthrough
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Seamless Integration
              </h3>
              <p className="text-muted-foreground mb-6">
                Connect with your favorite tools and platforms. Actura works where you work.
              </p>
              <img 
                src={integrationLogos} 
                alt="Integration partners" 
                className="w-full rounded-xl"
              />
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-3 text-foreground">
                Ready to transform your conversations?
              </h4>
              <p className="text-muted-foreground mb-4">
                Join thousands of teams already using Actura to unlock the power of their discussions.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveWalkthrough;
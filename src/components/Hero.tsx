import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-primary via-primary-light to-background text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Harness the power<br />
          of <span className="text-accent">conversations</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Transform your meetings into actionable insights with AI-powered conversation analysis
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-3">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
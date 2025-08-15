import { Ear, MessageSquare, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Ear className="w-12 h-12 text-primary" />,
      title: "At Actura, we're all ears",
      description: "Our AI listens to every conversation, capturing nuances and context that matter most to your business."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-primary" />,
      title: "From chatter to clarity",
      description: "Transform messy conversations into clear, structured insights that drive decision-making."
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Turn ideas into actionable steps",
      description: "Convert discussions into concrete action items, tasks, and follow-ups automatically."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          How Actura Works
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
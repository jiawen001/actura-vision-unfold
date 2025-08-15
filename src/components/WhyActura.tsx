import { Check, X } from "lucide-react";

const WhyActura = () => {
  const comparisons = [
    { feature: "Real-time conversation analysis", actura: true, others: false },
    { feature: "AI-powered insight extraction", actura: true, others: true },
    { feature: "Automated action item generation", actura: true, others: false },
    { feature: "Integration with existing tools", actura: true, others: true },
    { feature: "Context-aware recommendations", actura: true, others: false },
    { feature: "Multi-language support", actura: true, others: false }
  ];

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Why Actura?
        </h2>
        <div className="bg-card rounded-3xl shadow-elegant p-8 md:p-12">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-6">Features</h3>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-primary mb-6">Actura</h3>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-muted-foreground mb-6">Others</h3>
            </div>
            
            {comparisons.map((item, index) => (
              <div key={index} className="col-span-3 grid grid-cols-3 gap-8 py-4 border-b border-border last:border-b-0">
                <div className="text-foreground">
                  {item.feature}
                </div>
                <div className="text-center">
                  {item.actura ? (
                    <Check className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                  )}
                </div>
                <div className="text-center">
                  {item.others ? (
                    <Check className="w-6 h-6 text-green-500 mx-auto" />
                  ) : (
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyActura;
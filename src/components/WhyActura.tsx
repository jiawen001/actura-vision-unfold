const WhyActura = () => {
  return (
    <section id="why-actura" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Actura?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="actura-card h-96">
            <h3 className="text-2xl font-bold mb-6 text-center">Competitors</h3>
            <div className="space-y-4 text-[hsl(var(--actura-gray))]">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>Limited platform integration</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>Manual task creation required</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>Poor real-time collaboration</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>Basic meeting summaries</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <p>Difficult setup and maintenance</p>
              </div>
            </div>
          </div>
          
          <div className="actura-card h-96 border-2 border-[hsl(var(--actura-blue))] relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-[hsl(var(--actura-blue))] text-white px-4 py-1 rounded-full text-sm font-medium">
                Recommended
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center">Actura</h3>
            <div className="space-y-4 text-[hsl(var(--actura-gray))]">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>Seamless integration across all platforms</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>Automatic task generation with assignments</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>Real-time collaboration and sync</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>AI-powered intelligent summaries</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>One-click setup, zero maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyActura;
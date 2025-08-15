import { Mic, CheckCircle2, Users } from "lucide-react";
import videoCallMockup from "@/assets/video-call-mockup.jpg";

const Features = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[hsl(var(--actura-gray-light))/30]">
      <div className="max-w-6xl mx-auto">
        {/* Real-time listener section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mic className="h-5 w-5 text-[hsl(var(--actura-blue))]" />
              <span className="text-[hsl(var(--actura-blue))] font-medium">Real-time listener, instant note-taker</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              At Actura, we're all ears.
            </h2>
            
            <div className="space-y-6">
              <div className="actura-card max-w-md">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[hsl(var(--actura-blue))] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">A</span>
                  </div>
                  <div>
                    <p className="text-[hsl(var(--actura-blue))] font-medium mb-2">Actura AI</p>
                    <p className="text-gray-700">
                      Actura listens to your meetings across Slack, Teams, Notion, and more — no platform left behind.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="actura-card max-w-md ml-8">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">J</span>
                  </div>
                  <div>
                    <p className="font-medium mb-2">John</p>
                    <p className="text-gray-700">
                      Stay on track and up-to-date with the agenda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={videoCallMockup} 
              alt="Video conference interface showing team meeting" 
              className="w-full rounded-2xl shadow-[var(--shadow-large)]"
            />
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Live
            </div>
          </div>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle2 className="h-5 w-5 text-[hsl(var(--actura-blue))]" />
              <span className="text-[hsl(var(--actura-blue))] font-medium">Summarises what counts</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">From chatter to clarity.</h3>
            <div className="actura-card h-64 mb-6 bg-[hsl(var(--actura-gray-light))]">
              {/* Placeholder for demo content */}
            </div>
            <p className="text-[hsl(var(--actura-gray))]">
              Capture important points, decisions, and follow-ups instantly — no one misses a thing.
            </p>
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle2 className="h-5 w-5 text-[hsl(var(--actura-blue))]" />
              <span className="text-[hsl(var(--actura-blue))] font-medium">Generate tasks immediately</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Turn ideas into actionable steps.</h3>
            <div className="actura-card h-64 mb-6 bg-[hsl(var(--actura-gray-light))]">
              {/* Placeholder for demo content */}
            </div>
            <p className="text-[hsl(var(--actura-gray))]">
              Action items are automatically created with assignees, deadlines, and tags — ready for your team to tackle.
            </p>
          </div>
        </div>
        
        {/* Track and collaborate section */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users className="h-5 w-5 text-[hsl(var(--actura-blue))]" />
            <span className="text-[hsl(var(--actura-blue))] font-medium">Track and collaborate</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Everyone's on the same page.</h3>
          <p className="text-[hsl(var(--actura-gray))] text-lg mb-8 max-w-2xl mx-auto">
            Tasks sync across platforms so your team stays in sync and progress is easy to follow
          </p>
          <div className="actura-card h-64 max-w-lg mx-auto bg-[hsl(var(--actura-gray-light))]">
            {/* Placeholder for demo content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav className="actura-gradient rounded-3xl px-8 py-4 shadow-[var(--shadow-medium)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-[hsl(var(--actura-blue))] font-bold text-lg">A</span>
            </div>
            <span className="text-white font-semibold text-xl">Actura</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/90 hover:text-white transition-colors">Home</a>
            <a href="#how-it-works" className="text-white/90 hover:text-white transition-colors">How it works</a>
            <a href="#why-actura" className="text-white/90 hover:text-white transition-colors">Why Actura?</a>
            <a href="#pricing" className="text-white/90 hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-[hsl(var(--actura-gray-light))/20]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-[hsl(var(--actura-blue))] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-gray-800 font-semibold text-xl">Actura</span>
          </div>
          
          <div className="flex space-x-8 text-[hsl(var(--actura-gray))]">
            <a href="#home" className="hover:text-[hsl(var(--actura-blue))] transition-colors">Home</a>
            <a href="#how-it-works" className="hover:text-[hsl(var(--actura-blue))] transition-colors">How it works</a>
            <a href="#why-actura" className="hover:text-[hsl(var(--actura-blue))] transition-colors">Why Actura?</a>
            <a href="#pricing" className="hover:text-[hsl(var(--actura-blue))] transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-[hsl(var(--actura-blue))] transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-[hsl(var(--actura-gray))] text-sm">
          <p>&copy; 2024 Actura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary via-primary-light to-primary-lighter text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold">ACTURA</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-primary-lighter transition-colors">How it works</a>
            <a href="#" className="hover:text-primary-lighter transition-colors">Demo</a>
            <a href="#" className="hover:text-primary-lighter transition-colors">Why Actura</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Sign in
          </Button>
          <Button className="bg-white text-primary hover:bg-gray-100">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
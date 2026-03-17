import { Shield, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-glass bg-background/80 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary p-2 text-primary-foreground shadow-glow">
            <Shield className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            TruthLens<span className="text-primary">AI</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                How it Works
              </a>
            </li>
            <li>
              <a href="#use-cases" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Use Cases
              </a>
            </li>
            <li>
              <Button size="sm" className="rounded-full bg-gradient-primary px-6 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 active:scale-95">
                Analyze Now
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="rounded-lg p-2 text-foreground md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-glass bg-background/95 px-6 py-8 backdrop-blur-2xl md:hidden">
          <ul className="flex flex-col gap-6">
            <li>
              <a href="#features" className="text-lg font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="text-lg font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                How it Works
              </a>
            </li>
            <li>
              <a href="#use-cases" className="text-lg font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                Use Cases
              </a>
            </li>
            <li>
              <Button className="w-full rounded-xl bg-gradient-primary font-bold text-primary-foreground">
                Analyze Now
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

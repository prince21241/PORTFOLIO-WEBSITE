import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[rgba(10,10,10,0.95)] backdrop-blur-xl border-b border-white/20 shadow-xl' 
        : 'bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'
    }`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            className="font-mono text-xl font-bold text-white hover:scale-105 transition-all duration-300 group"
          >
            Prince<span className="text-blue-500 group-hover:text-cyan-400 transition-colors duration-300">.Raval</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white hover:text-blue-400 transition-colors duration-300"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <div className={`transition-all duration-300 ${menuOpen ? 'rotate-90' : ''}`}>
              {menuOpen ? '✕' : '☰'}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#projects', label: 'Projects' },
              { href: '#contact', label: 'Contact' }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-gray-300 hover:text-white transition-all duration-300 group animate-slide-in-down"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

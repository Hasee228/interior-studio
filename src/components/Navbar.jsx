import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand-50/90 backdrop-blur-md border-b border-sand-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-serif tracking-widest uppercase font-semibold">
          Atelier<span className="text-sand-600 font-light">Vanguard</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          <a href="#about" className="hover:text-sand-600 transition-colors">Philosophy</a>
          <a href="#services" className="hover:text-sand-600 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-sand-600 transition-colors">Portfolio</a>
          <a href="#testimonials" className="hover:text-sand-600 transition-colors">Reviews</a>
          <a href="#contact" className="px-5 py-2.5 bg-sand-900 text-sand-50 hover:bg-sand-800 transition-all text-xs tracking-widest uppercase">
            Inquire
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden p-2 text-sand-900 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sand-50 border-b border-sand-100 px-6 py-6 space-y-4">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Philosophy</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Services</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Portfolio</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium">Reviews</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-widest bg-sand-900 text-sand-50 py-3 text-center">Inquire</a>
        </div>
      )}
    </header>
  );
}
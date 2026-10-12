import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
          alt="Minimalist Interior Space" 
          className="w-full h-full object-cover opacity-20 scale-105"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-sand-600 font-semibold block">
          Spatial Design & Architecture
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif leading-tight tracking-tight">
          Crafting spaces that breathe with elegance.
        </h1>
        <p className="max-w-xl mx-auto text-sand-600 text-base sm:text-lg font-light">
          We merge architectural purity with tactile warmth, designing environments tailored to human rhythm and modern living.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-sand-900 text-sand-50 text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-sand-800 transition-all">
            Explore Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 border border-sand-900 text-sand-900 text-xs uppercase tracking-widest flex items-center justify-center hover:bg-sand-100 transition-all">
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
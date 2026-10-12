
export default function Philosophy() {
  return (
    <section id="about" className="py-24 px-6 bg-sand-100/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-sand-600 font-semibold">Our Philosophy</span>
          <h2 className="text-3xl sm:text-4xl font-serif leading-snug">
            Design is not merely how it looks, but how it makes you feel.
          </h2>
          <p className="text-sand-600 font-light leading-relaxed">
            Founded on principles of organic minimalism and structural integrity, Atelier Vanguard approaches every room as a distinct narrative canvas. We balance natural illumination, organic textures, and spatial clarity to curate refined sanctuaries.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-sand-200">
            <div>
              <h3 className="text-3xl font-serif text-sand-900">12+</h3>
              <p className="text-xs uppercase tracking-wider text-sand-600 mt-1">Years of Practice</p>
            </div>
            <div>
              <h3 className="text-3xl font-serif text-sand-900">140+</h3>
              <p className="text-xs uppercase tracking-wider text-sand-600 mt-1">Spaces Transformed</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" 
            alt="Interior detail" 
            className="w-full h-80 object-cover shadow-sm"
          />
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
            alt="Living space aesthetic" 
            className="w-full h-80 object-cover shadow-sm mt-8"
          />
        </div>
      </div>
    </section>
  );
}
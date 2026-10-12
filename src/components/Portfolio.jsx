import { ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "The Monolith Residence",
      location: "Kyoto Hills",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Oasis Penthouse",
      location: "Copenhagen",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Solace Coastal Villa",
      location: "Mallorca",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-sand-100/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-sand-600 font-semibold">Selected Works</span>
            <h2 className="text-3xl sm:text-4xl font-serif">Recent Projects</h2>
          </div>
          <a href="#contact" className="text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:text-sand-600 transition-colors">
            View All Archives <ChevronRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <div key={index} className="group relative overflow-hidden bg-sand-200">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sand-900/80 via-transparent to-transparent opacity-90 flex flex-col justify-end p-8 text-sand-50">
                <span className="text-xs uppercase tracking-widest text-sand-300 font-light">{item.location}</span>
                <h3 className="text-2xl font-serif mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
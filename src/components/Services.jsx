import { Compass, Sparkles, ShieldCheck } from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      icon: <Compass className="w-6 h-6 text-sand-900" />,
      title: "Residential Architecture",
      description: "Complete spatial planning, layout optimization, and bespoke structural detailing for modern homes."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-sand-900" />,
      title: "Interior Styling & Curations",
      description: "Hand-picked furniture sourcing, textural palettes, bespoke lighting design, and art advisory."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-sand-900" />,
      title: "Turnkey Project Management",
      description: "End-to-end execution, artisan supervision, budgeting oversight, and white-glove final installation."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <span className="text-xs uppercase tracking-[0.2em] text-sand-600 font-semibold">What We Do</span>
        <h2 className="text-3xl sm:text-4xl font-serif">Comprehensive Design Disciplines</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceList.map((service, index) => (
          <div key={index} className="p-8 bg-white border border-sand-200/65 hover:border-sand-900 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 bg-sand-100 flex items-center justify-center group-hover:bg-sand-900 group-hover:text-white transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-serif">{service.title}</h3>
            <p className="text-sand-600 text-sm font-light leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
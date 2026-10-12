import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 max-w-5xl mx-auto text-center">
      <span className="text-xs uppercase tracking-[0.2em] text-sand-600 font-semibold block mb-4">Client Feedback</span>
      <h2 className="text-3xl sm:text-4xl font-serif mb-16">Trusted by discerning homeowners</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 bg-white border border-sand-200 text-left space-y-4">
          <div className="flex text-amber-600 gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-sand-700 italic font-light text-sm leading-relaxed">
            "Atelier Vanguard transformed our cold urban apartment into a warm sanctuary of quiet luxury. Their attention to subtle lighting details completely changed our daily living experience."
          </p>
          <div className="pt-2">
            <h4 className="font-serif font-medium">Marcus & Elena Vance</h4>
            <span className="text-xs text-sand-500 uppercase tracking-widest">Penthouse Owners</span>
          </div>
        </div>

        <div className="p-8 bg-white border border-sand-200 text-left space-y-4">
          <div className="flex text-amber-600 gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-sand-700 italic font-light text-sm leading-relaxed">
            "Working with their team was seamless. They understood our complex requirements immediately and delivered a stunning, cohesive layout right on schedule."
          </p>
          <div className="pt-2">
            <h4 className="font-serif font-medium">Julian Thorne</h4>
            <span className="text-xs text-sand-500 uppercase tracking-widest">Residential Developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
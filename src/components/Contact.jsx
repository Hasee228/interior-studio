import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-sand-900 text-sand-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-sand-400 font-semibold">Start a Conversation</span>
          <h2 className="text-3xl sm:text-5xl font-serif">Let's build your next environment.</h2>
          <p className="text-sand-400 font-light leading-relaxed">
            Reach out to discuss your architectural vision or book an introductory design consultation with our lead studio team.
          </p>
          <div className="space-y-4 pt-6">
            <div className="flex items-center gap-4 text-sand-300">
              <Mail size={18} className="text-sand-400" />
              <span className="text-sm">studio@ateliervanguard.example</span>
            </div>
            <div className="flex items-center gap-4 text-sand-300">
              <Phone size={18} className="text-sand-400" />
              <span className="text-sm">+1 (555) 382-9011</span>
            </div>
            <div className="flex items-center gap-4 text-sand-300">
              <MapPin size={18} className="text-sand-400" />
              <span className="text-sm">442 Design District, Suite 400, NY</span>
            </div>
          </div>
        </div>

        <div className="bg-sand-850 p-8 sm:p-10 border border-sand-700">
          {formSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <h3 className="text-2xl font-serif">Inquiry Received</h3>
              <p className="text-sand-300 text-sm font-light">Thank you for reaching out. One of our lead architects will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-sand-300 block">Your Name</label>
                <input 
                  required 
                  type="text" 
                  placeholder="Jane Doe" 
                  className="w-full bg-sand-900 border border-sand-700 px-4 py-3 text-sand-50 text-sm focus:outline-none focus:border-sand-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-sand-300 block">Email Address</label>
                <input 
                  required 
                  type="email" 
                  placeholder="jane@example.com" 
                  className="w-full bg-sand-900 border border-sand-700 px-4 py-3 text-sand-50 text-sm focus:outline-none focus:border-sand-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-sand-300 block">Project Scope & Vision</label>
                <textarea 
                  required 
                  rows="4" 
                  placeholder="Tell us about your space..." 
                  className="w-full bg-sand-900 border border-sand-700 px-4 py-3 text-sand-50 text-sm focus:outline-none focus:border-sand-400"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-sand-50 text-sand-900 uppercase text-xs tracking-widest font-semibold hover:bg-sand-200 transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
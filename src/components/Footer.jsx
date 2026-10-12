import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-sand-950 text-white text-xs border-t border-sand-900">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Atelier Vanguard. All rights reserved.</p>
        <div className="flex space-x-6 tracking-widest uppercase">
          <a href="#" className="hover:text-sand-200 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-sand-200 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
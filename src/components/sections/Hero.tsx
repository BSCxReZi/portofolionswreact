import { ArrowRight, Download, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { SocialIcons } from '@/components/SocialIcons';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 text-center py-20">
        <p className="animate-fade-in-up text-blue-400 font-medium text-sm tracking-wider uppercase mb-4">
          {siteConfig.location}
        </p>

        <h1 className="animate-fade-in-up delay-100 font-display font-bold text-4xl sm:text-5xl lg:text-7xl text-white tracking-tight mb-4">
          {siteConfig.name}
        </h1>

        <h2 className="animate-fade-in-up delay-200 font-display text-lg sm:text-xl lg:text-2xl text-slate-400 font-medium mb-8">
          {siteConfig.role}
        </h2>

        <p className="animate-fade-in-up delay-300 max-w-2xl mx-auto text-slate-400 text-base lg:text-lg leading-relaxed mb-10">
          {siteConfig.description}
        </p>

        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm w-full sm:w-auto justify-center"
          >
            Lihat Portfolio <ArrowRight size={16} />
          </a>
          <a
            href={siteConfig.links.cv || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 px-6 py-3 rounded-xl text-slate-300 font-medium text-sm w-full sm:w-auto justify-center"
          >
            <Download size={16} /> Download CV
          </a>
          <a
            href="#contact"
            className="btn-outline flex items-center gap-2 px-6 py-3 rounded-xl text-slate-300 font-medium text-sm w-full sm:w-auto justify-center"
          >
            <Mail size={16} /> Hubungi Saya
          </a>
        </div>

        <div className="animate-fade-in-up delay-500 flex justify-center">
          <SocialIcons size={20} />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-blue-400 transition-colors animate-float"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-5 h-9 rounded-full border-2 border-slate-600 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-blue-400" />
          </div>
        </div>
      </a>
    </section>
  );
}

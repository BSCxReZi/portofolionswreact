import { siteConfig } from '@/config/site';
import { SocialIcons } from './SocialIcons';

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Brand */}
          <div>
            <h3 className="font-display font-semibold text-lg text-white mb-1">{siteConfig.name}</h3>
            <p className="text-slate-400 text-sm">{siteConfig.role}</p>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="text-slate-500 text-sm italic">"{siteConfig.tagline}"</p>
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end">
            <SocialIcons />
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm">
            &copy; 2026 {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

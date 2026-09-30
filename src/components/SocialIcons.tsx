import { Github, Instagram, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface IconProps {
  className?: string;
  size?: number;
}

export function SocialIcons({ className = '', size = 18 }: IconProps) {
  const icons = [
    { name: 'GitHub', Icon: Github, href: siteConfig.links.github },
    { name: 'WhatsApp', Icon: MessageCircle, href: siteConfig.links.whatsapp },
    { name: 'Instagram', Icon: Instagram, href: siteConfig.links.instagram },
    { name: 'LinkedIn', Icon: Linkedin, href: siteConfig.links.linkedin },
    { name: 'Email', Icon: Mail, href: siteConfig.links.email ? `mailto:${siteConfig.links.email}` : '#' },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {icons.map(({ name, Icon, href }) => (
        <a
          key={name}
          href={href || '#'}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}

import { useState } from 'react';
import { MessageCircle, Instagram, Github, Linkedin, Mail, Copy, Check, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

export function Contact() {
  const { copied: copiedEmail, copy: copyEmail } = useCopyToClipboard();
  const { copied: copiedWa, copy: copyWa } = useCopyToClipboard();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    await copyEmail(siteConfig.links.email);
    setCopiedField('email');
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleCopyWa = async () => {
    await copyWa(siteConfig.links.whatsappNumber);
    setCopiedField('wa');
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contacts = [
    {
      icon: <MessageCircle size={22} />,
      label: 'WhatsApp',
      value: siteConfig.links.whatsappNumber,
      href: siteConfig.links.whatsapp,
      onCopy: handleCopyWa,
      copied: copiedField === 'wa',
    },
    {
      icon: <Instagram size={22} />,
      label: 'Instagram',
      value: siteConfig.links.instagramHandle,
      href: siteConfig.links.instagram,
    },
    {
      icon: <Github size={22} />,
      label: 'GitHub',
      value: siteConfig.links.github,
      href: siteConfig.links.github,
    },
    {
      icon: <Linkedin size={22} />,
      label: 'LinkedIn',
      value: siteConfig.links.linkedin,
      href: siteConfig.links.linkedin,
    },
    {
      icon: <Mail size={22} />,
      label: 'Email',
      value: siteConfig.links.email,
      href: `mailto:${siteConfig.links.email}`,
      onCopy: handleCopyEmail,
      copied: copiedField === 'email',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute left-1/4 top-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-5 lg:px-8 relative">
        <div className="reveal text-center mb-12">
          <p className="text-blue-400 font-medium text-sm tracking-wider uppercase mb-2">Get in touch</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white">Hubungi Saya</h2>
        </div>

        <div className="reveal glass rounded-2xl p-8 lg:p-10">
          <div className="text-center mb-8">
            <h3 className="font-display font-semibold text-xl lg:text-2xl text-white mb-3">Let's Work Together</h3>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              Saya terbuka untuk peluang kerja, magang, atau kolaborasi project. Hubungi saya melalui platform di bawah ini.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {contacts.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-blue-500/30 hover:bg-blue-500/[0.03] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">{c.label}</p>
                  <p className="text-white text-sm font-medium truncate">{c.value}</p>
                </div>
                <div className="flex items-center gap-2">
                  {c.onCopy && (
                    <button
                      onClick={c.onCopy}
                      className="w-9 h-9 rounded-lg border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 flex items-center justify-center transition-colors"
                      aria-label={`Copy ${c.label}`}
                    >
                      {c.copied ? <Check size={15} className="text-green-400" /> : <Copy size={15} />}
                    </button>
                  )}
                  <a
                    href={c.href || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/30 flex items-center justify-center transition-colors"
                    aria-label={`Open ${c.label}`}
                  >
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <div className="text-center mt-8">
            <a
              href={siteConfig.links.whatsapp || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-medium text-sm"
            >
              <MessageCircle size={18} /> Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

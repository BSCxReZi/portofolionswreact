import { Eye, Download, FileText } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function CVSection() {
  const cvUrl = siteConfig.links.cv;

  return (
    <section id="cv" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <div className="reveal text-center mb-12">
          <p className="text-blue-400 font-medium text-sm tracking-wider uppercase mb-2">Resume</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white">Curriculum Vitae</h2>
        </div>

        <div className="reveal glass rounded-2xl p-8 lg:p-12 text-center card-hover">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-500/10 text-blue-400 mb-6 animate-pulse-glow">
            <FileText size={36} />
          </div>

          <p className="text-slate-300 text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Download CV saya untuk melihat pengalaman, pendidikan, skill, dan project secara lebih lengkap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={cvUrl || 'src/components/CV M.NAZWA KURNIAWAN.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 px-6 py-3 rounded-xl text-slate-300 font-medium text-sm w-full sm:w-auto justify-center"
            >
              <Eye size={16} /> View CV
            </a>
            <a
              href={cvUrl || 'src/components/CV M.NAZWA KURNIAWAN.pdf'}
              download
              className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm w-full sm:w-auto justify-center"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

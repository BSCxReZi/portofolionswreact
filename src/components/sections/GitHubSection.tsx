import { Github, ArrowUpRight, Star } from 'lucide-react';
import { githubRepos } from '@/config/github';
import { siteConfig } from '@/config/site';

export function GitHubSection() {
  return (
    <section id="github" className="py-24 relative">
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="reveal text-center mb-12">
          <p className="text-blue-400 font-medium text-sm tracking-wider uppercase mb-2">Open Source</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white">GitHub Projects</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {githubRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal glass rounded-2xl p-6 card-hover group flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Github size={20} />
                </div>
                <ArrowUpRight size={18} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
              </div>

              <h3 className="font-display font-semibold text-white text-base mb-1.5 break-words">{repo.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{repo.description}</p>

              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={12} /> 0
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="reveal text-center mt-10">
          <a
            href={siteConfig.links.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium text-sm"
          >
            <Github size={18} /> Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

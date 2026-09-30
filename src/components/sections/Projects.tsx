import { useMemo, useState } from 'react';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { projects, projectFilters } from '@/config/projects';

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="reveal text-center mb-12">
          <p className="text-blue-400 font-medium text-sm tracking-wider uppercase mb-2">My Work</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white">Project Portfolio</h2>
        </div>

        {/* Filter buttons */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-10">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === f
                  ? 'btn-primary text-white'
                  : 'border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/30'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <p className="text-slate-500 text-sm">Belum ada project di kategori ini.</p>
            </div>
          ) : (
            filtered.map((project, index) => (
              <article
                key={project.id}
                className="glass rounded-2xl overflow-hidden card-hover flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-bg-secondary">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-blue-500/90 text-white text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-white text-lg mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  {project.features && project.features.length > 0 && (
                    <div className="mb-4 space-y-1.5">
                      {project.features.slice(0, 5).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-blue-400/60" />
                          <span className="text-slate-400 text-xs">{feat}</span>
                        </div>
                      ))}
                      {project.features.length > 5 && (
                        <p className="text-slate-500 text-xs pl-5">+{project.features.length - 5} more features</p>
                      )}
                    </div>
                  )}

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-400 text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-white text-sm font-medium"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-slate-300 text-sm font-medium"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

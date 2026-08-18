import Link from "next/link";

const projects = [
  {
    title: "Samba le Berger",
    description:
      "Projet de hackathon UNCHK – jeu éducatif autour de l'élevage et de la gestion de ressources.",
    category: "Game Dev",
    tech: ["C#", "Unity", "GDD"],
    year: "2023-2024",
    visual: "samba",
  },
  {
    title: "Mot Caché",
    description:
      "Jeu de mots cachés développé en stage chez Hatice Technology Studio. Conception GDD + développement.",
    category: "Game Dev",
    tech: ["C#", "Unity", "UI/UX"],
    year: "2022",
    visual: "motcache",
  },
  {
    title: "KALILOU",
    description:
      "FPS développé pour la validation du semestre 5 – gameplay dynamiques et systèmes de combat.",
    category: "Game Dev",
    tech: ["C#", "Unity", "FPS"],
    year: "2021-2022",
    visual: "kalilou",
  },
  {
    title: "Quiz_bu_ndiaw",
    description: "Application de quiz mobile développée avec Flutter.",
    category: "Mobile",
    tech: ["Flutter", "Dart"],
    year: "2022",
    visual: "quiz",
  },
  {
    title: "Labo SysAdmin & Réseau",
    description:
      "Environnements Linux, scripts d'automatisation, configuration réseau et monitoring.",
    category: "SysAdmin",
    tech: ["Linux", "Bash", "SQL", "Réseaux"],
    year: "2024-2025",
    visual: "sysadmin",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "samba") {
    return (
      <div className="h-40 bg-gradient-to-br from-amber-900/40 to-green-900/50 relative overflow-hidden flex items-center justify-center">
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-green-800/40" />
        <div className="absolute bottom-8 left-6 w-8 h-8 rounded-full bg-amber-700/60" />
        <div className="absolute bottom-10 left-16 w-6 h-10 bg-green-700/50 rounded-t-full" />
        <div className="absolute bottom-10 left-24 w-5 h-8 bg-green-600/40 rounded-t-full" />
        <div className="text-5xl opacity-30">🐑</div>
      </div>
    );
  }

  if (type === "motcache") {
    return (
      <div className="h-40 bg-gradient-to-br from-indigo-900/50 to-violet-950/60 relative flex items-center justify-center">
        <div className="grid grid-cols-5 gap-1 opacity-40">
          {"MOTCACHEJEU".split("").map((letter, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded bg-violet-500/30 border border-violet-400/20 flex items-center justify-center text-xs text-violet-200 font-mono"
            >
              {letter}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "kalilou") {
    return (
      <div className="h-40 bg-gradient-to-br from-red-950/60 to-slate-900 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15),transparent_70%)]" />
        <div className="text-5xl opacity-40">🎯</div>
        <div className="absolute top-4 right-6 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <div className="absolute bottom-6 left-8 w-16 h-1 bg-red-500/30 rounded" />
      </div>
    );
  }

  if (type === "quiz") {
    return (
      <div className="h-40 bg-gradient-to-br from-blue-900/50 to-cyan-950/60 relative flex items-center justify-center">
        <div className="w-20 h-32 rounded-2xl border-2 border-blue-400/30 bg-slate-900/50 flex flex-col items-center justify-center gap-2">
          <div className="w-12 h-2 rounded bg-blue-400/40" />
          <div className="w-10 h-2 rounded bg-blue-400/20" />
          <div className="w-8 h-2 rounded bg-blue-400/20" />
          <div className="mt-2 text-2xl opacity-50">?</div>
        </div>
      </div>
    );
  }

  // sysadmin
  return (
    <div className="h-40 bg-gradient-to-br from-emerald-950/60 to-slate-900 relative flex items-center justify-center overflow-hidden">
      <div className="font-mono text-xs text-green-500/50 space-y-1">
        <div>$ systemctl status network</div>
        <div className="text-green-400/70">● active (running)</div>
        <div>$ bash deploy.sh</div>
        <div className="text-emerald-400/60">✓ Done</div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Mes projets</h1>
          <p className="text-slate-400">
            Une sélection de projets réalisés en développement de jeux vidéo,
            applications mobiles et administration système / réseau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-slate-700 bg-slate-800/40 overflow-hidden hover:border-violet-500/40 transition-all hover:-translate-y-1"
            >
              <ProjectVisual type={project.visual} />

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-600/15 text-violet-300 border border-violet-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500">{project.year}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            Tu veux en savoir plus sur un projet ou collaborer ?
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-xl transition"
          >
            Me contacter →
          </Link>
        </div>
      </div>
    </div>
  );
}

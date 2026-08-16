import Link from "next/link";

const projects = [
  {
    title: "Samba le Berger",
    description:
      "Projet de hackathon UNCHK – jeu éducatif autour de l'élevage et de la gestion de ressources.",
    category: "Game Dev",
    tech: ["C#", "Unity", "GDD"],
    year: "2023-2024",
  },
  {
    title: "Mot Caché",
    description:
      "Jeu de mots cachés développé en stage chez Hatice Technology Studio. Conception GDD + développement.",
    category: "Game Dev",
    tech: ["C#", "Unity", "UI/UX"],
    year: "2022",
  },
  {
    title: "KALILOU",
    description:
      "FPS développé pour la validation du semestre 5 – gameplay dynamiques et systèmes de combat.",
    category: "Game Dev",
    tech: ["C#", "Unity", "FPS"],
    year: "2021-2022",
  },
  {
    title: "Quiz_bu_ndiaw",
    description: "Application de quiz mobile développée avec Flutter.",
    category: "Mobile",
    tech: ["Flutter", "Dart"],
    year: "2022",
  },
  {
    title: "Labo SysAdmin & Réseau",
    description:
      "Environnements Linux, scripts d'automatisation, configuration réseau et monitoring.",
    category: "SysAdmin",
    tech: ["Linux", "Bash", "SQL", "Réseaux"],
    year: "2024-2025",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Mes projets</h1>
          <p className="text-slate-400">
            Une sélection de projets réalisés en développement de jeux vidéo,
            applications mobiles et administration système / réseau.
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 hover:border-violet-500/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-600/15 text-violet-300 border border-violet-500/20">
                  {project.category}
                </span>
                <span className="text-xs text-slate-500">{project.year}</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed mb-5">
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
            </article>
          ))}
        </div>

        {/* CTA */}
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

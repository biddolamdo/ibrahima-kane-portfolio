import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez le parcours d'Ibrahima KANE : Licence en Informatique, formations en administration réseau, expérience en développement de jeux vidéo et leadership.",
};

const timeline = [
  {
    year: "Nov 2025",
    title: "Administrateur Réseau et Système informatique",
    place: "10h Tech",
    type: "formation",
  },
  {
    year: "2020 – 2021",
    title: "Licence en Informatique – Développement d'Applications",
    place: "UNCHK (ex-UVS)",
    type: "formation",
  },
  {
    year: "Fév – Avr 2022",
    title: "Stage GameDev – Mot Caché",
    place: "Hatice Technology Studio",
    type: "experience",
  },
  {
    year: "2020 – aujourd'hui",
    title: "Projets de jeux vidéo",
    place: "Samba le Berger, Mot Caché, KALILOU, Quiz_bu_ndiaw",
    type: "experience",
  },
  {
    year: "2017 – 2018",
    title: "Baccalauréat série L2",
    place: "Groupe Scolaire Khadija Source du Savoir, Rufisque",
    type: "formation",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
             <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-violet-500/40 shrink-0">
               <Image
                 src="/profile.png"
                 alt="Ibrahima KANE"
                 fill
                 className="object-cover"
               />
             </div>
             <div>
               <h1 className="text-3xl sm:text-4xl font-bold mb-2">À propos de moi</h1>
               <p className="text-slate-400">
                 Admin Réseau-Système & Programmeur Jeux Vidéo
               </p>
             </div>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed">
            Titulaire d&apos;une Licence en Informatique Développement d&apos;Application
            à l&apos;Université Virtuelle du Sénégal. Diplômé de l&apos;institut Agricole
            et de Leadership de THIONE NIANG. Je suis jeune, dynamique, motivé et rigoureux.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne principale */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Profil */}
            <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/50">
              <h2 className="text-xl font-semibold mb-4">Mon profil</h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Passionné par le développement de jeux vidéo et l&apos;administration des
                systèmes informatiques, je combine créativité et rigueur technique.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Mon objectif est de devenir un professionnel complet capable de concevoir
                des expériences interactives tout en garantissant la stabilité et la
                sécurité des environnements techniques.
              </p>
            </div>

            {/* Parcours */}
            <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/50">
              <h2 className="text-xl font-semibold mb-6">Parcours</h2>
              <div className="space-y-6">
                {timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-3 h-3 rounded-full mt-1.5 ${
                          item.type === "formation" ? "bg-violet-500" : "bg-green-500"
                        }`}
                      />
                      {idx < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-slate-700 mt-2" />
                      )}
                    </div>
                    <div className="pb-2">
                      <span className="text-xs text-slate-500 font-medium">{item.year}</span>
                      <h3 className="font-medium text-sm mt-0.5 text-white">{item.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{item.place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne latérale */}
          <div className="space-y-6">
            
            {/* Compétences */}
            <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/50">
              <h3 className="font-semibold mb-5">Compétences</h3>
              
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-2.5">
                    Programmation
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["C#", "HTML/CSS", "JavaScript", "SQL", "Flutter"].map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-md bg-violet-600/10 text-violet-300 text-xs border border-violet-500/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-2.5">
                    Systèmes & Réseaux
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Linux", "Windows", "macOS", "TCP/IP", "Bash"].map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-xs border border-green-500/20"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Expérience pro */}
            <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/50">
              <h3 className="font-semibold mb-3">Expérience professionnelle</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Auchan Retail Sénégal – Employé Commercial  
                (Département PGC, Responsable Rayon Épicerie Salé)
              </p>
            </div>

            {/* Téléchatgement du CV */}
            <a
              href="/CV_MdrnIbrahima_KANE.pdf.pdf"
              download
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-all"
            >
              Télécharger mon CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

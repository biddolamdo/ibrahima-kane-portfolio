import type { Metadata } from "next";
import { GraduationCap, Briefcase, Award, User } from "lucide-react";

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
    year: "2020-2021",
    title: "Licence en Informatique – Développement d'Applications",
    place: "UNCHK (ex-UVS) – Université Numérique Cheikh Hamidou Kane",
    type: "formation",
  },
  {
    year: "2017-2018",
    title: "Baccalauréat série L2",
    place: "Groupe Scolaire Khadija Source du Savoir, Rufisque",
    type: "formation",
  },
  {
    year: "Fév – Avr 2022",
    title: "Stage GameDev – Conception GDD & développement Mot Caché",
    place: "Hatice Technology Studio",
    type: "experience",
  },
  {
    year: "2020 – aujourd'hui",
    title: "Projets de jeux vidéo (Mot Caché, Quiz_bu_ndiaw, KALILOU, Samba le Berger)",
    place: "Projets académiques & hackathons",
    type: "experience",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">À propos de moi</h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Titulaire d&apos;une Licence en Informatique Développement d&apos;Application
            à l&apos;Université Virtuelle du Sénégal. Diplômé de l&apos;institut Agricole
            et de Leadership de THIONE NIANG. Je suis jeune, dynamique, motivé et rigoureux.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-violet-600/20">
                  <User className="w-5 h-5 text-violet-400" />
                </div>
                <h2 className="font-semibold text-xl">Mon profil</h2>
              </div>
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

            <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/40">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <GraduationCap className="w-5 h-5 text-green-400" />
                </div>
                <h2 className="font-semibold text-xl">Parcours</h2>
              </div>
              <div className="space-y-6">
                {timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          item.type === "formation" ? "bg-violet-500" : "bg-green-500"
                        }`}
                      />
                      {idx < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-slate-700 mt-1" />
                      )}
                    </div>
                    <div className="pb-2">
                      <span className="text-xs text-slate-500 font-medium">{item.year}</span>
                      <h3 className="font-medium text-sm mt-0.5">{item.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{item.place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/40">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-violet-400" />
                Compétences
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-2">Programmation</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["C#", "HTML/CSS", "JavaScript", "SQL", "Flutter"].map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-md bg-violet-600/10 text-violet-300 text-xs border border-violet-500/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-2">Systèmes & Réseaux</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {["Linux", "Windows", "macOS", "Réseaux TCP/IP", "Bash"].map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-xs border border-green-500/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/40">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="w-5 h-5 text-violet-400" />
                <h3 className="font-semibold">Expérience pro</h3>
              </div>
              <p className="text-sm text-slate-400">
                Auchan Retail Sénégal – Employé Commercial (Département PGC, Responsable Rayon Épicerie Salé)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

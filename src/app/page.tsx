import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 mb-8 text-xs font-medium text-violet-300 bg-violet-600/10 border border-violet-500/30 rounded-full">
            Disponible pour de nouvelles opportunités
          </div>

          {/* Nom */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Ibrahima <span className="text-violet-400">KANE</span>
          </h1>

          {/* Titre */}
          <p className="text-xl text-slate-300 mb-6">
            Admin Réseau-Système & Programmeur
          </p>

          {/* Description */}
          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Je construis des <span className="text-violet-400">mondes virtuels</span> et 
            je maintiens des <span className="text-green-400">infrastructures réelles</span>. 
            Spécialisé en développement de jeux vidéo et administration système / réseau.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/projects"
              className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-xl transition"
            >
              Voir mes projets →
            </Link>
            <Link 
              href="/contact"
              className="px-6 py-3 border border-slate-600 hover:border-violet-500 text-slate-200 hover:text-violet-400 font-medium rounded-xl transition"
            >
              Me contacter
            </Link>
          </div>

          {/* Compétences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-800/70 border border-slate-700 hover:border-violet-500/50 transition-colors text-left">
              <p className="text-violet-400 text-sm font-medium mb-2">Game Development</p>
              <p className="text-white font-semibold mb-1">Jeux Vidéo</p>
              <p className="text-sm text-slate-400">C#, Unity, Flutter, GDD</p>
            </div>
          
            <div className="p-6 rounded-2xl bg-slate-800/70 border border-slate-700 hover:border-green-500/50 transition-colors text-left">
              <p className="text-green-400 text-sm font-medium mb-2">SysAdmin & Réseau</p>
              <p className="text-white font-semibold mb-1">Infrastructure</p>
              <p className="text-sm text-slate-400">Linux, Windows, SQL, TCP/IP</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Prêt à collaborer ?</h2>
          <p className="text-slate-400 mb-8">
            Que ce soit pour un projet de jeu, une mission d&apos;administration système 
            ou une opportunité professionnelle, n&apos;hésite pas à me contacter.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-xl transition"
          >
            Envoyer un message →
          </Link>
        </div>
      </section>
    </>
  );
}

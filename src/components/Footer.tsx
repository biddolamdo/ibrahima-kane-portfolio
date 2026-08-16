import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-violet-500/20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-3">
              Ibrahima <span className="text-violet-500">KANE</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Développeur Jeux Vidéo & Administrateur Systèmes / Réseaux.
              Passionné par la création de mondes virtuels et la robustesse des infrastructures.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-violet-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-violet-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-violet-400 transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-violet-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-violet-500" />
                <a href="mailto:sonoflamdo@gmail.com" className="hover:text-violet-400 transition-colors">
                  sonoflamdo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-violet-500" />
                Diamniadio Sud-Extension, Sénégal
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/ibrahima-kane-209730204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-violet-600/20 text-slate-300 hover:text-violet-400 transition-colors text-xs"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/biddolamdo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-violet-600/20 text-slate-300 hover:text-violet-400 transition-colors text-xs"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Ibrahima KANE. Tous droits réservés.</p>
          <p>
            Construit avec <span className="text-violet-400">Next.js</span> &{" "}
            <span className="text-green-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

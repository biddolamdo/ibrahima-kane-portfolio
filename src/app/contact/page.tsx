import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Ibrahima KANE pour des opportunités professionnelles, collaborations ou questions.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h1>
          <p className="text-slate-400 text-lg">
            Une opportunité, une collaboration ou simplement une question ?
            N&apos;hésite pas à me contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Coordonnées */}
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-700 bg-slate-800/50">
            <h2 className="text-xl font-semibold mb-6">Mes coordonnées</h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <a
                  href="mailto:sonoflamdo@gmail.com"
                  className="text-violet-400 hover:text-violet-300 transition-colors font-medium"
                >
                  sonoflamdo@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-1">Téléphone</p>
                <p className="text-slate-200">+221 77 678 47 54</p>
                <p className="text-slate-200">+221 75 901 06 60</p>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-1">Localisation</p>
                <p className="text-slate-200">Diamniadio Sud-Extension, Sénégal</p>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-1">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/ibrahima-kane-209730204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 transition-colors font-medium"
                >
                  ibrahima-kane-209730204
                </a>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-1">GitHub</p>
                <a
                  href="https://github.com/biddolamdo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 transition-colors font-medium"
                >
                  github.com/biddolamdo
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="p-6 sm:p-8 rounded-2xl border border-slate-700 bg-slate-800/50">
            <h2 className="text-xl font-semibold mb-6">Envoyer un message</h2>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}

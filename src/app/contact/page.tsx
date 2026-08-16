import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h1>
          <p className="text-slate-400">
            Une opportunité, une collaboration ou simplement une question ?
            N&apos;hésite pas à me contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Informations de contact */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/50">
              <h2 className="text-lg font-semibold mb-4">Mes coordonnées</h2>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-slate-500 mb-1">Email</p>
                  <a 
                    href="mailto:sonoflamdo@gmail.com" 
                    className="text-violet-400 hover:text-violet-300 transition"
                  >
                    sonoflamdo@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-slate-500 mb-1">Téléphone</p>
                  <p className="text-slate-300">+221 77 678 47 54</p>
                  <p className="text-slate-300">+221 75 901 06 60</p>
                </div>

                <div>
                  <p className="text-slate-500 mb-1">Localisation</p>
                  <p className="text-slate-300">Diamniadio Sud-Extension, Sénégal</p>
                </div>

                <div>
                  <p className="text-slate-500 mb-1">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/ibrahima-kane-209730204"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 transition"
                  >
                    ibrahima-kane-209730204
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="p-6 rounded-2xl border border-slate-700 bg-slate-800/50">
            <h2 className="text-lg font-semibold mb-4">Envoyer un message</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Le formulaire interactif sera ajouté prochainement. 
              Pour l&apos;instant, tu peux me contacter directement par email.
            </p>
            
            <a
              href="mailto:sonoflamdo@gmail.com?subject=Contact depuis le portfolio"
              className="inline-block w-full text-center px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-xl transition"
            >
              Écrire un email →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import MiniGame from "@/components/MiniGame";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        
        {/* Background simple et stylé */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-violet-600/10 to-transparent" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500/10 to-transparent" />
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500/15 rounded-full blur-[90px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">

          {/* Photo de profil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-violet-500/50 shadow-lg shadow-violet-500/20">
              <Image
                src="/profile.png"
                alt="Ibrahima KANE"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-medium text-violet-300 bg-violet-600/10 border border-violet-500/30 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Disponible pour de nouvelles opportunités
          </motion.div>

          {/* Nom */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            Ibrahima <span className="text-violet-400">KANE</span>
          </motion.h1>

          {/* Titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-slate-300 font-medium mb-6"
          >
            Admin Réseau-Système & Programmeur
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            Je construis des{" "}
            <span className="text-violet-400 font-medium">mondes virtuels</span> et
            je maintiens des{" "}
            <span className="text-green-400 font-medium">infrastructures réelles</span>.
          </motion.p>

          {/* Double identité animée */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-12"
          >
            
            {/* Game Dev */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl bg-slate-900/80 border border-violet-500/20 hover:border-violet-500/50 transition-colors text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400 text-lg font-bold">
                  ▶
                </div>
                <div>
                  <p className="text-violet-400 text-sm font-medium">Game Development</p>
                  <p className="text-white font-semibold">Jeux Vidéo</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">C# · Unity · Flutter · GDD</p>
            </motion.div>

            {/* SysAdmin */}
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl bg-slate-900/80 border border-green-500/20 hover:border-green-500/50 transition-colors text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 text-lg font-bold">
                  $
                </div>
                <div>
                  <p className="text-green-400 text-sm font-medium">SysAdmin & Réseau</p>
                  <p className="text-white font-semibold">Infrastructure</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">Linux · Windows · SQL · TCP/IP</p>
            </motion.div>
          </motion.div>

          {/* Boutons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition-all hover:scale-105"
            >
              Voir mes projets →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600 text-slate-200 font-medium hover:border-violet-500 hover:text-violet-400 transition-all"
            >
              Me contacter
            </Link>
            <a
              href="/CV_MdrnIbrahima_KANE.pdf.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600 text-slate-200 font-medium hover:border-green-500 hover:text-green-400 transition-all"
            >
              Télécharger mon CV
            </a>
          </motion.div>
        </div>
      </section>

      {/* Mini-jeu */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Teste mon Jeux "Quiz_bu_Ndaw"</h2>
            <p className="text-slate-400 text-sm">
              Un petit jeu pour montrer mon côté Game Dev
            </p>
          </div>
          <MiniGame />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto px-4 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Prêt à collaborer ?
          </h2>
          <p className="text-slate-400 mb-8">
            Projet de jeu, mission d&apos;administration système ou opportunité
            professionnelle — contacte-moi.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition-all"
          >
            Envoyer un message →
          </Link>
        </motion.div>
      </section>
    </>
  );
}

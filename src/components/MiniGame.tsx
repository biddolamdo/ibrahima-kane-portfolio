"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Question = {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "Quel empire sénégalais était célèbre pour son or et son commerce transsaharien ?",
    options: ["Empire du Djolof", "Empire du Ghana", "Royaume du Cayor", "Empire du Mali"],
    correct: 1,
    explanation: "L'Empire du Ghana (ou Ouagadou) était un grand centre commercial d'or et de sel.",
  },
  {
    id: 2,
    question: "Qui est considéré comme le fondateur de l'Empire du Mali ?",
    options: ["Soundiata Keïta", "Mansa Moussa", "Lat Dior", "El Hadj Omar"],
    correct: 0,
    explanation: "Soundiata Keïta a fondé l'Empire du Mali au XIIIe siècle après la bataille de Kirina.",
  },
  {
    id: 3,
    question: "Quelle est la capitale de l'ancien Royaume du Cayor ?",
    options: ["Saint-Louis", "Mboul", "Gorée", "Rufisque"],
    correct: 1,
    explanation: "Mboul était la capitale historique du Royaume du Cayor.",
  },
  {
    id: 4,
    question: "Quel roi du Cayor est un héros de la résistance contre la colonisation française ?",
    options: ["Alboury Ndiaye", "Lat Dior Diop", "Damel Thiéyacine", "Makodu"],
    correct: 1,
    explanation: "Lat Dior Diop est une figure majeure de la résistance sénégalaise au XIXe siècle.",
  },
  {
    id: 5,
    question: "Quelle île sénégalaise fut un important comptoir de la traite négrière ?",
    options: ["Île de N'Gor", "Île de Gorée", "Île de Fadiouth", "Île de Carabane"],
    correct: 1,
    explanation: "L'île de Gorée est un symbole historique de la mémoire de la traite négrière.",
  },
];

export default function MiniGame() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);

  const question = questions[current];

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    setShowResult(true);
    if (index === question.correct) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setStarted(false);
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setFinished(false);
  };

  if (!started) {
    return (
      <div className="w-full max-w-lg mx-auto">
        <div className="p-6 sm:p-8 rounded-2xl border border-slate-700 bg-slate-900/80 text-center">
          <div className="text-4xl mb-4">📜</div>
          <h3 className="text-xl font-semibold mb-2">Quiz_bu_ndiaw</h3>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">
            Teste tes connaissances sur l&apos;histoire du Sénégal, ses empires
            et sa culture. Mini version inspirée de mon projet Flutter.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium transition-all"
          >
            Commencer le quiz →
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="w-full max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 sm:p-8 rounded-2xl border border-slate-700 bg-slate-900/80 text-center"
        >
          <div className="text-4xl mb-4">
            {percentage >= 80 ? "🏆" : percentage >= 50 ? "👍" : "📚"}
          </div>
          <h3 className="text-xl font-semibold mb-2">Quiz terminé !</h3>
          <p className="text-3xl font-bold text-violet-400 mb-2">
            {score}/{questions.length}
          </p>
          <p className="text-sm text-slate-400 mb-6">
            {percentage >= 80
              ? "Excellent ! Tu connais bien l'histoire du Sénégal."
              : percentage >= 50
              ? "Pas mal ! Continue d'apprendre."
              : "Il reste encore des choses à découvrir."}
          </p>
          <button
            onClick={restart}
            className="w-full py-3 rounded-xl border border-slate-600 text-slate-200 hover:border-violet-500 hover:text-violet-400 transition-all"
          >
            Rejouer
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="p-6 sm:p-8 rounded-2xl border border-slate-700 bg-slate-900/80">
        {/* Progress */}
        <div className="flex items-center justify-between mb-6 text-xs text-slate-400">
          <span>
            Question {current + 1}/{questions.length}
          </span>
          <span>Score : {score}</span>
        </div>

        {/* Barre de progression */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-violet-500 transition-all duration-300"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        <h3 className="text-base sm:text-lg font-medium text-white mb-6 leading-relaxed">
          {question.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => {
            let style =
              "w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ";

            if (selected === null) {
              style +=
                "border-slate-700 bg-slate-800/50 hover:border-violet-500/50 hover:bg-slate-800 text-slate-200 cursor-pointer";
            } else if (index === question.correct) {
              style += "border-green-500/50 bg-green-500/10 text-green-300";
            } else if (index === selected) {
              style += "border-red-500/50 bg-red-500/10 text-red-300";
            } else {
              style += "border-slate-700 bg-slate-800/30 text-slate-500";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selected !== null}
                className={style}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Explication + Suivant */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6"
            >
              {question.explanation && (
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {question.explanation}
                </p>
              )}
              <button
                onClick={nextQuestion}
                className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium transition-all"
              >
                {current + 1 < questions.length ? "Question suivante →" : "Voir le résultat"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

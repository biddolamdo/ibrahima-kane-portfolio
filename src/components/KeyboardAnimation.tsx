"use client";

import { motion } from "framer-motion";

const keys = [
  ["Q", "W", "E", "R", "T", "Y"],
  ["A", "S", "D", "F", "G", "H"],
  ["Z", "X", "C", "V", "B", "N"],
];

export default function KeyboardAnimation() {
  return (
    <div className="flex flex-col items-center gap-1.5 select-none">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1.5">
          {row.map((key, keyIndex) => (
            <motion.div
              key={key}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs sm:text-sm font-medium text-slate-300 shadow-md"
              animate={{
                backgroundColor: [
                  "rgb(30 41 59)",
                  "rgb(124 58 237)",
                  "rgb(30 41 59)",
                ],
                borderColor: [
                  "rgb(51 65 85)",
                  "rgb(167 139 250)",
                  "rgb(51 65 85)",
                ],
                color: [
                  "rgb(203 213 225)",
                  "rgb(255 255 255)",
                  "rgb(203 213 225)",
                ],
                scale: [1, 0.92, 1],
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                repeatDelay: 2.5,
                delay: rowIndex * 0.15 + keyIndex * 0.08,
              }}
            >
              {key}
            </motion.div>
          ))}
        </div>
      ))}

      {/* Barre d'espace */}
      <motion.div
        className="w-40 sm:w-48 h-9 sm:h-10 rounded-lg bg-slate-800 border border-slate-700 mt-1.5 shadow-md"
        animate={{
          backgroundColor: [
            "rgb(30 41 59)",
            "rgb(34 197 94)",
            "rgb(30 41 59)",
          ],
          borderColor: [
            "rgb(51 65 85)",
            "rgb(74 222 128)",
            "rgb(51 65 85)",
          ],
          scale: [1, 0.97, 1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 1.2,
        }}
      />
    </div>
  );
}

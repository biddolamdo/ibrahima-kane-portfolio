"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  subject: z.string().min(3, "Le sujet doit contenir au moins 3 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulation d'envoi (pour l'instant)
    // Plus tard on pourra brancher Formspree, Resend ou une API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Données du formulaire :", data);

    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-2xl border border-green-500/30 bg-green-500/10 text-center">
        <h3 className="text-xl font-semibold text-green-400 mb-2">
          Message envoyé !
        </h3>
        <p className="text-slate-300 text-sm mb-6">
          Merci pour votre message. Je vous répondrai dans les plus brefs délais.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Nom */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
          Nom complet
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
          placeholder="Votre nom"
        />
        {errors.name && (
          <p className="mt-1.5 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
          placeholder="votre@email.com"
        />
        {errors.email && (
          <p className="mt-1.5 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      {/* Sujet */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1.5">
          Sujet
        </label>
        <input
          id="subject"
          type="text"
          {...register("subject")}
          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors"
          placeholder="Sujet de votre message"
        />
        {errors.subject && (
          <p className="mt-1.5 text-sm text-red-400">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
          placeholder="Écrivez votre message ici..."
        />
        {errors.message && (
          <p className="mt-1.5 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      {/* Bouton */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3.5 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message →"}
      </button>
    </form>
  );
}

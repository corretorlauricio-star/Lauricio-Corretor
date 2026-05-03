import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 rounded-[2.5rem] border border-brand-brown/5 text-center shadow-lg"
      >
        <div className="w-20 h-20 bg-whatsapp/10 text-whatsapp rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={40} />
        </div>
        <h3 className="font-serif text-3xl mb-3 text-brand-brown">Inscrição Confirmada</h3>
        <p className="text-brand-coffee/60 text-base">Em breve você receberá nossas oportunidades exclusivas.</p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-10 rounded-[2.5rem] border border-brand-brown/5 shadow-premium">
      <div className="text-center mb-8">
        <h3 className="font-serif text-3xl text-brand-brown mb-3">Oportunidades Exclusivas</h3>
        <p className="text-brand-coffee/60 text-base leading-relaxed">Receba imóveis selecionados antes de todo mundo.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            required
            placeholder="Seu nome completo"
            className="w-full px-6 py-4.5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-brown/10 focus:bg-white transition-all text-sm font-medium"
          />
        </div>
        <div>
          <input
            type="email"
            required
            placeholder="Seu melhor e-mail"
            className="w-full px-6 py-4.5 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-brown/10 focus:bg-white transition-all text-sm font-medium"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4.5 bg-brand-brown text-white rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all disabled:opacity-70 disabled:cursor-not-wait btn-shadow mt-4"
        >
          {loading ? "Processando..." : "Quero receber"}
        </button>
      </form>
    </div>
  );
}

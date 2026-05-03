import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface LinkButtonProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'whatsapp';
  priority?: boolean;
}

export default function LinkButton({ href, label, icon: Icon, variant = 'secondary', priority = false }: LinkButtonProps) {
  const getStyles = () => {
    switch (variant) {
      case 'whatsapp':
        return 'bg-whatsapp text-white border-transparent hover:bg-[#1ebe5d]';
      case 'primary':
        return 'bg-brand-brown text-white border-transparent hover:bg-brand-dark';
      default:
        return 'bg-white text-brand-brown border-brand-brown/10 hover:border-brand-brown/30 shadow-sm';
    }
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        y: -2,
        boxShadow: "0 15px 30px -10px rgba(60, 42, 33, 0.2)"
      }}
      whileTap={{ scale: 0.98 }}
      className={`
        w-full py-4 px-6 rounded-2xl border flex items-center justify-center gap-3 
        font-medium text-lg transition-all duration-300 btn-shadow
        ${getStyles()}
        ${priority ? 'py-5 font-semibold ring-4 ring-whatsapp/10' : ''}
      `}
    >
      {Icon && <Icon size={22} />}
      <span>{label}</span>
    </motion.a>
  );
}

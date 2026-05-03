import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Globe, 
  Calendar, 
  TrendingUp, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight,
  BadgeCheck
} from 'lucide-react';
import LinkButton from './components/LinkButton';
import PropertyCard from './components/PropertyCard';
import LeadForm from './components/LeadForm';

export default function App() {
  const properties = [
    {
      image: 'https://i.postimg.cc/NMk4mYgp/Whats-App-Image-2024-09-26-at-13-43-33.jpg',
      type: 'Apartamento (2 Suítes)',
      location: 'Vistas Jardins, Viva Park Porto Belo',
      price: 'R$ 1.900.000'
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      type: 'Casa de Luxo',
      location: 'Brava, Balneário Camboriú',
      price: 'R$ 8.500.000'
    },
    {
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
      type: 'Penthouse Oceânica',
      location: 'Centro, Balneário Camboriú',
      price: 'R$ 12.900.000'
    }
  ];

  const whatsappNumber = '47991994599';
  const whatsappMessage = encodeURIComponent('Olá! Vim pelo link da bio e gostaria de mais informações.');

  return (
    <div className="min-h-screen px-4 pb-24 pt-16 max-w-lg mx-auto">
      {/* Background Decorative Element */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-brand-brown/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-[100px] opacity-30" />
      </div>

      {/* HERO SECTION */}
      <header className="text-center mb-16 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="relative inline-block mb-8"
        >
          <div className="w-36 h-36 rounded-full p-1.5 border-2 border-brand-gold/40 shadow-xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img 
                src="https://i.postimg.cc/MpXHd1C6/GMHW2287.jpg" 
                alt="Laurício Festa" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-lg border border-brand-brown/5"
          >
            <BadgeCheck className="w-7 h-7 text-brand-gold fill-brand-brown" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="text-[10px] tracking-[0.4em] font-semibold text-brand-gold uppercase mb-3">
            Real Estate Specialist
          </p>
          <h1 className="font-serif text-5xl text-brand-brown mb-4 tracking-tight leading-none">
            Laurício Festa
          </h1>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-4" />
          <p className="text-brand-coffee/80 text-base font-light max-w-[320px] mx-auto leading-relaxed">
            Especialista em imóveis de alto padrão e investimentos em Balneário Camboriú
          </p>
        </motion.div>
      </header>

      {/* ACTION BUTTONS */}
      <section className="space-y-5 mb-20">
        <LinkButton 
          href={`https://wa.me/55${whatsappNumber}?text=${whatsappMessage}`} 
          label="Consultoria no WhatsApp" 
          variant="whatsapp"
          icon={MessageCircle}
          priority
        />
        <LinkButton 
          href="https://seusite.com.br" 
          label="Explorar Portfólio" 
          icon={Globe}
          variant="primary"
        />
        <LinkButton 
          href="#" 
          label="Agendar Visita Exclusiva" 
          icon={Calendar}
        />
        <LinkButton 
          href="#" 
          label="Tendências de Mercado" 
          icon={TrendingUp}
        />
      </section>

      {/* VITRINE SECTION */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8 px-2">
          <h2 className="font-serif text-3xl text-brand-brown tracking-tight">Seleção Premium</h2>
          <motion.button 
            whileHover={{ scale: 1.05, x: 5 }}
            className="flex items-center gap-2 text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]"
          >
            Ver Catálogo <ArrowRight size={14} />
          </motion.button>
        </div>
        
        <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar -mx-4 px-6 scroll-smooth">
          {properties.map((prop, idx) => (
            <PropertyCard 
              key={idx} 
              image={prop.image}
              type={prop.type}
              location={prop.location}
              price={prop.price}
            />
          ))}
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="mb-20">
        <LeadForm />
      </section>

      {/* FOOTER */}
      <footer className="text-center px-6">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mb-8"
        >
          <p className="text-xs text-brand-brown/40 font-bold tracking-[0.2em] uppercase mb-1">
            Balneário Camboriú • SC
          </p>
          <div className="w-8 h-px bg-brand-gold/30 mx-auto" />
        </motion.div>
        
        <div className="flex justify-center gap-10 text-brand-brown/40 mb-10">
          <motion.a whileHover={{ y: -5, color: '#3C2A21' }} href="#" className="transition-all">
            <Instagram size={24} />
          </motion.a>
          <motion.a whileHover={{ y: -5, color: '#3C2A21' }} href="#" className="transition-all">
            <Linkedin size={24} />
          </motion.a>
          <motion.a whileHover={{ y: -5, color: '#3C2A21' }} href="#" className="transition-all">
            <Youtube size={24} />
          </motion.a>
        </div>

        <p className="text-[10px] text-brand-brown/30 font-medium tracking-wider">
          © {new Date().getFullYear()} LAURÍCIO FESTA • ALTO PADRÃO
        </p>
      </footer>
    </div>
  );
}



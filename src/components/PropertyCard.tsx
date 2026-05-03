import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

interface PropertyCardProps {
  image: string;
  type: string;
  location: string;
  price: string;
  key?: string | number;
}

export default function PropertyCard({ image, type, location, price }: PropertyCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(60, 42, 33, 0.15)"
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-w-[280px] md:min-w-[320px] bg-white rounded-[2rem] overflow-hidden border border-brand-brown/5 shadow-sm group cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={type} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-5 left-5">
          <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-brand-brown">
            {type}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1.5 text-brand-coffee/60 mb-1.5">
          <MapPin size={14} />
          <span className="text-xs font-semibold tracking-wide uppercase">{location}</span>
        </div>
        <h3 className="font-serif text-2xl text-brand-brown mb-2 tracking-tight">{type}</h3>
        <p className="text-brand-gold font-bold text-lg">{price}</p>
      </div>
    </motion.div>
  );
}

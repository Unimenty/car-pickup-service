import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-[100] group">
      {/* Tooltip text */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-24 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-3 bg-white/80 backdrop-blur-3xl border border-white/40 px-6 py-3 rounded-full shadow-2xl pointer-events-none whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="font-black text-slate-500 uppercase tracking-widest italic">Concierge Chat</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/233263259860?text=Hello RiderOne, I'd like to ask a quick question about my journey!"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-20 h-20 bg-[#25D366] text-white rounded-full shadow-3xl hover:shadow-[0_20px_50px_rgba(37,211,102,0.4)] transition-all duration-500 overflow-hidden"
      >
        {/* Glassmorphism Pulse Effect */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <MessageCircle className="w-9 h-9 fill-white/20" />

        {/* Glow point */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;

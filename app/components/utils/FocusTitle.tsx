'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function FocusTitle({ children, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.9}} // Taille initiale plus petite
      whileInView={{ scale: 1.1}} // Grossit quand on arrive dessus
      viewport={{ 
        once: false,      // L'animation se répète à chaque passage
        amount: 0.8       // Se déclenche quand 80% du titre est visible
      }}
      transition={{ 
        type: "spring",   // Effet rebond fluide
        stiffness: 100, 
        damping: 20 
      }}
    >
      {children}
    </motion.div>
  );
}
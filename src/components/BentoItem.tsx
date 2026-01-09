import React from 'react';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface BentoItemProps {
    children: ReactNode;
    className?: string; // For spanning columns/rows overlay
    title?: string;
}

const BentoItem: React.FC<BentoItemProps> = ({ children, className = "", title }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            className={`bg-navy-light/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden relative group hover:border-teal-400/30 transition-all duration-500 ${className}`}
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {title && (
                <div className="absolute top-6 left-6 z-10">
                    <h3 className="text-sm font-mono text-teal-400 uppercase tracking-wider">{title}</h3>
                </div>
            )}

            <div className="h-full w-full relative z-0">
                {children}
            </div>
        </motion.div>
    );
};

export default BentoItem;

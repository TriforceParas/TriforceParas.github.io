import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { skills } from '../data/resume';

interface TechStackSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const TechStackSidebar: React.FC<TechStackSidebarProps> = ({ isOpen, onClose }) => {
    const categories = [
        { title: 'Languages', items: skills.languages, color: 'from-blue-500 to-cyan-500' },
        { title: 'Frameworks', items: skills.frameworks, color: 'from-teal-500 to-green-500' },
        { title: 'DevOps', items: skills.devops, color: 'from-purple-500 to-pink-500' },
        { title: 'Tools', items: skills.tools, color: 'from-orange-500 to-red-500' }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        onClick={onClose}
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-xl bg-navy-light/95 backdrop-blur-xl border-l border-white/10 z-50 overflow-y-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Content */}
                        <div className="p-8 md:p-12 pt-16">
                            {/* Header */}
                            <div className="mb-8">
                                <span className="text-xs uppercase tracking-wider text-teal-400 font-mono mb-4 block">
                                    Tech Stack
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                    My Technology Stack
                                </h2>
                                <p className="text-gray-400 leading-relaxed">
                                    A comprehensive overview of the technologies, frameworks, and tools I use to build robust and scalable applications.
                                </p>
                            </div>

                            {/* Categories */}
                            {categories.map((category, idx) => (
                                <div key={idx} className="mb-8">
                                    <h3 className="text-sm uppercase tracking-wider text-gray-500 font-mono mb-4">
                                        {category.title}
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {category.items.map((skill, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/5 hover:border-teal-400/30 transition-all duration-300 group"
                                            >
                                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} p-2 flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <img
                                                        src={skill.icon}
                                                        alt={skill.name}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <span className="text-gray-300 font-medium text-sm">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default TechStackSidebar;

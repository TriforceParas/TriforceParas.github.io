import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/resume';

interface ProjectSidebarProps {
    projectIndex: number | null;
    onClose: () => void;
}

const ProjectSidebar: React.FC<ProjectSidebarProps> = ({ projectIndex, onClose }) => {
    const isOpen = projectIndex !== null;
    const project = projectIndex !== null ? projects[projectIndex % projects.length] : null;

    return (
        <AnimatePresence>
            {isOpen && project && (
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
                            {/* Project Number */}
                            <span className="text-xs uppercase tracking-wider text-teal-400 font-mono mb-4 block">
                                Project 0{(projectIndex ?? 0) + 1}
                            </span>

                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                {project.title}
                            </h2>

                            {/* Description */}
                            <div className="mb-8">
                                <h3 className="text-sm uppercase tracking-wider text-gray-500 font-mono mb-3">Overview</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {project.fullDescription || project.description}
                                </p>
                            </div>

                            {/* Features (if available) */}
                            {project.features && project.features.length > 0 && (
                                <div className="mb-8">
                                    <h3 className="text-sm uppercase tracking-wider text-gray-500 font-mono mb-3">Key Features</h3>
                                    <ul className="space-y-3">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-teal-400/30 transition-colors">
                                                <div className="mt-0.5 text-teal-400">
                                                    <CheckCircle2 size={16} />
                                                </div>
                                                <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Tech Stack */}
                            <div className="mb-8">
                                <h3 className="text-sm uppercase tracking-wider text-gray-500 font-mono mb-3">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 bg-teal-400/10 text-teal-400 text-sm rounded-full border border-teal-400/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                {project.links?.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg transition-colors"
                                    >
                                        <Github size={18} />
                                        <span>View Code</span>
                                    </a>
                                )}
                                {(project.links as { github?: string; demo?: string })?.demo && (
                                    <a
                                        href={(project.links as { github?: string; demo?: string }).demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-teal-400/10 hover:bg-teal-400/20 text-teal-400 rounded-lg transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectSidebar;

import React from 'react';
import { projects } from '../data/resume';
import BentoItem from './BentoItem';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
    className?: string;
    projectIndex?: number;
    onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ className, projectIndex = 0, onClick }) => {
    // Basic modulo logic to cycle through projects if index > length
    const project = projects[projectIndex % projects.length];

    return (
        <div onClick={onClick} className={`cursor-pointer h-full ${className}`}>
            <BentoItem className="h-full group/card flex flex-col !p-6">
                <div className="flex flex-col h-full justify-center">
                    {/* Title with inline arrow */}
                    <div className="flex items-center justify-between gap-4 mb-3">
                        <h3 className="font-bold text-white text-xl leading-tight group-hover/card:text-teal-400 transition-colors truncate">
                            <span className="text-teal-400/70 font-mono mr-3">0{projectIndex + 1}</span>
                            {project.title}
                        </h3>
                        <div className="text-teal-400 opacity-60 group-hover/card:opacity-100 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-all duration-300 flex-shrink-0">
                            <ArrowUpRight size={20} />
                        </div>
                    </div>

                    <p className="text-sm text-gray-400 line-clamp-4 leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </BentoItem>
        </div>
    );
};

export default ProjectCard;


import React from 'react';
import { personalInfo, education } from '../data/resume';
import BentoItem from './BentoItem';
import { Github, Linkedin, GraduationCap } from 'lucide-react';

const ProfileCard: React.FC = () => {
    return (
        <BentoItem className="md:col-span-2 md:row-span-4 flex flex-col">
            <div className="pt-2">
                {/* Header with profile pic and name/title */}
                <div className="flex gap-6 items-start mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-teal-400 to-blue-500 flex items-center justify-center text-3xl font-bold text-navy shadow-lg shadow-teal-500/20 flex-shrink-0">
                        P
                    </div>
                    <div className="flex-1">
                        <h1 className="text-xl md:text-3xl font-bold text-white mb-2 tracking-tight">{personalInfo.name}</h1>
                        <h2 className="text-lg md:text-xl text-teal-400 font-medium">{personalInfo.title}</h2>
                    </div>
                </div>

                <p className="text-gray-400 leading-relaxed text-s mb-8">
                    {personalInfo.description}
                </p>

                <div className="flex gap-4">
                    <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-navy-light rounded-full text-gray-400 hover:text-white hover:bg-teal-400/20 border border-white/5 transition-all duration-300">
                        <Github size={22} />
                    </a>
                    <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-navy-light rounded-full text-gray-400 hover:text-white hover:bg-teal-400/20 border border-white/5 transition-all duration-300">
                        <Linkedin size={22} />
                    </a>
                </div>
            </div>

            {/* Centered Separator */}
            <div className="flex-1 flex flex-col justify-center py-6">
                <div className="w-full h-px bg-white/10" />
            </div>

            {/* Education Section */}
            <div className="pb-2">
                <h3 className="text-xs font-mono text-teal-400/80 uppercase tracking-[0.2em] mb-6">Education</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {education.map((edu, index) => (
                        <div key={index} className="flex gap-4 items-start">
                            <div className="mt-1 p-2 bg-teal-400/10 rounded-lg text-teal-400 shrink-0">
                                <GraduationCap size={18} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-sm leading-snug mb-1">{edu.degree}</h4>
                                <p className="text-gray-400 text-[11px] leading-tight mb-2">{edu.school}</p>
                                <p className="text-teal-400/60 text-[10px] font-mono tracking-wider">{edu.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BentoItem>
    );
};

export default ProfileCard;

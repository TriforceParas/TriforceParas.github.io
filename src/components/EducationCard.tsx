import React from 'react';
import { education } from '../data/resume';
import BentoItem from './BentoItem';
import { GraduationCap } from 'lucide-react';

const EducationCard: React.FC = () => {
    return (
        <BentoItem className="md:col-span-2 md:row-span-1" title="Education">
            <div className="h-full flex flex-col justify-center pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {education.map((edu, index) => (
                        <div key={index} className="flex gap-3 items-start p-3 bg-navy-light/50 rounded-xl border border-white/5 hover:border-teal-400/20 transition-colors">
                            <div className="mt-0.5 p-1.5 bg-teal-400/10 rounded-lg text-teal-400 shrink-0">
                                <GraduationCap size={16} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-xs leading-tight mb-1">{edu.degree}</h4>
                                <p className="text-gray-400 text-[10px] leading-tight">{edu.school}</p>
                                <p className="text-teal-400/60 text-[9px] font-mono mt-1">{edu.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BentoItem>
    );
};

export default EducationCard;

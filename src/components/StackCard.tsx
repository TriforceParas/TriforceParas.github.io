import React from 'react';
import { skills } from '../data/resume';
import BentoItem from './BentoItem';
import { motion } from 'framer-motion';

interface StackCardProps {
    onClick?: () => void;
}

const StackCard: React.FC<StackCardProps> = ({ onClick }) => {
    // Combine all skills for the ticker or grid
    const allSkills = [
        ...skills.languages,
        ...skills.frameworks,
        ...skills.devops,
        ...skills.tools
    ];

    return (
        <div onClick={onClick} className="cursor-pointer h-full md:col-span-2">
            <BentoItem className="h-full flex flex-col justify-center overflow-hidden relative group/stack" title="Tech Stack">

                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy-light/80 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy-light/80 to-transparent z-20 pointer-events-none"></div>

                <div className="flex w-full overflow-hidden relative z-10 h-full items-center">
                    <motion.div
                        className="flex gap-10 px-4 w-max items-center"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear"
                        }}
                        style={{
                            // Pause on hover
                            animationPlayState: "running",
                        }}
                    >
                        {/* We use CSS hover on the parent to pause this via a class or style approach? 
                             Framer motion doesn't support 'pause on hover' natively easily with infinite loop loop. 
                             Actually, standard CSS animation is easier for 'pause on hover'. 
                             Let's switch to standard CSS marquee for robust pausing.
                         */}
                    </motion.div>

                    {/* Re-implementing with pure CSS for constant slow scroll */}
                    <div className="flex gap-10 w-max animate-marquee" style={{ animationDuration: '60s' }}>
                        {[...allSkills, ...allSkills, ...allSkills, ...allSkills].map((skill, i) => (
                            <div key={i} className="flex flex-col items-center justify-center w-14">
                                <div className="w-10 h-10 transition-transform duration-300 transform">
                                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter grayscale-0 transition-all opacity-80" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </BentoItem>
        </div>
    );
};

export default StackCard;


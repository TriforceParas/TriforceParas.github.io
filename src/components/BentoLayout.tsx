import React from 'react';
import type { ReactNode } from 'react';

interface BentoLayoutProps {
    children: ReactNode;
}

const BentoLayout: React.FC<BentoLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-navy text-slate-300 p-8 md:p-12 flex flex-col items-center justify-center overflow-x-hidden">
            <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-[180px_repeat(3,160px)] gap-6">
                {children}
            </div>
        </div>
    );
};

export default BentoLayout;


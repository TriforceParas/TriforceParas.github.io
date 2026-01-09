import { useState } from 'react';
import BentoLayout from './components/BentoLayout';
import ProfileCard from './components/ProfileCard';
import StackCard from './components/StackCard';
import ProjectCard from './components/ProjectCard';
import ProjectSidebar from './components/ProjectSidebar';
import TechStackSidebar from './components/TechStackSidebar';


function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isTechStackOpen, setIsTechStackOpen] = useState(false);

  return (
    <div className="bg-navy min-h-screen">
      <BentoLayout>
        {/* Col 0-1, Row 0-4 */}
        <ProfileCard />

        {/* Col 2-3, Row 0 */}
        <StackCard onClick={() => setIsTechStackOpen(true)} />

        {/* Row 1: Projects 1-2 */}
        <ProjectCard projectIndex={0} onClick={() => setSelectedProject(0)} />
        <ProjectCard projectIndex={1} onClick={() => setSelectedProject(1)} />

        {/* Row 2: Projects 3-4 */}
        <ProjectCard projectIndex={2} onClick={() => setSelectedProject(2)} />
        <ProjectCard projectIndex={3} onClick={() => setSelectedProject(3)} />

        {/* Row 3: Projects 5-6 */}
        <ProjectCard projectIndex={4} onClick={() => setSelectedProject(4)} />
        <ProjectCard projectIndex={5} onClick={() => setSelectedProject(5)} />
      </BentoLayout>

      <ProjectSidebar
        projectIndex={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <TechStackSidebar
        isOpen={isTechStackOpen}
        onClose={() => setIsTechStackOpen(false)}
      />
    </div>
  );
}

export default App;


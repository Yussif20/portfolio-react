// Projects.tsx
import { useState, useRef, useEffect } from 'react';
import { projects, Project } from '../projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'html' | 'react' | 'nextjs'>(
    'react'
  );
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [underlinePosition, setUnderlinePosition] = useState<string>('0px');

  interface ProjectCategories {
    html: Project[];
    react: Project[];
    nextjs: Project[];
  }

  const projectCategories: ProjectCategories = {
    html: projects.filter((project) =>
      ['Todo App', 'Age by Day Calculator'].includes(project.title)
    ),
    react: projects.filter((project) =>
      ['Marketio', 'Mars', 'Around the World', 'Kanban Board'].includes(
        project.title
      )
    ),
    nextjs: [],
  };

  const handleTabChange = (tab: 'html' | 'react' | 'nextjs') => {
    setSelectedTab(tab);
  };

  const getLeftPosition = (): string => {
    const tabsOrder: ('html' | 'react' | 'nextjs')[] = [
      'html',
      'react',
      'nextjs',
    ];
    const index = tabsOrder.indexOf(selectedTab);
    const tab = tabRefs.current[index];
    if (tab) {
      const tabWidth = tab.offsetWidth;
      const tabLeft = tab.offsetLeft;
      return `${tabLeft + (tabWidth - 60) / 2}px`;
    }
    return '0px';
  };

  useEffect(() => {
    const updatePosition = () => {
      setUnderlinePosition(getLeftPosition());
    };

    updatePosition();

    const resizeObserver = new ResizeObserver(() => {
      updatePosition();
    });

    tabRefs.current.forEach((tab) => {
      if (tab) resizeObserver.observe(tab);
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, [selectedTab]);

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-center text-4xl font-bold mb-12 text-gray-800 dark:text-white">
        My Projects
      </h2>

      <div className="w-[300px] mx-auto py-1 px-1 flex items-center justify-between mb-12 bg-white dark:bg-gray-800 text-black dark:text-white text-sm font-medium leading-5 rounded-lg shadow-md relative">
        <button
          ref={(el) => (tabRefs.current[0] = el)}
          className={`border-none transition-all duration-300 cursor-pointer text-gray-600 dark:text-gray-300 rounded-[6px] py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white ${
            selectedTab === 'html'
              ? 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white font-semibold scale-105'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabChange('html')}
        >
          HTML/CSS/JS
        </button>
        <button
          ref={(el) => (tabRefs.current[1] = el)}
          className={`border-none transition-all duration-300 cursor-pointer text-gray-600 dark:text-gray-300 rounded-[6px] py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white ${
            selectedTab === 'react'
              ? 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white font-semibold scale-105'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabChange('react')}
        >
          React
        </button>
        <button
          ref={(el) => (tabRefs.current[2] = el)}
          className={`border-none transition-all duration-300 cursor-pointer text-gray-600 dark:text-gray-300 rounded-[6px] py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white ${
            selectedTab === 'nextjs'
              ? 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white font-semibold scale-105'
              : 'bg-transparent'
          }`}
          onClick={() => handleTabChange('nextjs')}
        >
          Next.js
        </button>
        <span
          className="absolute bottom-0 h-1 bg-[#03a696] transition-all duration-300"
          style={{
            width: '60px',
            left: underlinePosition,
          }}
        />
      </div>

      <div className="flex justify-center items-center min-h-fit px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {projectCategories[selectedTab].length > 0 ? (
            projectCategories[selectedTab].map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.img}
                liveUrl={project.liveLink}
                githubUrl={project.githubLink}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
              No projects available in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

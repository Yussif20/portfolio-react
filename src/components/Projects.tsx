import { useState, useRef, useEffect } from 'react';
import { projects, Project } from '../projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'html' | 'react'>('react');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [underlinePosition, setUnderlinePosition] = useState<string>('0px');
  const [underlineWidth, setUnderlineWidth] = useState<string>('0px');

  interface ProjectCategories {
    html: Project[];
    react: Project[];
  }

  const projectCategories: ProjectCategories = {
    html: projects.filter((project) =>
      ['Todo App', 'Age by Day Calculator'].includes(project.title)
    ),
    react: [
      projects.find((project) => project.title === 'Marketio'),
      projects.find((project) => project.title === 'Mars'),
      projects.find((project) => project.title === 'Golden Metal'),
      ...projects
        .filter((project) =>
          ['Around the World', 'Kanban Board'].includes(project.title)
        )
        .sort((a, b) => a.title.localeCompare(b.title)),
    ].filter(Boolean) as Project[],
  };

  const handleTabChange = (tab: 'html' | 'react') => {
    setSelectedTab(tab);
  };

  const getLeftPosition = (): string => {
    const tabsOrder: ('html' | 'react')[] = ['html', 'react'];
    const index = tabsOrder.indexOf(selectedTab);
    const tab = tabRefs.current[index];
    if (tab) {
      const tabWidth = tab.offsetWidth;
      const tabLeft = tab.offsetLeft;
      setUnderlineWidth(`${tabWidth}px`);
      return `${tabLeft}px`;
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
    <section
      id="projects"
      className="py-16 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="text-center text-4xl font-bold mb-12 text-gray-800 dark:text-white"
      >
        My Projects
      </h2>

      <div
        className="w-fit mx-auto py-1 px-1 flex gap-2 items-center justify-center mb-12 bg-white dark:bg-gray-800 text-black dark:text-white text-sm font-medium leading-5 rounded-lg shadow-md relative"
        role="tablist"
      >
        <button
          ref={(el) => (tabRefs.current[0] = el)}
          className={`transition-all duration-300 cursor-pointer rounded-[6px] py-2 px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#03a696] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 ${selectedTab === 'html' ? 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white font-semibold scale-105' : 'bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white'}`}
          aria-selected={selectedTab === 'html'}
          aria-controls="html-projects"
          role="tab"
          onClick={() => handleTabChange('html')}
        >
          HTML/CSS/JS
        </button>

        <button
          ref={(el) => (tabRefs.current[1] = el)}
          className={`transition-all duration-300 cursor-pointer rounded-[6px] py-2 px-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#03a696] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 ${selectedTab === 'react' ? 'bg-gray-100 dark:bg-gray-700 text-black dark:text-white font-semibold scale-105' : 'bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white'}`}
          aria-selected={selectedTab === 'react'}
          aria-controls="react-projects"
          role="tab"
          onClick={() => handleTabChange('react')}
        >
          React
        </button>

        <span
          className="absolute bottom-0 h-1 bg-[#03a696] transition-all duration-300"
          style={{ left: underlinePosition, width: underlineWidth }}
        />
      </div>

      <div className="flex justify-center items-center min-h-fit px-8">
        <div
          id={`${selectedTab}-projects`}
          role="tabpanel"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl"
        >
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

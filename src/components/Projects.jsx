import React from 'react';
import { projects } from '../projects';
const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-center text-4xl font-bold mb-12">My Projects</h2>
      <div className="flex flex-col gap-20 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div
              className={`flex-1 ${(index + 1) % 2 !== 0 ? 'sm:order-1' : 'sm:order-2'}`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-80 object-contain object-center"
              />
            </div>
            <div
              className={`flex-1 text-center flex flex-col items-center justify-center ${(index + 1) % 2 !== 0 ? 'sm:order-2' : 'sm:order-1'}`}
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-400 font-medium mb-4">
                {project.description}
              </p>
              <div className="flex gap-4 font-semibold">
                <a
                  href={project.githubLink}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={project.liveLink}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

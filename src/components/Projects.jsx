import React from 'react';

import { projects } from '../projects';
const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-center text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between">
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

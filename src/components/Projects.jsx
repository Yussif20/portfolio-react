import { projects } from '../projects';
const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-center text-4xl font-bold mb-12">My Projects</h2>
      <div className="flex flex-col gap-20 px-6">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center justify-center gap-4">
            <div
              className={`flex-1 ${(index + 1) % 2 !== 0 ? 'order-1' : 'order-2'}`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-80 object-contain object-top"
              />
            </div>
            <div
              className={`flex-1 text-center flex flex-col items-center justify-center ${(index + 1) % 2 !== 0 ? 'order-2' : 'order-1'}`}
            >
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

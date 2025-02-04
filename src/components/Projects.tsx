import { projects } from '../projects';
import ProjectCard from './ProjectCard';

type Project = {
  id: number;
  title: string;
  img: string;
  description: string;
  liveLink: string;
  githubLink: string;
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-center text-4xl font-bold mb-12">My Projects</h2>
      <div className="flex justify-center items-center min-h-screen p-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  w-full">
          {projects.map((project: Project, index: number) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.img}
              liveUrl={project.liveLink}
              githubUrl={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

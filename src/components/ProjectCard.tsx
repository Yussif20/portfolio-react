type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="relative max-w-md w-full rounded-2xl p-6 bg-white/20 dark:bg-gray-800/40 backdrop-blur-lg shadow-2xl border border-white/30 dark:border-gray-700/20 hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
      {/* Project Image */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Project Details */}
      <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mt-3 text-gray-700 dark:text-gray-300">{description}</p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-greenColor text-white rounded-lg shadow-md hover:bg-[#33b8a5] transition-colors duration-300"
          >
            Live Demo
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

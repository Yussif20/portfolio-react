// Skills.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGithub,
  faPython,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import typescriptLogo from '../assets/typescript.svg';
import nextjsLogo from '../assets/next-js.svg';
import tailwindLogo from '../assets/tailwind-css.svg';

const skills = [
  { name: 'HTML', icon: faHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: faCss3, color: 'text-blue-500' },
  { name: 'Sass', icon: faSass, color: 'text-pink-500' },
  { name: 'TailwindCSS', icon: tailwindLogo, color: 'text-blue-400' },
  { name: 'JavaScript', icon: faJs, color: 'text-yellow-500' },
  { name: 'TypeScript', icon: typescriptLogo, color: 'text-blue-400' },
  { name: 'React.Js', icon: faReact, color: 'text-cyan-500' },
  { name: 'Next.Js', icon: nextjsLogo, color: 'text-gray-900 dark:text-white' }, // Updated color
  {
    name: 'Github',
    icon: faGithub,
    color: 'text-gray-800 dark:text-githubColorDark',
  },
  { name: 'Python', icon: faPython, color: 'text-blue-600' }, // Added color back
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-black">
      <h2 className="text-center text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        Technologies
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill rounded-[1.2rem] p-[1.2rem] m-[10px] text-center bg-white dark:bg-gray-800 shadow transition ease-in-out duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,123,255,0.5)]"
          >
            {typeof skill.icon === 'string' ? (
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className="w-16 h-16 mx-auto text-gray-900 dark:text-white" // Ensure SVG visibility
              />
            ) : (
              <FontAwesomeIcon
                icon={skill.icon}
                className={`text-6xl ${skill.color}`}
              />
            )}
            <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

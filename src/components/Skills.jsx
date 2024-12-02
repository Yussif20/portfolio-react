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

const skills = [
  { name: 'HTML', icon: faHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: faCss3, color: 'text-blue-500' },
  { name: 'JavaScript', icon: faJs, color: 'text-yellow-500' },
  { name: 'ReactJs', icon: faReact, color: 'text-cyan-500' },
  {
    name: 'Github',
    icon: faGithub,
    color: 'text-gray-800 dark:text-githubColorDark',
  },
  { name: 'Python', icon: faPython, color: 'text-blue-600' },
  { name: 'Sass', icon: faSass, color: 'text-pink-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-black">
      <h2 className="text-center text-4xl font-bold mb-8">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className=" skill rounded-[1.2rem] p-[1.2rem] m-[10px] text-center shadow transition ease-in-out duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(0,123,255,0.5)]"
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className={`text-6xl ${skill.color}`}
            />
            <p className="mt-4 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

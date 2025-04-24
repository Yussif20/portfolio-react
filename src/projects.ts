import marketioImg from './assets/projects/marketio.jpeg';
import aroundTheWorldImg from './assets/projects/aroundTheWorld.jpeg';
import marsImg from './assets/projects/mars.jpeg';
import kanbanImg from './assets/projects/kanban.jpeg';
import todoImg from './assets/projects/todo.jpeg';
import ageCalculatorImg from './assets/projects/ageCalculator.jpeg';

export interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
  liveLink: string;
  githubLink: string;
}

export const projects = [
  {
    id: 1,
    title: 'Marketio',
    img: marketioImg,
    description:
      'Marketio is a fully responsive e-commerce app built with React.js and Tailwind CSS. It features product search, multi-language support, user authentication, and payment integration for a seamless shopping experience.',
    liveLink: 'https://marketio-hpgs.vercel.app/',
    githubLink: 'https://github.com/Yussif20/Marketio',
  },
  {
    id: 2,
    title: 'Mars',
    img: marsImg,
    description:
      'Mars is a modern React app offering seamless eSIM-based mobile connectivity. It enables users to explore, select, and instantly activate digital SIMs for local, regional, or global data plans. With global coverage and flexible options, Mars eliminates physical SIMs, ideal for travelers and remote workers.',
    liveLink: 'https://mars-lemon.vercel.app/',
    githubLink: 'https://github.com/Yussif20/Mars',
  },
  {
    id: 3,
    title: 'Around the World',
    img: aroundTheWorldImg,
    description:
      'A React.js app that lets users explore countries worldwide. It fetches data from the REST Countries API and presents it in an interactive and visually appealing interface.',
    liveLink: 'https://around-the-world-reactjs.vercel.app/',
    githubLink: 'https://github.com/Yussif20/around-the-world_reactjs',
  },
  {
    id: 4,
    title: 'Kanban Board',
    img: kanbanImg,
    description:
      "A responsive task management tool built with React. It features draggable tasks, customizable boards, and smooth drag-and-drop functionality using '@dnd-kit/sortable' for an efficient workflow.",
    liveLink: 'https://kanban-board-three-liart.vercel.app/',
    githubLink: 'https://github.com/Yussif20/kanban-board',
  },
  {
    id: 5,
    title: 'Todo App',
    img: todoImg,
    description:
      'A simple and intuitive Todo App built with HTML, CSS, and JavaScript. It allows users to add, check, delete, filter, and reorder tasks, with support for light and dark themes.',
    liveLink: 'https://todo-app-cyan-ten-81.vercel.app/',
    githubLink: 'https://github.com/Yussif20/TODO-App',
  },
  {
    id: 6,
    title: 'Age by Day Calculator',
    img: ageCalculatorImg,
    description:
      'An interactive age calculator built with HTML, CSS, and JavaScript. Users can input their birth date to calculate their age in years, months, and days, with a modern and responsive design.',
    liveLink: 'https://age-by-day-calculator-js.vercel.app/',
    githubLink: 'https://github.com/Yussif20/age-by-day-calculator-js',
  },
];

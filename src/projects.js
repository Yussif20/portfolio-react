import marketioImg from "./assets/projects/marketio.jpeg"
import aroundTheWorldImg from "./assets/projects/aroundTheWorld.jpeg"
import kanbanImg from "./assets/projects/kanban.jpeg"
import todoImg from "./assets/projects/todo.jpeg"
import ageCalculatorImg from "./assets/projects/ageCalculator.jpeg"

export const projects = [
    {
        id: 1,
        title: 'Marketio',
        img:marketioImg,
        description: 'Marketio is a fully responsive e-commerce application built with React.js and Tailwind CSS. It offers a seamless shopping experience with various functionalities like product search, multi-language support, user authentication, payment integration, and more.',
        liveLink: 'https://marketio-hpgs.vercel.app/',
        githubLink:"https://github.com/Yussif20/Marketio",
    },
    {
        id: 2,
        title: 'Around the world',
        img:aroundTheWorldImg,
        description: 'A React.js project showcasing a user-friendly interface to explore countries around the world. The app fetches data using the REST Countries API and displays it in an interactive and visually appealing manner.',
        liveLink: 'https://around-the-world-reactjs.vercel.app/',
        githubLink:"https://github.com/Yussif20/around-the-world_reactjs",
    },
    {
        //when opening the website for the first time not showing the board
        id: 3,
        title: 'Kanban board',
        img:kanbanImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim id, adipiscing nec, ultricies sed, dolor.',
        liveLink: 'https://kanban-board-three-liart.vercel.app/',
        githubLink:"https://github.com/Yussif20/kanban-board",
    }
    ,
    {
        //fix the x icon (images) bug
        id:4 ,
        title: 'Todo',
        img:todoImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim id, adipiscing nec, ultricies sed, dolor.',
        liveLink: 'https://todo-app-cyan-ten-81.vercel.app/',
        githubLink:"https://github.com/Yussif20/TODO-App",
    },
    {
        id:5 ,
        title: 'Age by day calculator',
        img:ageCalculatorImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim id, adipiscing nec, ultricies sed, dolor.',
        liveLink: 'https://age-by-day-calculator-js.vercel.app/',
        githubLink:"https://github.com/Yussif20/age-by-day-calculator-js",
    }
]

// make sure all of them have a readme file 
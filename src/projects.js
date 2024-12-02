import marketioImg from "./assets/projects/marketio.jpeg"
import aroundTheWorldImg from "./assets/projects/aroundTheWorld.jpeg"
import kanbanImg from "./assets/projects/kanban.jpeg"
import todoImg from "./assets/projects/todo.jpeg"
import ageCalculatorImg from "./assets/projects/ageCalculator.jpeg"

export const projects = [
    {
        // fix the current lang when first open the website
        // fix the founders styles 
        // fix the input styles in the sign page 
        // try to navigate to the top of the page when routing
        // fix the vercel routing problem
        id: 1,
        title: 'Marketio',
        img:marketioImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim id, adipiscing nec, ultricies sed, dolor.',
        liveLink: 'https://marketio-hpgs.vercel.app/',
        githubLink:"https://github.com/Yussif20/Marketio",
    },
    {
        id: 2,
        title: 'Around the world',
        img:aroundTheWorldImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim id, adipiscing nec, ultricies sed, dolor.',
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
        //fix the x icon (images) bug
        id:4 ,
        title: 'Age by day calculator',
        img:ageCalculatorImg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim id, adipiscing nec, ultricies sed, dolor.',
        liveLink: 'https://age-by-day-calculator-js.vercel.app/',
        githubLink:"https://github.com/Yussif20/age-by-day-calculator-js",
    }
]
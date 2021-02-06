import WorkIcon from "@material-ui/icons/Work";
import { Link } from "react-router-dom";
const details = {
    name: "Ujjwal Khadka",
    title: "Work Student",
    birthday: "06 December 1987",
    job: "Looking for part-time offers*",
    email: "u.khadka@jacobs-university.de",
    educationName: "Jacobs University Bremen",
    workExperience: [
        {
            jobtitle: "WordPress Intern",
            jobexperienceyear: "Jan 2020 - March 2020",
            jobtext: [
                "Built websites using WordPress, wrote coding using HTML, CSS, and Javascript.",
                "Prepared website proposals to present to clients, and Provided technical support to clients.",
                "Designed new features for existing websites. ",
                "Managed a user guide to help clients understand site features to increase visitor satisfaction.",
            ],
        },
        {
            jobtitle: "Technical Marketer/Bench Sales",
            jobexperienceyear: "June 2019 - Dec 2019",
            jobtext: [
                "Worked with hiring managers to define job requirements, job postings, and develop new sourcing strategies. ",
                "Collaborated with third-party recruiting companies to source candidates from diverse pools of job seekers. ",
            ],
        },
    ],
    education: [
        {
            instuitionName: "Jacobs University",
            instuitiondate: "2020 - 2023",
            instuitiontext: " Computer Science, Class of 2023",
        },
    ],
    services: [
        {
            icon: <WorkIcon />,
            title: " Web Development",
            titleText: "I have been working on web design for 10 years",
        },
        {
            icon: <WorkIcon />,
            title: " Branding Identityt",
            titleText: "We will make you a brand that is catchy and leaves a trace.",
        },
        {
            icon: <WorkIcon />,
            title: " Web Development",
            titleText: "I have been working on web design for 10 years",
        },
        {
            icon: <WorkIcon />,
            title: " Web Development",
            titleText: "I have been working on web design for 10 years",
        },
    ],
    skills: [
        {
            name: "Frontend Skills",
            technologies: ["HTML5", "CSS3", "ReactJS", "Bootstrap"],
        },
        {
            name: "Backend SKills",
            technologies: ["NodeJS", "Express"],
        },
        {
            name: "Database Skill",
            technologies: ["Firebase", "MongoDB"],
        },
    ],
    projects: [
        {
            tag: "Fullstack",
            title: "Fullstack MERN App",
            description: "Shows where you will be roaming next year by fetching random images from API",
            demoLink: "https://khadkauj.github.io/FullstackApp/",
            image: "https://source.unsplash.com/collection/8806655/800*600",
        },
        {
            tag: "Fullstack",
            title: "Realtime-Chatbox",
            description: "A real-time Messenger like app to chat with your friend..",
            demoLink: "https://khadkauj.github.io/chatbox/",
            image: "https://source.unsplash.com/collection/8806655/800*600",
        },
        {
            tag: "Fullstack",
            title: "LinkedIn Clone",
            description: "LinkedIn clone that lets you login and post your ideas.",
            demoLink: "https://khadkauj.github.io/my-news/",
            image: "https://source.unsplash.com/collection/8806655/800*600",
        },

        {
            tag: "Frontend",
            title: "Lovebot-Tinder-Clone",
            description: "A Tinder-like-Clone where you can share your photo and swap people",
            demoLink: "https://khadkauj.github.io/lovebot/",
            image: "https://source.unsplash.com/collection/8806655/800*600",
        },
        {
            tag: "Frontend",
            title: "RoboShop",
            description: "A roboshop, which shows you a random robots.",
            demoLink: " https://khadkauj.github.io/roboApp/",
            image: "https://source.unsplash.com/collection/8806655/800*600",
        },

        {
            tag: "Backend",
            title: "NodeJS Server Api",
            description: "A  hotel dish API made using NodeJS, Express, and MongoDB",
            demoLink: "https://github.com/khadkauj/Node-MongoDB-HotelDishMenu",
            image: "https://source.unsplash.com/collection/8806655/800*600",
        },
    ],
};

export default details;

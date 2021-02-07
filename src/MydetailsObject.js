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
			instuitioncourses: [
				"Introduction to computer Science",
				"Programming in C/C++",
				"Introduction to Microeconomics",
				"Calculus and Linear Algebra I",
				"German A1.1",
			],
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
		{
			name: "Other Progaming skills",
			technologies: ["C/C++", "Haskell", "OOP", "Lua/Love2D"],
		},
	],
	projects: [
		{
			tag: "Fullstack",
			title: "Fullstack MERN App",
			description: "Shows where you will be roaming next year by fetching random images from API",
			demoLink: "https://khadkauj.github.io/FullstackApp/",
			image:
				"https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/147027643_159323175999498_197650222610487487_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=9XwINViLf-IAX90tIHH&_nc_ht=scontent-frx5-1.xx&oh=3fa1351761fda4c915338b1c7e421a6c&oe=60462021",
		},
		{
			tag: "Fullstack",
			title: "Realtime-Chatbox",
			description: "A real-time Messenger like app to chat with your friend..",
			demoLink: "https://khadkauj.github.io/chatbox/",
			image:
				"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/147094368_159323165999499_4039701925295920226_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=zg-EBnreQ_sAX_tAnOZ&_nc_ht=scontent-frt3-1.xx&oh=22ef2260982107e9d3d0a0e04ab8325c&oe=6044CD41",
		},
		{
			tag: "Fullstack",
			title: "LinkedIn Clone",
			description: "LinkedIn clone that lets you login and post your ideas.",
			demoLink: "https://khadkauj.github.io/my-news/",
			image:
				"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/148424503_159323162666166_126783620619360518_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=96HCUIHevXwAX8CgaQO&_nc_ht=scontent-frt3-1.xx&oh=341a5942d2c83986263056ad09ff7fca&oe=60471E75",
		},

		{
			tag: "Frontend",
			title: "Lovebot-Tinder-Clone",
			description: "A Tinder-like-Clone where you can share your photo and swap people",
			demoLink: "https://khadkauj.github.io/lovebot/",
			image:
				"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/147040735_159323189332830_3474997453812595971_o.jpg?_nc_cat=109&ccb=2&_nc_sid=730e14&_nc_ohc=tNjY-MFfOc0AX9g0Fc9&_nc_ht=scontent-frt3-1.xx&oh=327fff8806c9d34af6881ab5dd7e6781&oe=6044F533",
		},
		{
			tag: "Frontend",
			title: "RoboShop",
			description: "A roboshop, which shows you a random robots.",
			demoLink: " https://khadkauj.github.io/roboApp/",
			image:
				"https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/147040735_159323182666164_9112354116462442179_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=SYkxolNmwK8AX9vM9RN&_nc_ht=scontent-frx5-1.xx&oh=8d7e004789c40751ee42db8d1ae3f01a&oe=604601B5",
		},

		{
			tag: "Backend",
			title: "NodeJS Server Api",
			description: "A  hotel dish API made using NodeJS, Express, and MongoDB",
			demoLink: "https://github.com/khadkauj/Node-MongoDB-HotelDishMenu",
			image: "https://docs.tilt.dev/assets/docimg/example-nodejs-3-liveupdate.png",
		},
	],
};

export default details;

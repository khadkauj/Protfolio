import WorkIcon from "@material-ui/icons/Work";
import chatbox from "./assests/chatbox.jpg"
import profile from "./assests/profile.jpg"
import pic from "./pic.jpg"


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
			technologies: ["ReactJS", "Angular", "HTML5", "CSS3/Sass", ],
		},
		{
			name: "Backend SKills",
			technologies: ["NodeJS", "Express", "NestJS"],
		},
		{
			name: "Database Skill",
			technologies: ["Firebase", "MongoDB"],
		},
		{
			name: "Other Progaming skills",
			technologies: ["C/C++", "Javascript", "Typescript", "OpenCV", "OOP", "Haskell","Lua/Love2D"],
		},
		{
			name: "Development Tools",
			technologies: ["VS code", "Visual Studio 2019", "Sublime Text Editor", "VCS Git", "Postman"],
		},
	],
	projects: [
		{
			tag: "Fullstack",
			title: "Fullstack MERN App",
			description: "Shows where you will be roaming next year by fetching random images from API",
			demoLink: "https://khadkauj.github.io/FullstackApp/",
			image: "https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/147027643_159323175999498_197650222610487487_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=ySWq6fZitLoAX_Yf4v_&_nc_ht=scontent-frx5-1.xx&oh=56832a884c0301fc98eb1c9c8b7bcdcc&oe=6071A1A1",
		},
		{
			tag: "Fullstack",
			title: "Realtime-Chatbox",
			description: "A real-time Messenger like app to chat with your friend..",
			demoLink: "https://khadkauj.github.io/chatbox/",
			image: "https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/147094368_159323165999499_4039701925295920226_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=go3IdyqeS84AX_Sqd-I&_nc_ht=scontent-frt3-1.xx&oh=03fa5489890af08f8d3cb88682dcd32e&oe=60744341",
		},
		{
			tag: "Fullstack",
			title: "LinkedIn Clone",
			description: "LinkedIn clone that lets you login and post your ideas.",
			demoLink: "https://khadkauj.github.io/my-news/",
			image:
				"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/148424503_159323162666166_126783620619360518_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=f_eHzIIuJ5kAX8ZB3C6&_nc_ht=scontent-frt3-1.xx&oh=f24fa91f6161aa6f1da597f1286eab63&oe=60729FF5",
		},

		{
			tag: "Frontend",
			title: "Lovebot-Tinder-Clone",
			description: "A Tinder-like-Clone where you can share your photo and swap people",
			demoLink: "https://khadkauj.github.io/lovebot/",
			image:
				"https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/148326163_159328879332261_7091389066543487271_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=VqbwtUSFYv8AX_c_vav&_nc_ht=scontent-frt3-1.xx&oh=89f909e2826dbe17ce47b021f89e789e&oe=60756D6D",
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

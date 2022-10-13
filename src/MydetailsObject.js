import WorkIcon from "@material-ui/icons/Work";
import chatbox from "./assests/chatbox.jpg"
import profile from "./assests/profile.jpg"
import pic from "./pic.jpg"


const details = {
	name: "Ujjwal Khadka",
	title: "Work Student",
	birthday: "06 December 1987",
	job: "Frontend Developer",
	email: "u.khadka@jacobs-university.de",
	educationName: "Jacobs University Bremen",
	workExperience: [

		
		{
			jobtitle: "Frontend Developer- Cerascreen Gmbh, Hamburg, Germany",
			jobexperienceyear: "Jun 2021 - present",
			jobtext: [
				"Built overlays for existing websites using Ab Tasty,",
				"Created ab tests, and helped convert thousands of visitors to customers,",
				"Maintained and solved issues in the existing websites and tests",
			],
		},
		{
			jobtitle: "Fullstack Developer- Onea Care gmbh,  Düsseldorf, Germany",
			jobexperienceyear: "March 2021 - June 2021",
			jobtext: [
				"Created dynamically upgradable JSON forms for different customers’ requirements using NGX Formly,",
				"Designed new features like a chat box and for the existing website,",
				"enabled the application to be ready for i18n,",
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
			technologies: ["ReactJS", "Angular", "HTML5", "CSS3/Sass", 'Flask' ],
		},
		{
			name: "Backend SKills",
			technologies: ["NodeJS", "Express", "NestJS"],
		},
		{
			name: "Database Skill",
			technologies: ["Firebase", "MongoDB", 'MYSQL'],
		},
		{
			name: "Other Progaming skills",
			technologies: ["C/C++", "Javascript", "Typescript", "Python","OpenCV", "OOP", "Haskell","Lua/Love2D"],
		},
		{
			name: "Development Tools",
			technologies: ["VS code", "Visual Studio 2019", "Sublime Text Editor", "VCS Git", "Postman"],
		},
		{
			name: "Cyber security",
			technologies: ['Burp Suite', 'OWASP top 10','sqlmap', 'subdomain-enum tools', 'OSINT tools', 'kali Linux'],
		},

	],
	projects: [
		{
			tag: "Fullstack",
			title: "Jacsy",
			description: "A forum for a University- Ask/answer, shop, and stalk!",
			demoLink: "https://festive-noether-e12858.netlify.app/",
			image: "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/311493474_550364200228725_620104567038310325_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=rAc6mOyacJ0AX84izYx&_nc_ht=scontent-ham3-1.xx&oh=00_AT8nbCsMulpge1gHvcYqAbRHvrq43RzjXntKwZLjJuyunA&oe=634D37E4",
		},
		{
			tag: "Fullstack",
			title: "Realtime-Chatbox",
			description: "A real-time Messenger like app to chat with your friend..",
			demoLink: "https://khadkauj.github.io/chatbox/",
			image: "https://scontent-ham3-1.xx.fbcdn.net/v/t39.30808-6/311364127_550364190228726_2033039860565846214_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=HCsiQhEOcg4AX99kJRN&_nc_ht=scontent-ham3-1.xx&oh=00_AT_6WVB4kniNMbTKexQCXO8uGAA3ewFzdird1KwKR6-sqg&oe=634C241C",
		},
		
	],
};

export default details;

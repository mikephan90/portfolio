let resumeData = {
	imagebaseurl: "",
	name: "Mike Phan",
	role: "Junior Software Engineer",
	linkedinId: "linkedin.com/in/khoamphan/",
	socialLinks: [
		{
			name: "linkedin",
			url: "https://www.linkedin.com/in/khoamphan/",
			className: "fa fa-linkedin",
		},
		{
			name: "github",
			url: "http://github.com/mikephan90",
			className: "fa fa-github",
		},
	],
	phone: "614-619-4867",
	address: "Columbus, OH",
	website: " ",
	education: [
		{
			name: "Oregon State University",
			specialization: "Computer Science",
			monthOfPassing: "March",
			yearOfLeaving: "2020",
		},
		{
			name: "The Ohio State University",
			specialization: "Architecture",
			monthOfPassing: "May",
			yearOfLeaving: "2014",
		},
	],
	work: [
		{
			companyName: "PCI Design Group",
			title: "Architectural Designer",
			monthOfLeaving: "Current",
			yearOfLeaving: " ",
			description: [
				"Executed designs for multi-million dollar residential apartment buildings",
				"Coordinated projects through a variety of phases in design to meet building code requirements and optimized construction practices, decreasing costs of labor and materials",
				"Facilitated workflow and distribution of work following strict schedules and deadlines to team members, engineers and development teams, reducing turn-around times of drawings and information",
				"Oversaw building construction to verify accuracy of designs and resolved issues for on-site coordination between multiple construction trades."
			],
		},
		{
			companyName: "LUSK Architecture",
			title: "Associate Architect",
			monthOfLeaving: "November",
			yearOfLeaving: "2018",
			description: [
				"Maintained relationships with a variety of clients, from local retailers to national brands such as Starbucks and Toyota, by meeting demands and requirements with efficiency.",
				"Redesigned drafting standards to decrease coordination issues between consultants and team members.",
				"Designed and developed realistic and conceptual renderings to increase clientele interest",
				"Coordinated with team members between multiple trades to ensure requirements and deadlines are met."
			],
		},
		{
			companyName: "DSA Architects",
			title: "Intern Architect",
			monthOfLeaving: "Sep",
			yearOfLeaving: "2015",
			description: [
				"Dolor sunt laboris elit qui laborum laboris nostrud. Incididunt ea exercitation incididunt pariatur dolor ",
				"Dolor sunt laboris elit qui laborum laboris nostrud. Incididunt ea exercitation incididunt pariatur dolor ",
			],
		},
	],
	skills: [
		{
			type: "Programming",
			skillname: "C/C++",
		},
		{
			type: "Programming",
			skillname: "Java",
		},
		{
			type: "Front-End Development",
			skillname: "React",
		},
		{
			type: "Front-End Development",
			skillname: "React-Native",
		},
		{
			type: "Front-End Development",
			skillname: "Javascript",
		},
		{
			type: "Front-End Development",
			skillname: "CSS",
		},
		{
			type: "Back-End Development",
			skillname: "Node.js",
		},
		{
			type: "Back-End Development",
			skillname: "mongoose",
		},
		{
			type: "Back-End Development",
			skillname: "RESTful APIs",
		},
		{
			type: "Database",
			skillname: "MongoDB",
		},
	],
	portfolio: [
		{
			name: "hour",
			description:
				"Study of a mobile application using Yelp's API server to help users locate businesses with special hours for drinks and food. User authorization and tokenization were used in conjunction with its own API server calling data from a mongoDB database server.",
			techList: ["node.js", "react-native", "mongoose", "mongoDB"],
			imgurl: "/Natours/natours-1.jpg",
			siteUrl: "",
			github: "https://github.com/mikephan90/hour",
		},
		{
			name: "Natours",
			description:
				"Web application based on a Udemy course to allow users to book outdoor adventure tours around the states. This application is a study that utilized a custom API server with CRUD operations and credit card payments using Stripe for bookings. ",
			techList: ["node.js", "mongoose", "postman", "RESTful API", "mongoDB"],
			imgurl: "/Natours/natours-1.jpg",
			siteUrl: "https://natours-mikephan90.herokuapp.com/",
			github: "https://github.com/mikephan90/natours",
		},
		{
			name: "Pryce",
			description:
				"Curriculum capstone project. Mobile application that used crowd-sourced data to let users scan retail merchandise with sale prices within their geographical area into a database system. Users can scan, search or add items into a shopping list to help find the lowest prices.",
			techList: ["python", "react-native", "mongoose", "PostgreDB"],
			imgurl: "/Natours/natours-1.jpg",
			siteUrl: "",
			github: "https://github.com/mikephan90/Pryce",
		},
	],
	otherProjects: [
		{
			name: "URL Shortener",
			description: "Dolor sunt laboris elit qui laborum laboris nostrud. Incididunt ea exercitation incirt",
			techList: ["node.js", "react-native", "mongoose"],
			siteUrl: "",
			icon: ["fa fa-github", "fa external-link-alt"],
		},
		{
			name: "Drag and Drop",
			description: "Dolor sunt laboris elit qui laborum laboris nostrud. Incididunt ea exercitation incididunt ",
			techList: ["node.js", "react-native", "mongoose"],
			siteUrl: "",
			icon: ["fa fa-github", "fa external-link-alt"],
		},
		{
			name: "Building a Zoom Replica",
			description: "Dolor sunt laboris elit qui laborum laboris nostrud. Incididunt ea exercitation incidi",
			techList: ["node.js", "react-native", "mongoose"],
			siteUrl: "",
			icon: ["fa fa-github", "fa external-link-alt"],
		},
	],
};

export default resumeData;

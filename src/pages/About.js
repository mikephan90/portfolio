import React from "react";
import styled from "styled-components";

import SectionHeader from "../components/SectionHeader";
import resumeData from "../resumeData";

const About = (props) => {
	return (
		// <AboutWrapper id="about">
		// 	<div className="about">
		// 		<div className="header-col">
		// 			<img alt="" src={require("../assets/ohiostate.jpg")} />
		// 		</div>
		// 		<div className="main-col">
		// 			<h2>About Me</h2>
		// 			<p>{resumeData.aboutme}</p>
		//             <h2>Contact Me</h2>
		// 			<p>Feel free to contact me for any job inquiries or questions! I'm available through LinkedIn as well as email!</p>
		// 		</div>
		// 	</div>
		// </AboutWrapper>

		<AboutWrapper id="about">
			<AboutInfo>
				<AboutHeader>
					{/* <SpanNumber>
						1.
						<SpanContent> About Me</SpanContent>
					</SpanNumber> */}
					<SectionHeader num="1." title="about me" />
				</AboutHeader>
				<p>
					Hello there! I'm {resumeData.name}, an aspiring software engineer located in {resumeData.address}.
				</p>
				<p>{resumeData.aboutme[0]}</p>
				<p>{resumeData.aboutme[1]}</p>
				<p>{resumeData.aboutme[2]}</p>
				<p>
					Technologies I am used and familiar with:
					<TechList>
						<TechItem>
							<li>JavaScript</li>
							<li>React</li>
							<li>Node.js</li>
							<li>HTML & CSS</li>
						</TechItem>
						<TechItem>
							<li>React-Native</li>
							<li>RESTful API</li>
							{/* <li>Mongoose</li> */}
							<li>C++</li>
							<li>Java</li>
						</TechItem>
					</TechList>
				</p>

				<p>Education</p>
				<div>
					<p>
						Oregon State University
						<div>Bachelor's of Science in Computer Science</div>
						<div>2020</div>
					</p>
				</div>
				<div>
					<p>
						The Ohio State University
						<div>Bachelor's of Science in Architecture</div>
						<div>2014</div>
					</p>
				</div>
			</AboutInfo>
		</AboutWrapper>
	);
};

export default About;

const TechList = styled.ul`
	display: flex;
	flex-direction: row;
	font: 12px/1.9em "Montserrat", serif;
`;

const TechItem = styled.div`
	text-align: left;
	padding-right: 45px;
`;

const AboutHeader = styled.div`
	display: flex;
	flex-direction: row;
	color: red;
	font: 32px/1.9em "Montserrat", serif;
`;

const AboutInfo = styled.div`
	width: 450px;
	color: #d3d3d3;
`;

const AboutWrapper = styled.div`
	width: 75%;
	display: flex;
	vertical-align: center;
	height: 100vh;
	margin-left: 20%;
	margin-top: 15%;
`;

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// Material UI
import Grid from "@material-ui/core/Grid";
// Scroll Reveal
import { srConfig } from "../config";
import sr from "../utils/ScrollReveal";
// Components
import SectionHeader from "../components/SectionHeader";

const About = (props) => {
	let resumeData = props.resumeData;

	const revealContainer = useRef(null);
	useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

	return (
		<AboutWrapper id="about" ref={revealContainer}>
			<SectionHeader num="1." title="about me" />
			<Grid container spacing={3}>
				<Grid item xs>
					<AboutInfo>
						<p>
							Hello there! I'm {resumeData.name}, an aspiring {resumeData.role} located in{" "}
							{resumeData.address}.
						</p>
						<p>
							I really enjoy creating web applications through the entire stack. For me, understanding the
							entirety of a project lets me really be engaged. My goal is to continue my learning through
							developing and create exceptional work.
						</p>
						<p>
							The journey to become a software engineer has been a long one for me. I started my career
							out in architecture after graduating from The Ohio State University (Go Bucks!) and worked
							in the industry for a few years. I realized how much I loved to create and build but felt
							limited in what I could actually do with the profession I was in. Web applications and
							software is where I found those restrictions lifted.
						</p>
						<p>
							I went back to school online at Oregon State University, where I graduated with my second
							degree. With this, I'm eager to continue in my new career, creating and building again but
							this time in technology.
						</p>
						<div>
							Technologies I've used and familiar with:
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
									<li>C++</li>
									<li>Java</li>
								</TechItem>
							</TechList>
						</div>
					</AboutInfo>
					<Education>Education</Education>
					<EducationInfo>
						{resumeData.education.map((item, i) => {
							return (
								<EdItem key={i}>
									<div>
										<LinkStyle href="https://github.com/mikephan90/portfolio">
											{item.name}
										</LinkStyle>
										<div>B.S. {item.specialization}</div>
										<div>
											{item.MonthOfPassing} {item.YearOfPassing}
										</div>
									</div>
								</EdItem>
							);
						})}
					</EducationInfo>
				</Grid>
				<Grid item xs className="photo-container">
					<div>
						<img src={require("../assets/ohiostate.jpg")} className="photo" alt="" />
					</div>
				</Grid>
			</Grid>
		</AboutWrapper>
	);
};

export default About;

const TechList = styled.ul`
	display: flex;
	flex-direction: row;
	font: 12px/1.9em "Montserrat", serif;
`;

const TechItem = styled.span`
	text-align: left;
	padding-right: 45px;
`;

const Education = styled.p`
	color: white;
`;

const EdItem = styled.li`
	font: 12px/1.9em "Montserrat", serif;
	list-style: none;
	color: #6f6f6f;
`;

const EducationInfo = styled.div`
	display: flex;
	color: #fff;
	justify-content: space-between;
`;

const LinkStyle = styled.a`
	position: relative;
	font: 14px "Montserrat", serif;
	text-align: center;
	text-decoration: none;
	color: white;
	transition: all 0.5s ease-in-out;
	&:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: 0;
		left: 0;
		background-color: #3d3d3d;
		visibility: hidden;
		transform: scaleX(0);
		transform-origin: bottom left;
		transition: all 0.5s ease-in-out 0s;
	}

	&:hover {
		&:before {
			visibility: visible;
			transform: scaleX(1);
		}
		color: red;
		shadow: 2px 2px 2px;
	}
`;

const AboutInfo = styled.div`
	color: #d3d3d3;
`;

const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;

	margin-right: 20%;
	margin-left: 20%;

	p {
		text-align: justify;
		text-justify: inter-word;
	}

	.photo-container {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.photo {
		max-width: 300px;
		max-height: 300px;
		border: 4px solid #ff8000;
		border-radius: 3px;
		background: #1e1e1e;
		opacity: 0.5;
		transition: all 0.5s ease-in-out;
		&:hover {
			opacity: 1;
			box-shadow: 4px 1px 5px #0e0e0e;
		}
	}
`;

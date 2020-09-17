import React from "react";

import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import SectionHeader from "../components/SectionHeader";

const About = (props) => {
	return (
		<AboutWrapper id="about">
			<AboutHeader>
				<SectionHeader num="1." title="about me" />
			</AboutHeader>
			<Grid container spacing={3}>
				<Grid item xs>
					<AboutInfo>
						<p>
							Hello there! I'm {props.resumeData.name}, an aspiring software engineer located in{" "}
							{props.resumeData.address}.
						</p>
						<p>{props.resumeData.aboutme[0]}</p>
						<p>{props.resumeData.aboutme[1]}</p>
						<p>{props.resumeData.aboutme[2]}</p>
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
				</Grid>
				<Grid item xs>
					<Photo src={require("../assets/ohiostate.jpg")} />
					<EducationInfo>
						<p>Education</p>
						<EdItem>
							<div>
								<LinkStyle href="https://github.com/mikephan90/portfolio">
									Oregon State University,
									<span> 2020</span>
								</LinkStyle>
								<div>B.S. Computer Science</div>
							</div>
						</EdItem>
						<EdItem>
							<div>
								<LinkStyle href="https://github.com/mikephan90/portfolio">
									The Ohio State University,
									<span> 2014</span>
								</LinkStyle>
								<div>B.S. Architecture</div>
							</div>
						</EdItem>
					</EducationInfo>
				</Grid>
			</Grid>
		</AboutWrapper>
	);
};

export default About;

const Photo = styled.img`
	height: 30%;
	width: 50%;
`;

const TechList = styled.ul`
	display: flex;
	flex-direction: row;
	font: 12px/1.9em "Montserrat", serif;
`;

const TechItem = styled.span`
	text-align: left;
	padding-right: 45px;
`;

const EdItem = styled.li`
	font: 12px/1.9em "Montserrat", serif;
	list-style: none;
	color: #6f6f6f;
`;

const EducationInfo = styled.div`
	display: flex;
	flex-direction: column;
	color: #fff;
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

const AboutHeader = styled.div`
	display: flex;
	flex-direction: row;
	color: red;
	font: 32px/1.9em "Montserrat", serif;
`;

const AboutInfo = styled.div`
	align-items: right;
	color: #d3d3d3;
`;

const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	${"" /* TEST PURPOSE ONLY */}
	border: 3px dashed red;

	height: 100vh;
	padding-right: 20%;
	padding-left: 20%;
	p {
		text-align: justify;
		text-justify: inter-word;
	}
`;

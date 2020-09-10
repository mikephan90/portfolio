import React from 'react';
import styled from 'styled-components';

import SectionHeader from '../components/SectionHeader';

const About = (props) => {
	return (
		<AboutWrapper id="about">
			<AboutHeader>
				{/* <SpanNumber>
						1.
						<SpanContent> About Me</SpanContent>
					</SpanNumber> */}
				<SectionHeader num="1." title="about me" />
			</AboutHeader>
			<AboutContainer>
				<AboutInfo>
					<p>
						Hello there! I'm {props.resumeData.name}, an aspiring software engineer
						located in {props.resumeData.address}.
					</p>
					<p>{props.resumeData.aboutme[0]}</p>
					<p>{props.resumeData.aboutme[1]}</p>
					<p>{props.resumeData.aboutme[2]}</p>
					<p>
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
								{/* <li>Mongoose</li> */}
								<li>C++</li>
								<li>Java</li>
							</TechItem>
						</TechList>
					</p>
				</AboutInfo>
				<AboutRight>
					<Photo src={require('../assets/ohiostate.jpg')} />
					<EducationInfo>
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
					</EducationInfo>
				</AboutRight>
			</AboutContainer>
		</AboutWrapper>
	);
};

export default About;

const AboutRight = styled.div`
	display: flex;
	flex-direction: column;
`;

const Photo = styled.img`
	height: 320px;
	width: 410px;
	margin-left: 40px;
`;

const AboutContainer = styled.div`
	display: flex;
`;

const TechList = styled.ul`
	display: flex;
	flex-direction: row;
	font: 12px/1.9em 'Montserrat', serif;
`;

const TechItem = styled.div`
	text-align: left;
	padding-right: 45px;
`;

const AboutHeader = styled.div`
	display: flex;
	flex-direction: row;
	color: red;
	font: 32px/1.9em 'Montserrat', serif;
`;

const AboutInfo = styled.div`
	align-items: right;
	width: 430px;
	color: #d3d3d3;
`;

const EducationInfo = styled.div`
	width: 430px;
	display: flex;
	flex-direction: column;
	color: red;
	margin-left: 40px;
`;

const AboutWrapper = styled.div`
	width: 75%;
	display: flex;
	flex-direction: column;
	vertical-align: center;
	height: 100vh;
	margin-left: 20%;
	margin-top: 15%;

	p {
		text-align: justify;
		text-justify: inter-word;
	}
`;

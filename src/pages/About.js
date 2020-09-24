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
	const revealInfo = useRef(null);
	const revealTech = useRef(null);
	const revealEducation = useRef(null);

	useEffect(() => {
		sr.reveal(revealContainer.current, srConfig());
		sr.reveal(revealInfo.current, srConfig());
		sr.reveal(revealTech.current, srConfig());
		sr.reveal(revealEducation.current, srConfig());
	}, []);

	return (
		<AboutWrapper id="about" ref={revealContainer}>
			<SectionHeader num="1." title="about me" />
			<Grid container spacing={3}>
				<Grid item xs>
					<div ref={revealInfo}>
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
							I started my career out in architecture after graduating from <span className="colored">The Ohio State University</span> (Go
							Bucks!) and worked in the industry for a few years. I realized how much I loved to create
							and build but felt limited in what I could actually do with it. Web applications and
							software is where I found those restrictions lifted.
						</p>
						<p>
							I went back to school online at <span className="colored">Oregon State University</span>, where I graduated with my second
							degree. With this, I'm eager to continue in my new career, creating and building again but
							this time in technology.
						</p>
						<div ref={revealTech}>
							<TechInfo>
								Technologies I've used and familiar with:
								<TechList>
									{resumeData.skills.map((item, index) => {
										return <TechItem key={index}>{item.skillname}</TechItem>;
									})}
								</TechList>
							</TechInfo>
						</div>
					</div>
					<div ref={revealEducation}>
						<Divider />
						<Education>
							<p>Education</p>
							<ul>
								{resumeData.education.map((item, i) => {
									return (
										<li key={i}>
											<div>
												<LinkStyle href="https://github.com/mikephan90/portfolio">
													{item.name}
												</LinkStyle>
												<div>B.S. {item.specialization}</div>
												<div>
													{item.monthOfPassing} {item.yearOfLeaving}
												</div>
											</div>
										</li>
									);
								})}
							</ul>
						</Education>
					</div>
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

const TechInfo = styled.div`
	margin-top: 40px;
	display: flex;
	flex-direction: column;
	font: 12px/1.9em "Montserrat", serif;
	color: #fff;
	justify-content: flex-start;
`;

const TechList = styled.ul`
	display: flex;
	height: 100px;
	flex-wrap: wrap;
	flex-direction: column;
	font: 12px/1.9em "Montserrat", serif;
`;

const TechItem = styled.li`
	padding-right: 45px;
	font: 12px/1.9em "Montserrat", serif;
	list-style: none;
	&:before {
		font-size: 16px;
		content: "▹ ";
		color: red;
	}
`;

const Divider = styled.div`
	position: relative;
	&:after {
		content: "";
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: #1f1f1f;
	}
`;

const Education = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		color: #fff;
		font-weight: bold;
	}

	ul {
		display: flex;
		justify-content: space-between;
		width: 100%;
		color: #9f9f9f;
		margin: 0;
		padding: 0;

		li {
			font: 11px/1.9em "Montserrat", serif;
			list-style: none;
			color: #6f6f6f;
		}
	}
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

const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 120vh;
	margin-right: 20%;
	margin-left: 20%;
	color: #fff;

	p {
		text-align: justify;
		text-justify: inter-word;
	}

	.colored {
		color: red;
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

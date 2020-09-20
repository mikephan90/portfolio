import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// Material UI
import Grid from "@material-ui/core/Grid";
// Scroll Reveal
import { srConfig } from "../config";
import sr from "../utils/ScrollReveal";
// Components
import SectionHeader from "../components/SectionHeader";

const Resume = (props) => {
	let resumeData = props.resumeData;

	const revealContainer = useRef(null);
	useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

	return (
		<ResumeWrapper id="resume" ref={revealContainer}>
			<SectionHeader num="2." title="Where I've Worked" />
			<Grid container spacing={3}>
				<Grid item xs>
					<WorkInfo>
						<div className="header">This could be you!</div>
						<p className="description">
							I'm working towards getting some experience in the tech industry. As of right now, I am
							still currently employed in my previous career of architecture. Due to finances, I continued
							to work while completing my computer science degree, unable to take on internships and
							co-ops. My focus was to finish and focus on personal projects with the time I did have. I do
							bring professional work experience with some of my highlights below.
						</p>
					</WorkInfo>
					<JobContainer>
						<JobList>
							{resumeData.work.map((item, index) => {
								return (
									<li key={index}>
										<JobButton>{item.companyName}</JobButton>
									</li>
								);
							})}
						</JobList>
						<JobInfo>
							{/* Need to create useState to display specific items from array using index */}
							<div>job title here</div>
							<div>dates here</div>
							<div>
								<ul>
									{resumeData.work.map((item, index) => {
										return (
											<li key={index}>{item.description[index]}</li>
										)
									})}
									
								</ul>
							</div>
						</JobInfo>
					</JobContainer>
				</Grid>
			</Grid>
		</ResumeWrapper>
	);
};

export default Resume;

const JobInfo = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	color: white;
	width: 300px;
`;

const JobList = styled.ul`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	z-index: 3;
	width: max-content;
	padding: 0;
	margin: 0;
	list-style: none;
	

	li {
	
	}
`;

const JobContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;
`;

const JobButton = styled.div`
	width: 200px;
	text-align: left;
	border-left: 2px solid red;
	padding: 0 20px 2px;
	white-space: nowrap;
	color: white;
	font: 14px/1.9em "Montserrat", serif;
	background: none;
	border-radius: 0;
	padding-right: 15px;
	margin-right: 15px;
	cursor: pointer;

	&:hover,
	&:focus {
		background-color: rgba(2,2,2,0.5);
	}
`;

const WorkInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: #fff;
	font: 14px/1.9em "Montserrat", serif;

	.header {
		font-size: 20px;
		text-transform: uppercase;
	}

	.description {
		position: relative;
		display: flex;
		justify-content: center;
		text-align: justify;
		text-justify: inter-word;
		width: 60%;
		color: #d3d3d3;
	}
`;

const ResumeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	text-align: center;
	justify-content: center;
	margin-right: 20%;
	margin-left: 20%;
`;

import React, { useState, useEffect, useRef } from "react";
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

	const [activeTabId, setActiveTabId] = useState(0);
	const [selectedJob, setSelectedJob] = useState(false);
	const tabs = useRef([]);
	const revealContainer = useRef(null);

	useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

	const focusContainer = () => {
		return (
			<JobInfo
				onClick={() => {
					setSelectedJob(!selectedJob);
					console.log(selectedJob);
				}}
			>
				<div className="job-container">
					<div className="job-name">{resumeData.work[activeTabId].companyName}</div>
					<div className="job-date">
						{resumeData.work[activeTabId].monthOfLeaving} {resumeData.work[activeTabId].yearOfLeaving}
					</div>
					<div className="job-title">{resumeData.work[activeTabId].title}</div>
				</div>
				<div className="job-description">
					{resumeData.work[activeTabId].description.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</div>
			</JobInfo>
		);
	};

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
										<JobButton
											isActive={activeTabId === index}
											onClick={() => setActiveTabId(index)}
											ref={(el) => (tabs.current[index] = el)}
										>
											{item.companyName}
										</JobButton>
									</li>
								);
							})}
						</JobList>
						{focusContainer()}
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
	font: 12px/1.9em "Montserrat", serif;
	color: white;
	border-left: 1px solid rgba(255, 255, 255, 0.1);
	padding-left: 20px;
	min-width: 300px;
	max-width: 350px;

	.job-container {
		padding: 3px;
	}

	.job-name {
		display: inline;
		font-size: 14px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
		transition: all 0.5s ease-in-out;
	}

	.job-date {
		font-size: 12px;
		color: #aaaaaa;
	}

	.job-title {
		color: #fefefe;
	}

	.job-description {
		list-style: none;
		margin-top: 20px;
		padding-bottom: 10px;
		li {
			text-align: justify;
			text-justify: inter-word;
			
			position: relative;
			padding-left: 30px;
			margin-bottom: 10px;
			&:before {
				content: "▹";
				position: absolute;
				left: 0;
				color: #f3f3f3;
			}
		}
	}
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
	font: 14px/1.9em "Montserrat", serif;
	border-left: 2px solid ${({ isActive }) => (isActive ? "red" : "#3f3f3f")};
	color: ${({ isActive }) => (isActive ? "red" : "#2f2f2f")};
	white-space: nowrap;
	background-color: none;
	border-radius: 0;
	padding: 0 20px 2px;
	margin-right: 15px;
	transition: all 0.9s ease-in-out;
	cursor: pointer;

	&:hover,
	&:focus {
		background-color: rgba(2, 2, 2, 0.5);
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
		min-width: 550px;
		max-width: 600px;
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

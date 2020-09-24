import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// Material UI
import Grid from "@material-ui/core/Grid";
// Scroll Reveal
import { srConfig } from "../config";
import sr from "../utils/ScrollReveal";
// Components
import SectionHeaderCenter from "../components/SectionHeaderCenter";

const Resume = (props) => {
	let resumeData = props.resumeData;

	const [activeTabId, setActiveTabId] = useState(0);
	const [selectedJob, setSelectedJob] = useState(false);
	const tabs = useRef([]);
	const revealContainer = useRef(null);
	const revealJobs = useRef(null);

	useEffect(() => {
		sr.reveal(revealContainer.current, srConfig());
		sr.reveal(revealJobs.current, srConfig());
	}, []);

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
		<ResumeWrapper id="resume">
			<SectionHeaderCenter num="2." title="Where I've Worked" />
			<Grid container spacing={3}>
				<Grid item xs>
					<WorkInfo>
						<div ref={revealContainer}>
							<div className="header">This could be you!</div>
							<Divider />
							<p className="description">
								I'm working towards getting some experience in the tech industry. As of right now, I am
								still currently employed in my previous career of architecture. Due to finances, I
								continued to work while completing my computer science degree, unable to take on
								internships and co-ops. My focus was to finish and focus on personal projects with the
								time I did have. I do bring professional work experience with some of my highlights
								below.
							</p>
							<Divider />
						</div>
					</WorkInfo>
					<div ref={revealJobs}>
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
					</div>
				</Grid>
			</Grid>
		</ResumeWrapper>
	);
};

export default Resume;

const Divider = styled.div`
	content: "";
	height: 1px;
	background-color: #1f1f1f;
	margin: 10px;
`;

const JobInfo = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	font: 12px/1.9em "Montserrat", serif;
	color: #c0c0c0;
	border-left: 1px solid rgba(255, 255, 255, 0.1);
	padding-left: 20px;
	min-width: 300px;
	max-width: 350px;

	.job-container {
		padding: 3px;
	}

	.job-name {
		color: #fff;
		display: inline;
		font-size: 14px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.5);
		transition: all 0.5s ease-in-out;
	}

	.job-date {
		font-size: 12px;
	}

	.job-title {

	}

	.job-description {
		list-style: none;
		margin-top: 20px;
		padding-bottom: 10px;

		li {
			font-size: 12px;
			text-align: left;
			position: relative;
			padding-left: 30px;
			margin-bottom: 10px;
			&:before {
				content: "▹";
				font-size: 16px;
				position: absolute;
				left: 0;
				color: #B22222;
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
`;

const JobContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 50px;
`;

const JobButton = styled.div`
	width: 170px;
	text-align: left;
	font: 14px/1.9em 'David Libre', serif;
	border-left: 2px solid ${({ isActive }) => (isActive ? "red" : "#3f3f3f")};
	color: ${({ isActive }) => (isActive ? "#B22222" : "#444444")};
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
	color: #c0c0c0;
	font: 14px/1.9em "Montserrat", serif;

	.header {
		font-size: 20px;
		text-transform: uppercase;
		margin-bottom: 30px;
	}

	.description {
		position: relative;
		display: flex;
		justify-content: center;
		text-align: justify;
		text-justify: inter-word;
		min-width: 550px;
		max-width: 600px;
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

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// Material UI
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
// Scroll Reveal
import { srConfig } from "../config";
import sr from "../utils/ScrollReveal";
// Transition Group
// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import "../styles/transition.css";

const OtherProjects = (props) => {
	const revealContainer = useRef(null);
	const revealProjects = useRef([]);

	useEffect(() => {
		sr.reveal(revealContainer.current, srConfig());
		sr.reveal(revealProjects.current, srConfig());
	}, []);

	return (
		<OtherProjectStyle>
			<ProjectHeader ref={revealContainer}>Other Projects</ProjectHeader>
			<div ref={revealProjects}>
				<Grid container spacing={2}>
					{props.resumeData.map((item, index) => {
						return (
							<Grid item xs sm key={index}>
								<ProjectPaper>
									<div className="links">
										<a href="https://yahoo.com">
											<i className="fa fa-github"></i>
										</a>
										<a href="https://yahoo.com">
											<i className="fa fa-home"></i>
										</a>
									</div>
									<Typography gutterBottom className="project-header">
										{item.name}
									</Typography>
									<Typography gutterBottom className="project-description">
										{item.description}
									</Typography>
									<div className="project-tech">
										<ul>
											{item.techList.map((item, index) => {
												return <li key={index}>{item}</li>;
											})}
										</ul>
									</div>
								</ProjectPaper>
							</Grid>
						);
					})}
				</Grid>
			</div>
		</OtherProjectStyle>
	);
};

export default OtherProjects;

const ProjectPaper = styled(Paper)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	transition: all 0.4s ease-in-out;
	background-color: #1b1b1b;
	shadow: 1px 1px 1px;
	color: #fff;
	height: 100%;
	padding: 2rem 1.75rem;
	position: relative;
	border: 0px;

	&:hover {
		border: 1px solid #0f0f0f;
		background-color: #2b2b2b;
		transform: translateY(-20px);
	}

	.links {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		cursor: pointer;

		a {
			font-size: 24px;
			color: #708090;
			margin-bottom: 20px;
			transition: all 0.4s ease-in-out;
			margin-left: 20px;
			&:hover {
				color: red;
				transform: scale(1.2);
			}
		}
	}

	.project-header {
		margin: 0 0 10px;
		font: 16px/1.9em "Montserrat", serif;
		font-weight: bold;
		color: #d2d2d2;
		text-align: left;
	}

	.project-description {
		font: 12px/1.9em "Montserrat", serif;
		color: #c0c0c0;
		text-align: justify;
		text-justify: inter-word;
	}

	.project-tech {
		display: flex;
		align-items: flex-end;
		flex-grow: 1;
		flex-wrap: wrap;
		font: 10px 'David Libre', serif;

		ul {
			margin: 0;
			padding: 0;
			display: flex;
			list-style: none;
			li {
				color: #708090;
				line-height: 1.5;
				padding-right: 10px;
			}
		}
	}
`;

const ProjectHeader = styled.div`
	margin-bottom: 80px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	color: white;
	font: 18px/1.9em "Montserrat", serif;
`;

const OtherProjectStyle = styled.div`
	margin-top: 10%;
`;

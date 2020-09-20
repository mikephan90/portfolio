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
		// revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
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
									<ProjectInfo>
										<div className="button-links">
											<ButtonBase>asdf</ButtonBase>
											<ButtonBase>asdf</ButtonBase>
										</div>
										<Typography gutterBottom className="project-header">
											{item.name}
										</Typography>
										<Typography gutterBottom className="project-description">
											{item.description}
										</Typography>
										<div>
											<ul className="project-tech">
												{item.techList.map((item, index) => {
													return <li key={index}>{item}</li>;
												})}
											</ul>
										</div>
									</ProjectInfo>
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
	transition: all 0.4s ease-in-out;
	background-color: #1b1b1b;
	shadow: 1px 1px 1px;
	color: #fff;
	height: 100%;

	&:hover {
		background-color: #2b2b2b;
		transform: translateY(-20px);
	}
`;

const ProjectInfo = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 2rem 1.75rem;
	position: relative;
	align-items: flex-start;

	.button-links {
		display: flex;
		flex-direction: flex-start;
		color: #3f3f3f;
		padding-bottom: 20px;
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
		text-align: left;
	}

	.project-tech {
		display: flex;
		align-items: flex-end;
		flex-grow: 1;
		flex-wrap: wrap;
		padding: 0;
		margin: 20px 0 0 0;
		list-style: none;
		font: 10px "Montserrat", serif;
		color: #757575;

		li {
			line-height: 1.5;
			padding-right: 10px;
			padding-left: 0;
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

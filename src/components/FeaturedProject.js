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

const FeaturedProject = (props) => {
	const revealProjects = useRef([]);
	console.log(props);

	useEffect(() => {
		revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
	}, []);

	const checkImg = () => {
		if (props.id % 2 === 0) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<FeaturedStyle key={props.id} ref={(el) => (revealProjects.current[props.id] = el)}>
			<Grid container>
				{checkImg() === true ? (
					<Grid item xs={6} sm={4} container>
						<ImageOverlay>
							<ImageStyle alt="complex" src={require("../assets/Natours/natours-1.jpg")} />
						</ImageOverlay>
					</Grid>
				) : null}

				<Grid item xs={6} sm container alignItems="center">
					<Grid container>
						<Grid item xs>
							<Typography gutterBottom className="project-overline">
								Featured Project
							</Typography>
							<Typography gutterBottom className="project-header">
								{props.data.name}
							</Typography>
							<Paper className="project-description">{props.data.description}</Paper>
							<ul className="project-tech">
								{props.data.techList.map((item, index) => {
									return <li key={index}>{item}</li>;
								})}
							</ul>
							<div className="links">
								<a href={props.data.github} alt="">
									<i className="fa fa-github" />
								</a>
								<a href={props.data.siteUrl} alt="">
									<i className="fa fa-home" />
								</a>
							</div>
						</Grid>
					</Grid>
				</Grid>

				{checkImg() === false ? (
					<Grid item xs={6} sm={4} container>
						<ImageOverlay>
							<ImageStyle alt="complex" src={require("../assets/Natours/natours-1.jpg")} />
						</ImageOverlay>
					</Grid>
				) : null}
			</Grid>
		</FeaturedStyle>
	);
};

export default FeaturedProject;

const ImageStyle = styled.img`
	height: 100%;
	width: 100%;
`;

const ImageOverlay = styled(ButtonBase)`
	background: #1e1e1e;
	opacity: 0.5;
	transition: all 0.5s ease-in-out;
	&:hover {
		border: 1px solid #0f0f0f;
		opacity: 1;
		box-shadow: 4px 1px 5px #0e0e0e;
	}
`;

const FeaturedStyle = styled.div`
	color: white;
	margin-bottom: 8vh;
	text-align: right;
	border-radius: 12px;
	border: 1px solid #0f0f0f;

	transition: all 0.5s ease-in-out;
	padding: 20px;
	&:hover {
		border-radius: 10px;
		border: 1px solid #c0c0c0;
	}

	&:nth-child(even) {
		text-align: left;

		.project-overline {
			color: #c0c0c0;
			font: 14px "David Libre", serif;
		}

		.project-header {
			color: #f3f3f3;
		}

		.project-description {
			margin-right: 5%;
			margin-left: 0;
			padding: 20px;
			font-size: 14px;
			color: #c0c0c0;
			background-color: #1f1f1f;
		}

		.project-tech {
			padding: 0;
			color: #708090;
			list-style: none;
			display: flex;
			justify-content: flex-start;
			font: 10px "David Libre", serif;
			li {
				padding-right: 10px;
				padding-left: 0;
			}
		}

		.links {
			display: flex;
			justify-content: flex-start;
			cursor: pointer;
			font-size: 24px;

			a {
				color: #4f4f4f;
				i {
					transition: all 0.4s ease-in-out;
					margin: 10px;
					&:hover {
						color: red;
						transform: scale(1.2);
					}
				}
			}
		}
	}

	.project-overline {
		color: #c0c0c0;
		font: 14px "David Libre", serif;
	}

	.project-header {
		color: #f3f3f3;
	}

	.project-description {
		margin-left: 5%;
		padding: 20px;
		font-size: 14px;
		color: #c0c0c0;
		background-color: #1f1f1f;
	}

	.project-tech {
		padding: 0;
		color: #708090;
		list-style: none;
		display: flex;
		justify-content: flex-end;
		font: 10px/1.9em "David Libre", serif;
		li {
			padding-right: 0px;
			padding-left: 10px;
		}
	}

	.links {
		display: flex;
		justify-content: flex-end;
		cursor: pointer;
		font-size: 24px;

		a {
			color: #4f4f4f;
			i {
				transition: all 0.4s ease-in-out;
				margin: 10px;
				&:hover {
					color: red;
					transform: scale(1.2);
				}
			}
		}
	}
`;

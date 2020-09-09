import React from "react";

import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


// import Natours from "./projects/Natours";

const Portfolio = () => {
	return (
		<PortfolioWrapper id="portfolio">
			<SectionHeader num="3." title="Things I've Built" />
			{/* store info of projects into data sheet */}
			<FeaturedPaper>asdfdsffff</FeaturedPaper>
			<FeaturedPaper>asdfdsffff</FeaturedPaper>
			<FeaturedPaper>asdfdsffff</FeaturedPaper>

			<GridRoot>
				<ProjectSpan>Other Projects</ProjectSpan>
				{/* store info of projects into data sheet */}
				<Grid container spacing={3}>
					<Grid item xs>
						<ProjectPaper>Project 1</ProjectPaper>
					</Grid>
					<Grid item xs>
						<ProjectPaper>Project 2</ProjectPaper>
					</Grid>
					<Grid item xs>
						<ProjectPaper>Project 2</ProjectPaper>
					</Grid>
				</Grid>
			</GridRoot>
		</PortfolioWrapper>
	);
};

export default Portfolio;

const FeaturedPaper = styled(Paper)`
	width: 75%;
	height: 80vh;
	text-align: center;
	background-color: #0f0f0f;
	color: white;
	border: 1px solid white;
	margin-top: 40px;
	margin-bottom: 40px;
	transition: all 0.2s ease-in;
	&:hover {
		background-color: red;
	}
`;

const ProjectPaper = styled(Paper)`
	height: 300px;
	padding: 10px;
	margin-top: 20px;
	margin-bottom: 80px;
	text-align: center;
	transition: all 0.4s ease-in-out;
	background-color: #1b1b1b;
	shadow: 1px 1px 1px;
	color: #fff;

	&:hover {
		background-color: #2b2b2b;
		transform: translateY(-20px);
	}
`;

const ProjectSpan = styled.div`
	margin-top: 80px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	color: white;
	font: 18px/1.9em "Montserrat", serif;
`;

const GridRoot = styled.div`
	display: flex;
	flex-direction: column;
	width: 75%;
`;

const PortfolioWrapper = styled.div`
	display: flex;
	flex-direction: column;
	vertical-align: center;
	height: 100vh;
	margin-left: 20%;
	margin-top: 15%;
`;

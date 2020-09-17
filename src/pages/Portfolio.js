import React from "react";

import styled from "styled-components";
import SectionHeader from "../components/SectionHeader";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import FeaturedProject from "../components/FeaturedProject";

const Portfolio = (props) => {
	return (
		<PortfolioWrapper id="portfolio">
			<SectionHeader num="3." title="Things I've Built" />

			{props.resumeData.portfolio.map((item, index) => {
				return (
					<FeaturedProject
						key={index}
						id={index}
						title={item.name}
						description={item.description}
						techList={item.techList}
						img={item.imgurl}
					/>
				);
			})}

			<GridRoot>
				<ProjectSpan>Other Projects</ProjectSpan>
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

const ProjectPaper = styled(Paper)`
	height: 30vh;
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
	width: 100%;
	margin-top: 20%;
`;

const PortfolioWrapper = styled.div`
	display: flex;
	flex-direction: column;

	height: 250vh;
	margin-top: 15%;
	padding-right: 20%;
	padding-left: 20%;
`;

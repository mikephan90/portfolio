import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// Scroll Reveal
import sr from "../utils/ScrollReveal";
import { srConfig } from "../config";
// Components
import FeaturedProject from "../components/FeaturedProject";
import SectionHeader from "../components/SectionHeader";
import OtherProjects from "../components/OtherProjects";

const Portfolio = (props) => {
	let resumeData = props.resumeData;

	const revealProjects = useRef([]);

	useEffect(() => {
		revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
	}, []);

	const featured = () => (
		<div>
			{resumeData.portfolio.map((item, index) => {
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
		</div>
	);

	const otherProjects = () => <OtherProjects resumeData={resumeData.otherProjects} />;

	return (
		<PortfolioWrapper id="portfolio">
			<SectionHeader num="3." title="Things I've Built" />
			{featured()}
			{otherProjects()}
		</PortfolioWrapper>
	);
};

export default Portfolio;

const PortfolioWrapper = styled.div`
	display: flex;
	flex-direction: column;

	margin-right: 20%;
	margin-left: 20%;
`;

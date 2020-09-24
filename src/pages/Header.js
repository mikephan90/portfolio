import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Material UI
import { Button } from "@material-ui/core";
// Transition Group
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/transition.css";

const Header = (props) => {
	let resumeData = props.resumeData;

	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsMounted(true), 1000);
		return () => clearTimeout(timeout);
	}, []);

	const intro = () => <DescriptionH3 style={{ transitionDelay: "500ms" }}>My name is</DescriptionH3>;
	const title = () => <NameH2 style={{ transitionDelay: "600ms" }}>{resumeData.name}.</NameH2>;
	const subtitle = () => <DescriptionH2 style={{ transitionDelay: "700ms" }}>I like to build things.</DescriptionH2>;
	const bio = () => (
		<Bio style={{ transitionDelay: "400ms" }}>
			I'm an aspiring {resumeData.role} located in {resumeData.address} specializing in building web
			applications using the latest technology.
		</Bio>
	);
	const ContactButton = () => (
		<Button
			style={{
				marginTop: "40px",
				height: "40px",
				width: "150px",
				color: "white",
				transitionDelay: "800ms",
			}}
			variant="outlined"
			color="secondary"
			href="mailto:khoaphan90@gmail.com"
		>
			Get in Touch!
		</Button>
	);

	const info = [intro, title, subtitle, bio, ContactButton];

	return (
		<HeaderStyle id="home">
			<TransitionGroup component={null}>
				{isMounted &&
					info.map((item, i) => (
						<CSSTransition key={i} classNames="fadeup" timeout={1000}>
							{item}
						</CSSTransition>
					))}
			</TransitionGroup>
		</HeaderStyle>
	);
};

export default Header;

// STYLING
const NameH2 = styled.h2`
	color: #fff;
	font: 60px "Montserrat", serif;
	margin-bottom: -40px;
`;

const DescriptionH2 = styled.h2`
	color: #3d3d3d;
	font: 42px "Montserrat", serif;
`;

const DescriptionH3 = styled.h3`
	color: #fff;
	font: 18px "Montserrat", serif;
	margin-bottom: -40px;
`;

const Bio = styled.p`
	text-align: justify;
	text-justify: inter-word;
	color: #d3d3d3;
	width: 50%;
`;

const HeaderStyle = styled.div`
	display: flex;
	flex-direction: column;
	height: 80vh;
	margin-top: 15%;
	padding-right: 20%;
	padding-left: 20%;
`;

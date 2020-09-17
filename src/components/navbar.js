import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/transition.css";
import { Button } from "@material-ui/core";
import { Link } from "react-scroll";
import Headroom from "react-headroom";
import ResumePDF from "../assets/mikephan-resume.pdf";

export default function Navbar() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsMounted(true), 1000);
		return () => clearTimeout(timeout);
	}, []);

	const home = () => <NavItems style={{ transitionDelay: "1000ms" }}>Mike Phan</NavItems>;
	const about = () => (
		<NavItems style={{ transitionDelay: "200ms" }}>
			<NavSpan>1. </NavSpan>
			<Link to="about" smooth={"easeOutQuart"} offset={-80} duration={800} delay={150}>
				About
			</Link>
		</NavItems>
	);
	const experience = () => (
		<NavItems style={{ transitionDelay: "300ms" }}>
			<NavSpan>2. </NavSpan>
			<Link to="resume" smooth={"easeOutQuart"} offset={-80} duration={900} delay={150}>
				Experience
			</Link>
		</NavItems>
	);
	const portfolio = () => (
		<NavItems style={{ transitionDelay: "400ms" }}>
			<NavSpan>3. </NavSpan>
			<Link to="portfolio" smooth={"easeOutQuart"} offset={-80} duration={1000} delay={150}>
				Portfolio
			</Link>
		</NavItems>
	);
	const contact = () => (
		<NavItems style={{ transitionDelay: "500ms" }}>
			<NavSpan>4. </NavSpan>
			<Link to="contact" smooth={"easeOutQuart"} offset={0} duration={1500} delay={150}>
				Contact
			</Link>
		</NavItems>
	);

	const ResumeButton = () => (
		<Button
			style={{
				height: "40px",
				width: "100px",
				color: "white",
				transitionDelay: "700ms",
			}}
			variant="outlined"
			color="secondary"
			href={ResumePDF}
			download="mikephan-resume.pdf"
		>
			Resume
		</Button>
	);

	const nav = [about, experience, portfolio, contact, ResumeButton];

	return (
		<NavStyle>
			<Headroom
				className="display"
				style={{
					padding: "20px",
					display: "flex",
					background: "#0f0f0f",
					alignItems: "center",
					transition: "all 1s ease-in-out",
				}}
				pinStart={10}
				downTolerance={1}
				upTolerance={1}
			>
				<NavHome>{home()}</NavHome>
				<NavBarStyle>
					<TransitionGroup component={null}>
						{isMounted &&
							nav.map((item, i) => (
								<CSSTransition key={i} classNames="fadedown" timeout={1000}>
									{item}
								</CSSTransition>
							))}
					</TransitionGroup>
				</NavBarStyle>
			</Headroom>
		</NavStyle>
	);
}

// STYLESS

const NavBarStyle = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
`;
const NavHome = styled.div`
	width: 10%;
`;

const NavSpan = styled.span`
	color: #3f3f3f;
	margin-right: 8px;
`;

const NavItems = styled.div`
	display: flex;
	align-items: center;
	color: #fff;
	cursor: pointer;
	font: 12px "Montserrat", sans-serif;
	font-weight: bold;
	padding-right: 20px;
	text-transform: uppercase;
	letter-spacing: 1px;
	z-index: 11;
	height: 40px;

	a {
		color: #fff;
		text-decoration: none;
		transition: all 0.5s ease-in-out;
		&:hover {
			color: red;
		}
	}
`;

const NavStyle = styled.nav`
	.display {
		color: #fff;
		cursor: pointer;

		.current {
			color: red;
		}

		.active {
			color: red;
		}
	}
`;

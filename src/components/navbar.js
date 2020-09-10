import React from "react";

import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-scroll";
import Headroom from "react-headroom";
import ResumePDF from "../assets/mikephan-resume.pdf";

export default function Navbar() {
	return (
		<NavStyle>
			<Headroom
				className="display"
				style={{
					padding: "25px",
					display: "flex",
					justifyContent: "space-between",
					background: "#0f0f0f",
					transition: "all 1s ease-in-out",
					// boxShadow: "2px 2px 2px #000"
				}}
				onPin={() => console.log("pinned")}
				onUnpin={() => console.log("unpinned")}
				pinStart={10}
				downTolerance={1}
				upTolerance={1}
			>
				<NavItems>
					<Link activeClass="active" to="home" spy={true} smooth={"easeOutQuart"} offset={-400} duration={1000} delay={150}>
						Mike Phan
					</Link>
				</NavItems>
				
				<NavItems>
					<NavSpan>1. </NavSpan>
					<Link activeClass="active" to="about" spy={true} smooth={"easeOutQuart"} offset={-80} duration={1000} delay={150}>
						About
					</Link>
					<NavSpan>2.  </NavSpan>
					<Link activeClass="active" to="resume" spy={true} smooth={"easeOutQuart"} offset={-80} duration={1000} delay={150}>
						Experience
					</Link>
					<NavSpan>3.  </NavSpan>
					<Link activeClass="active" to="portfolio" spy={true} smooth={"easeOutQuart"} offset={-80} duration={1000} delay={150}>
						Portfolio
					</Link>
					<NavSpan>4.  </NavSpan>
					<Link activeClass="active" to="contact" spy={true} smooth={"easeOutQuart"} offset={20} duration={1000} delay={150}>
						Contact
					</Link>
					{/* GET BUTTON STYLE HERE MATERIAL UI */}
					<Button
						style={{ 
							width: "100px",
							color: "white",
							marginBottom: "2px",
						}}
						variant="outlined" color="secondary"
						href={ResumePDF}

						download="mikephan-resume.pdf"
					>
						Resume
					</Button>
				</NavItems>
			</Headroom>
		</NavStyle>
	);
}

// STYLESS

const NavSpan = styled.span`
	color: #3f3f3f;
	margin-right: -10px;
`;

const NavItems = styled.a`
	color: #fff;
	cursor: pointer;
	display: flex;
	align-items: center;

	a {
		transition: all 0.5s ease-in-out;
		&:hover {
			color: red;
		}
	}
`;

const NavStyle = styled.nav`
	font: 12px "Montserrat", sans-serif;
	font-weight: bold;
	width: 100%;
	text-transform: uppercase;
	letter-spacing: 2.5px;
	z-index: 100;
	position: fixed;
	height: 55px;
	justify-content: center;

	ul {
		padding: 0px;
	}

	.display {
		color: #fff;
		cursor: pointer;
		width: 100%;

		a {
			padding: 8px 13px;
		}

		.current {
			color: red;
		}

		.active {
			color: red;
		}
	}
`;

import React from "react";

import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-scroll";
import Headroom from "react-headroom";

export default function Navbar() {
	return (
		<NavStyle>
			<Headroom
				className="display"
				style={{
					padding: "25px",
					display: "flex",
					justifyContent: "flex-end",
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
					<NavSpan>1.</NavSpan>
					<Link activeClass="current" to="home" spy={true} smooth={true} offset={0} duration={500}>
						Home
					</Link>
					<NavSpan>2.</NavSpan>
					<Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500}>
						About
					</Link>
					<NavSpan>3.</NavSpan>
					<Link activeClass="active" to="resume" spy={true} smooth={true} offset={0} duration={500}>
						Resume
					</Link>
					<NavSpan>4.</NavSpan>
					<Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
						Portfolio
					</Link>
					{/* GET BUTTON STYLE HERE MATERIAL UI */}
					<Button
						style={{ 
							width: "100px",
							color: "white",
							marginBottom: "2px",
						}}
						variant="outlined" color="secondary"
						onClick={() => { alert('clicked')}}
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
	margin-right: -15px;
`;

const NavItems = styled.a`
	color: #fff;
	cursor: pointer;
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

	ul {
		padding: 0px;
	}

	.display {
		color: #fff;
		cursor: pointer;

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

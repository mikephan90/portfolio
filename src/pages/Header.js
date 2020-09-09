import React, { Fragment } from "react";


import styled from "styled-components";
import { Link } from "react-scroll";

import Navbar from "../components/navbar";

// import img from "../assets/header-background.jpg";

const Header = (props) => {
	let resumeData = props.resumeData;
	return (
		<Fragment>
			<NavBar>
				<Navbar />
			</NavBar>

			<HeaderStyle id="home">
				<div className="banner">
					<div className="banner-text">
						{/* <Hello>Hello World!</Hello> */}
						<DescriptionH3>My name is</DescriptionH3>
						<NameH2>Mike Phan.</NameH2>
						<DescripionH2>I like to build things.</DescripionH2>
						<Bio>
							I'm an aspiring software engineer located in Columbus, OH specializing in building websites
							and applications using the latest technology
						</Bio>
						{/* <hr /> */}
						{/* <ul className="social">
							{resumeData.socialLinks.map((item) => {
								return (
									<li key={item.name}>
										<a href={item.url}>
											{" "}
											<i className={item.className} />
										</a>
									</li>
								);
							})}
						</ul> */}
					</div>
				</div>

				{/* <p className="scrolldown">
					<Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
						<i className="fa fa-chevron-down"></i>
					</Link>
				</p> */}
			</HeaderStyle>
		</Fragment>
	);
};

export default Header;

// STYLING
const Hello = styled.h1`
	color: white;
	font: 72px/1.1em "Montserrat", sans-serif;
	font-weight: bold;
	letter-spacing: -2px;
	text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
	padding-bottom: 50px;
`;

const NameH2 = styled.h2`
	color: white;
	font: 72px/1.9em "Montserrat", serif;
	margin-left: -3px;
	margin-bottom: -30px;
`;

const DescripionH2 = styled.h2`
	color: #3d3d3d;
	font: 42px/1.9em "Montserrat", serif;
	margin-top: -30px;
	margin-left: -3px;
`;

const DescriptionH3 = styled.h3`
	color: red;
	font: 18px/1.9em "Montserrat", serif;
	margin-top: -30px;
	margin-left: -3px;
	margin-bottom: -30px;
`;

const Bio = styled.p`
	width: 450px;
	color: #d3d3d3;
`;

const NavBar = styled.div`
	position: absolute;
	top: 0;
`;

const HeaderStyle = styled.div`
	display: flex;
	vertical-align: center;
	height: 56vh;
	margin-left: 20%;
	margin-top: 15%;

	${'' /* .scrolldown {
		display: flex;
		position: absolute;
		color: #fff;
		font-size: 42px;
		bottom: 0;

		animation-name: ${bounce};
		animation-duration: 2s;
		animation-timing-function: ease-in;
		animation-delay: 0s;
		animation-iteration-count: infinite;
		${"" /* animation-direction: normal;
		animation-fill-mode: forwards;
		animation-play-state: running; */}

		transition: all 0.3s ease-in-out;
		&:hover {
			color: red;
		}
	} */}

`;

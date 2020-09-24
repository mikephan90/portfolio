import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// Material UI
import { Button } from "@material-ui/core";
// Scroll Reveal
import { srConfig } from "../config";
import sr from "../utils/ScrollReveal";
// Components
import SectionHeaderCenter from "../components/SectionHeaderCenter";

const Contact = () => {
	const revealContainer = useRef(null);
	useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

	return (
		<ContactWrapper id="contact">
			<SectionHeaderCenter num="4." title="What's Next?" />
			<div ref={revealContainer}>
				<ContactH1>Get in Touch!</ContactH1>
				<Divider />
				<Description>
					<p className="description">
						I'm open to all opportunities and meeting new people. My inbox is always open for any questions
						or if you just want to contact me. I will try my best to get back to you. Thanks for looking!
					</p>
				</Description>
				<Button
					style={{
						width: "120px",
						color: "white",
						marginTop: "50px",
					}}
					variant="outlined"
					color="secondary"
					href="mailto:khoaphan90@gmail.com"
				>
					Say Hello
				</Button>
			</div>
		</ContactWrapper>
	);
};

export default Contact;

const Divider = styled.div`
	content: "";
	height: 1px;
	background-color: #1f1f1f;
	margin-left: 30%;
	margin-right: 30%;
`;

const Description = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 30px;
`;

const ContactH1 = styled.h1`
	color: white;
	font: 40px/1.9em "Montserrat", serif;
`;

const ContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	text-align: center;
	align-items: center;
	justify-content: center;

	.description {
		position: relative;
		display: flex;
		justify-content: center;
		width: 30%;
		color: #d3d3d3;
		font: 14px/1.9em "Montserrat", serif;
	}
`;

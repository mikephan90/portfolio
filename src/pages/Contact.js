import React from "react";
import styled from "styled-components";

import { Button } from "@material-ui/core";
import SectionHeader from "../components/SectionHeader";

const Contact = () => {
	return (
		<ContactWrapper id="contact">
			<SectionHeader num="4." title="What's Next?" />
			<ContactH1>Get in Touch!</ContactH1>
			<ContactDesc>
				I'm open to all opportunities and meeting new people. My inbox is always open for any questions or if
				you just want to contact me. I will try my best to get back to you. Thanks for looking!
			</ContactDesc>
			<Button
				style={{
					width: "120px",
					color: "white",
					marginTop: "50px",
                    borderColor: "red",
                    
				}}
				variant="outlined"
				color="primary"
				onClick={() => {
					alert("clicked");
				}}
			>
				Say Hello
			</Button>
		</ContactWrapper>
	);
};

export default Contact;

const ContactDesc = styled.p`
	justify-content: center;
	width: 30%;
	color: #d3d3d3;
	font: 14px/1.9em "Montserrat", serif;
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
`;

import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<FooterWrapper>
			<a href="http://github.com/mikephan90">Designed & Built by Mike Phan</a>
		</FooterWrapper>
	);
};

export default Footer;

const FooterWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 40px;
	margin-bottom: 20px;

	a {
		font: 12px/1.9em "Montserrat", serif;
		text-align: center;
		text-decoration: none;
		color: white;

		cursor: pointer;
		transition: all 0.5s ease-in-out;

		&:hover {
			color: red;
			shadow: 2px 2px 2px;
		}
	}
`;

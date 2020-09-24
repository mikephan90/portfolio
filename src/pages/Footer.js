import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<FooterWrapper>
			<a href="https://github.com/mikephan90/portfolio">
				Designed & Built by Mike Phan
			</a>
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
		position: relative;
		font: 12px/1.9em 'Montserrat', serif;
		text-align: center;
		text-decoration: none;
		color: #708090;

		cursor: pointer;
		transition: all 0.5s ease-in-out;

		&:before {
			content: '';
			position: absolute;
			width: 100%;
			height: 0.5px;
			bottom: 0;
			left: 0;
			background-color: #3d3d3d;
			visibility: hidden;
			transform: scaleX(0);
			transition: all 0.3s ease-in-out 0s;
		}

		&:hover {
			&:before {
				visibility: visible;
				transform: scaleX(1);
			}
			color: red;
			shadow: 2px 2px 2px;
		}
	}
`;

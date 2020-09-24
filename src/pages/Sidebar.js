import React from "react";

import styled from "styled-components";

const Sidebar = (props) => {
	return (
		<StyledSidebar>
			<a className="email-link" href="mailto:khoaphan90@gmail.com">
				khoaphan90@gmail.com
			</a>
			<SocialStyle>
				{props.resumeData.socialLinks.map((item) => {
					return (
						<li key={item.name}>
							<a href={item.url} target="_blank" rel="noopener noreferrer">
								<IconStyle className={item.className}></IconStyle>
							</a>
						</li>
					);
				})}
			</SocialStyle>
		</StyledSidebar>
	);
};

export default Sidebar;

const IconStyle = styled.i`
	font-size: 24px;
	color: #fff;
	transition: all 0.2s ease-in-out;
	padding-bottom: 20px;
	&:hover {
		color: red;
		transform: translateY(-5px);
	}
`;

const SocialStyle = styled.ul`
	list-style: none;
	padding: 0;
	justify-content: center;
`;

const StyledSidebar = styled.div`
	display: flex;
	flex-direction: column;
	position: fixed;
	right: 0;
	bottom: 0;
	color: #fff;
	padding: 40px;

	.email-link {
		cursor: pointer;
		font: 14px/1.9em "Montserrat", serif;
		color: #3f3f3f;
		writing-mode: vertical-rl;
		text-orientation: mixed;
		text-decoration: none;
		margin-bottom: 30px;
		transition: all 0.4s ease-in-out;
		text-decoration: none;
		&:hover {
			color: red;
			transform: translateY(10px);
		}
	}
`;

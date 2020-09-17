import React from "react";

import styled from "styled-components";

const Sidebar = (props) => {
	return (
		<StyledSidebar>
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
	color: #fff;
	transition: all 0.2s ease-in-out;
	padding-bottom: 20px;
	&:hover {
		color: red;
		transform: translateY(-5px);
	}
	font-size: 24px;
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
	left: 0;
	bottom: 0;
	color: #fff;
	padding: 40px;
`;

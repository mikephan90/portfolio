import React from 'react';

import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

const FeaturedProject = (props) => {
    return (
        <FeaturedPaper>
            Featured Project display
        </FeaturedPaper>
    )
}

export default FeaturedProject;

const FeaturedPaper = styled(Paper)`
	width: 75%;
	height: 80vh;
	text-align: center;
    vertical-align: center;
	background-color: #0f0f0f;
	color: white;
	border: 1px solid white;
	margin-top: 40px;
	margin-bottom: 40px;
	transition: all 0.2s ease-in;
	&:hover {
		background-color: red;
	}
`;
import React from "react";
import styled from "styled-components";


import Natours1 from "./NatoursPages/Natours1";
import Natours2 from "./NatoursPages/Natours2";
import Natours3 from "./NatoursPages/Natours3";

const Wrapper = styled.div`
	overflow: hidden;
	width: 100%;
	padding: 20px;
	background: rgba(0, 0, 0, 0.8);
`;

const Natours = () => {


	return (
		<Wrapper>

				<Natours1 />
				<Natours2 />
				<Natours3 />

		</Wrapper>
	);
};

export default Natours;

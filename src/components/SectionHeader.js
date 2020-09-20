import React, { useEffect, useRef } from "react";
import styled from "styled-components";

// Scroll Reveal
import sr from "../utils/ScrollReveal";
import { srConfigHeader } from "../config";

const SectionHeader = (props) => {
	const revealTitle = useRef(null);

	useEffect(() => {
		sr.reveal(revealTitle.current, srConfigHeader());
	}, []);

	return (
		<SpanStyle ref={revealTitle}>
			<SpanNumber>
				{props.num}
				<SpanContent>{props.title}</SpanContent>
			</SpanNumber>
		</SpanStyle>
	);
};

export default SectionHeader;

const SpanStyle = styled.div`
	padding-bottom: 80px;
`;

const SpanNumber = styled.span`
	color: #929292;
	font: 20px/1.9em "Montserrat", serif;
`;

const SpanContent = styled.span`
	margin-left: 10px;
	text-transform: uppercase;
	color: white;
	font: 24px/1.9em "Montserrat", serif;
`;

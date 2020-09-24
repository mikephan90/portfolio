import React, { useEffect, useRef } from "react";
import styled from "styled-components";

// Scroll Reveal
import sr from "../utils/ScrollReveal";
import { srConfigHeader } from "../config";

const SectionHeaderCenter = (props) => {
	const revealTitle = useRef(null);

	useEffect(() => {
		sr.reveal(revealTitle.current, srConfigHeader());
	}, []);

	return (
		<SectionHeaderStyle ref={revealTitle}>
			<h2>
				<span>{props.num}</span>
				{props.title}
			</h2>
		</SectionHeaderStyle>
	);
};

export default SectionHeaderCenter;

const SectionHeaderStyle = styled.div`
	display: flex;
    justify-content: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;
	text-transform: uppercase;
	color: white;

	span {
		font-size: 18px;
		margin-right: 20px;
		color: #7f7f7f;
		position: relative;
		bottom: 4px;
	}

	h2 {
		font: 28px/1.9em "Montserrat", serif;

	}

`;

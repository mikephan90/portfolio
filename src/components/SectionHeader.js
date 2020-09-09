import React from 'react';

import styled from "styled-components";

const SectionHeader = (props) => {
    return (
        <div>
            <SpanNumber>
                {props.num}
                <SpanContent>
                    {props.title}
                </SpanContent>
            </SpanNumber>
        </div>
    )

}

export default SectionHeader;

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
import React from 'react'
import styled from "styled-components";

const Image = styled.div`
    opacity: 1;
	width: 150vh;
    height: 80vh;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	.image {
		width: 70vh;
	}
`;

const Natours3 = () => {
    return (
        <Image>
            <img className="image" alt="" src={require("../../../assets/Natours/natours-3.jpg")} />
            <p>akjshdfkjashdfkjashdfk akjsdhf kajsh dfkjahsdf</p>
        </Image>
    )
};

export default Natours3;
import React from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
}));

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

const Natours1 = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			{/* <Image>
				<img className="image" alt="" src={require("../../../assets/Natours/natours-1.jpg")} />
				<Paper elevation={0} variant="outlined" square>
					<p>alkshjdfkj</p>
				</Paper>
			</Image> */}
			<Grid container spacing={3} direction="row" justify="center" alignItems="center">
				<Grid item xs>
					<div>Smethign here</div>
				</Grid>
				<Grid item xs>
					<div>Smethign here</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Natours1;

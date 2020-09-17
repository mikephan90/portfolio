import React from "react";

// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

import SectionHeader from "../components/SectionHeader";
import styled from "styled-components";

const Resume = (props) => {
	return (
		<ResumeWrapper id="resume">
			<div>
				<div>
					<SectionHeader num="2." title="Where I've Worked" />
				</div>
				<WorkInfo>
					<div>
						<h2>This could be you!</h2>
					</div>
					{props.resumeData.work.map((item, index) => {
						return (
							<div key={index}>
								<div>
									<h3>{item.CompanyName}</h3>
									<p className="work-info">
										{item.specialization} {" | "}
										<em>
											{item.MonthOfLeaving} {item.YearOfLeaving}
										</em>
										{/* <p>{item.Achievements}</p> */}
									</p>
								</div>
							</div>
						);
					})}
				</WorkInfo>
			</div>
		</ResumeWrapper>
	);
};

export default Resume;

const WorkInfo = styled.div`
	border: 1px solid red;
`;

const ResumeWrapper = styled.div`
	display: flex;
	justify-content: center;
	vertical-align: center;
	height: 50vh;
	${"" /* background: #fff;
	padding-top: 60px;
	overflow: hidden;
	display: flex;
	flex-direction: column;

	hr {
		width: 50%;

        border: 1px solid rgba(150, 150, 150, 0.1);
	}

	a {
		&:visited {
			color: red;
		}
		&:hover {
			color: #313131;
		}
	}

	.education,
	.work {
		margin-bottom: 48px;
		padding-bottom: 24px;
		display: flex;
	}

	.skills {
		margin-bottom: 48px;
		padding-bottom: 24px;
		display: flex;
	}

	h1 {
		font: 18px/24px "Montserrat", sans-serif;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 1px;
		padding-left: 75%;
		span {
			border-bottom: 3px solid red;
			padding-bottom: 6px;
		}
	}

	h2 {
		font: 18px "Montserrat", sans-serif;
		text-transform: uppercase;
		padding-bottom: 36px;
	}

	h3 {
		font: 25px/30px "Montserrat", sans-serif;
		font-weight: italic;
	}

	h5 {
		color: #d3d3d3;
		font: 14px/20px "Montserrat", sans-serif;
		border-bottom: 1px solid #e8e8e8;
		margin-bottom: 16px;
	}

	h6 {
		font: 18px "Montserrat", sans-serif;
	}

	.header-col {
		width: 33.333%;
		padding-top: 14px;
	}

	.main-col {
		width: 33.333%;
        display: flex;
        flex-direction: column;
        margin-left: 8.5%;

	}

	.work-info {
		font: 16px/24px "librebaskerville-italic", serif;
		margin-top: -24px;
		color: #6e7881;
	}

	.info {
		font: 16px/24px "librebaskerville-italic", serif;
		color: #6e7881;
		margin-bottom: 18px;
		margin-top: -12px;
	}

	.bars {
		margin-top: 14px;
		margin-left: -40px;
		width: 95%;
		float: left;
		padding: 0;
		text-align: left;
		.skill-list {
			margin-top: 36px;
			list-style: none;
		}
		li {
			position: relative;
			margin-bottom: 40px;
			background: #ccc;
			height: 20px;
			border-radius: 3px;
			em {
				font: 15px "Montserrat", sans-serif;
				color: #313131;
				text-transform: uppercase;
				letter-spacing: 2px;
				font-weight: normal;
				position: relative;
				top: -24px;
			}
		}

		.bar-expand {
			position: absolute;
			left: 0;
			top: 0;

			margin: 0;
			padding-right: 24px;
			background: #313131;
			display: inline-block;
			height: 20px;
			line-height: 42px;
			border-radius: 3px 0 0 3px;
		}

		.cplusplus {
			width: 60%;
			-webkit-animation: cplusplus 2.2s ease;
			@keyframes cplusplus {
				0% {
					width: 0px;
				}
				100% {
					width: 60%;
				}
			}
		}

		.java {
			width: 50%;
			-webkit-animation: java 2.4s ease;
			@keyframes java {
				0% {
					width: 0px;
				}
				100% {
					width: 50%;
				}
			}
		}

		.react {
			width: 70%;
			-webkit-animation: react 2.6s ease;
			@keyframes react {
				0% {
					width: 0px;
				}
				100% {
					width: 70%;
				}
			}
		}

		.react-native {
			width: 70%;
			-webkit-animation: react-native 2.8s ease;
			@keyframes react-native {
				0% {
					width: 0px;
				}
				100% {
					width: 70%;
				}
			}
		}

		.javascript {
			width: 80%;
			-webkit-animation: javascript 3s ease;
			@keyframes javascript {
				0% {
					width: 0px;
				}
				100% {
					width: 80%;
				}
			}
		}

		.css {
			width: 70%;
			-webkit-animation: css 3.2s ease;
			@keyframes css {
				0% {
					width: 0px;
				}
				100% {
					width: 70%;
				}
			}
		}

		.node {
			width: 55%;
			-webkit-animation: node 3.4s ease;
			@keyframes node {
				0% {
					width: 0px;
				}
				100% {
					width: 55%;
				}
			}
		}

		.mongoose {
			width: 55%;
			-webkit-animation: mongoose 3.6s ease;
			@keyframes mongoose {
				0% {
					width: 0px;
				}
				100% {
					width: 55%;
				}
			}
		}

		.restfulapis {
			width: 60%;
			-webkit-animation: restfulapis 3.8s ease;
			@keyframes restfulapis {
				0% {
					width: 0px;
				}
				100% {
					width: 60%;
				}
			}
		}

		.mongodb {
			width: 40%;
			-webkit-animation: mongodb 4s ease;
			@keyframes mongodb {
				0% {
					width: 0px;
				}
				100% {
					width: 40%;
				}
			}
		}
	} */}
`;

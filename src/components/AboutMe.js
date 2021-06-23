import React from "react";
import {makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 375,
	},
	link:{
	   color:"white",
	   textDecoration:"none",
  	},
  	linkMobile:{
	   color:"#252a2d",
	   textDecoration:"none",
  	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
		textDecoration: "none",
		color: "inherit",
		fontWeight: "light",
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	heading: {
		padding: "25px",
		color: '#ff524e',
		fontWeight: 400,
	},
	skillText : {
		color: "white",
		width: "85%",
		fontSize: "1.5em",
		lineHeight: "1.5",
		fontWeight: 200,
		marginBottom:'2.5em',
		
	},
}));



export default function AboutMe (){
  const classes = useStyles();

  const skillsSection = {
	backgroundColor: '#585a5c',
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",	
	padding:5,
	paddingBottom:'2em',
};
  
    return (
		<div style={skillsSection} id="aboutme">
			<h1 className={classes.heading}>
				About Me
			</h1>
			<p className={classes.skillText}>
			I'm a web developer currently living in Copenhagen, Denmark. My main focus is becoming the best Full-Stack developer I can become. I'm a fan of woodworking, music and travelling. I've been involved with programming for more than 15 years and when the Covid-19 pandemic hit I decided to start investing all my time and effort into making it my career path. I've worked in different countries and developed different social and technical skills that I can apply daily when designing, organizing the code structure and problem solving.
			</p>
			<p className={classes.skillText}>
				I've focus on this stack so far:
				<div style={{ display:'flex', justifyContent:"space-evenly", textAlign:'start', flexWrap:'wrap'}}>
						<ul>
							<li> <img width='20px' src='./assets/html5.svg' alt=''/> HTML5</li>
							<li> <img width='20px' src='./assets/css3.svg' alt=''/> CSS3</li>
							<li> <img width='20px' src='./assets/reactnative.svg' alt=''/> ReactJS</li>
							<li> <img width='20px' src='./assets/bootstrap.svg' alt=''/> Bootstrap</li>
							<li> <img width='20px' src='./assets/materialui.svg' alt=''/> Material UI</li>
							<li> <img width='20px' src='./assets/javascript.svg' alt=''/> JQuery</li>
						</ul>
						<ul>
							<li> <img width='20px' src='./assets/nodejs.svg' alt=''/> NodeJS</li>
							<li> <img width='20px' src='./assets/expressjs.svg' alt=''/> ExpressJS</li>
							<li> <img width='20px' src='./assets/mongodb.svg' alt=''/> MongoDB</li>
							<li> <img width='20px' src='./assets/sass.svg' alt=''/> SASS</li>
							<li> <img width='20px' src='./assets/mongoose.png' alt=''/> Mongoose</li>
							<li> <img width='20px' src='./assets/git.svg' alt=''/> Git</li>
						</ul>
				</div>
				</p>
				<p className={classes.skillText}>
					I am a fast learner, team-oriented and quickly adaptable to fast-paced working environments. I have dedicated all my time in becoming a better programmer and learning alone and in a bootcamp. I have gathered much experience in pair and swarm programming and have done many projects. I have continued learning since the bootcamp and have started working as a freelancer until I find the right company to work and grow inside a team.
				</p>
		</div>
    );
  }

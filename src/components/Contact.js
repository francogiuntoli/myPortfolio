import React from "react";
import { Link, Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
	heading: {
		paddingTop: "50px",
		color: '#ff524e',
		fontWeight: 400,
	},
	highlight: {
		color: "#ff524e",
	},
	contactIcons: {
		width: "2.6em",
		margin: "20px",
	},
}));



export default function AboutMe (){
	const classes = useStyles();
  
	const contactSection = {
		backgroundColor: '#585a5c',
		minHeight: "30vh",
	};

    return (
		<Grid style={contactSection} id="contact">
				<h1 className={classes.heading}> Get in touch! </h1>
				<Grid>
					<Link href="https://www.linkedin.com/in/francogiuntoli" target="_blank" rel="noreferrer">
						<img className={classes.contactIcons} src="../assets/linkedin.png" alt="linkedin" loading="lazy"></img>
					</Link>
					<Link href="mailto:franco.giuntoli@gmail.com" target="_blank" rel="noreferrer">
						<img className={classes.contactIcons} src="../assets/gmail.png" alt="gmail" loading="lazy"></img>
					</Link>
					<Link href="https://github.com/francogiuntoli" target="_blank" rel="noreferrer">
						<img className={classes.contactIcons} src="../assets/github.png" alt="github" loading="lazy"></img>
					</Link>
					<Link href="https://www.instagram.com/frangiuntoli/ " target="_blank" rel="noreferrer">
						<img className={classes.contactIcons} src="../assets/instagram.png" alt="instagram" loading="lazy"></img>
					</Link>
				</Grid>
				<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

				
				<img width='30px' height='30px' src='./assets/logo.png'/>
				<p style={{ color: "#ff524e", fontSize:'0.8em' }}>
					made by Franco Giuntoli 
				</p>
				</div>
				
			</Grid>
			
    );
  }

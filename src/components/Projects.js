import React from "react";
import { Typography, Grid, Paper, Card, CardHeader, CardContent, CardMedia, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../index.css";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
 	link:{
	   color:"white",
	   fontSize:18,
	   textDecoration:"none !important",
	},
    linkMobile:{
	   color:"#252a2d",
	   fontSize: 18,
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
		paddingLeft: '2%',
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
		paddingTop: 20,
		color: theme.palette.primary.main,
		fontWeight: 400,
	},
	media: {
		borderRadius:15,
		height: 0,
		margin: "0px 30px",
		paddingTop: "67.25%", // 16:9
	},
	avatar: {
		backgroundColor: "white",
	},
	large: {
		width: "70%",
		height: "auto",
		margin: "auto",
	},

	projectCards: {
		display: "flex",
		justifyContent: "center",
		margin: "40px auto",
		height: "auto",
	},
	cardTitle:{
		color: theme.palette.primary.main
	},
	
	seeMore: {
		color: theme.palette.primary.main,
		fontWeight: 600,
		margin: "auto",
		marginTop: "10px",
	},
	highlight: {
		color: "#ff524e",
	},
	top:{
		position:'fixed',
		bottom: 10,
		right: 10,
	},
	extendedIcon: {
		color: 'white',
		width:'1rem'
	},
}));



export default function AboutMe (){
	const classes = useStyles();
  
	const projectsSection = {
		backgroundColor: "white",
		minHeight: "100vh",
		width: "100%",
		margin: "auto",
		paddingBottom:"70px",

	};
	const projectStyles = {

		display: "flex",
		flexWrap: 'wrap',
		flexDirection: "row",
	};

    return (
		<Grid style={projectsSection} id="projects">
				<h1 className={classes.heading}>
					Projects
				</h1>
				<div style={projectStyles}>
					<Grid className={classes.projectCards}>
						<Paper elevation={20}>
							<Card className={classes.root}>
								<CardHeader className={classes.cardTitle} title="Topoli Arts" subheader="Delivered on: May 21, 2021" />
								<CardMedia className={classes.media} image="../assets/topoliarts.png" title="topoli arts" />
								<CardContent>
									<Typography variant="body2" color="textSecondary" component="p">
										This is a web application with content management features where professional artists as mentors get to offer courses,
										interact with students and also where students get to interact with each other.{" "}
									</Typography>
								</CardContent>

								<Typography variant="body2" color="secondary" component="p" className={classes.seeMore}>
									Technologies used:
								</Typography>

								<CardContent>
									<Typography variant="body2" color="textSecondary" paragraph>
										ReactJS - Google Material UI - NodeJS - ExpressJS - Socket.io - CSS3 - HTML5
									</Typography>
										<Button href="https://topoli-arts.herokuapp.com/" target="_blank" variant="contained" color="primary">
											Visit Topoli Arts										
										</Button>
								</CardContent>
							</Card>
						</Paper>
					</Grid>
					<Grid className={classes.projectCards}>
						<Paper elevation={20}>
							<Card className={classes.root}>
							<CardHeader className={classes.cardTitle} title="Freebay" subheader="Delivered on: April 30, 2021"/>
								<CardMedia className={classes.media} image="../assets/freebay.png" title="Freebay" />
								<CardContent>
									<Typography variant="body2" color="textSecondary" component="p">
									A peer-2-peer Full stack fully responsive platform for buying and selling items. For people to give a second life to their belonging without comissions and people looking for items at a reasonable price. 
									</Typography>
								</CardContent>

								<Typography variant="body2" color="secondary" component="p" className={classes.seeMore}>
									Technologies used:
								</Typography>

								<CardContent>
									<Typography variant="body2" color="textSecondary" paragraph>
									Handlebars - Javascript - HTML5 - CSS3 - NodeJs - MongoDB - Bootstrap
									</Typography>
										<Button href="https://thefreebay.herokuapp.com/" target='_blank' variant="contained" color="primary">
											Visit Freebay										
										</Button>
								</CardContent>
							</Card>
						</Paper>
					</Grid>
					<Grid className={classes.projectCards}>
						<Paper elevation={20}>
							<Card className={classes.root}>
								<CardHeader className={classes.cardTitle} title="Thor's Conquest" subheader="Delivered on: April 9, 2021"/>
								<CardMedia className={classes.media} image="../assets/thors.png" title="Thor's Conquest" />
								<CardContent>
									<Typography variant="body2" color="textSecondary" component="p">
									Using left and right arrows move up to retrieve Thor's hammer without getting hit by random falling daggers. Every time you catch Mjolnir, level resets and dagger speed increases or thor becomes slower.
									</Typography>
								</CardContent>

								<Typography variant="body2" component="p" className={classes.seeMore}>
									Technologies used:
								</Typography>

								<CardContent>
									<Typography variant="body2" color='textSecondary' paragraph>
										JavaScript - CSS3 - HTML5 - Canvas - DOM Manipulation
									</Typography>
										<Button href="https://francogiuntoli.github.io/thors_conquest/" target="_blank" variant="contained" color="primary">
											Visit Thor's Conquest
										</Button>
								</CardContent>
							</Card>
						</Paper>
					</Grid>
				</div>
			</Grid>
    );
  }

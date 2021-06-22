import "./App.css";
import { Link} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Fab } from "@material-ui/core";
import NavigationIcon from '@material-ui/icons/Navigation';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";


const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
 	link:{
	   color:"white",
	   fontSize:'18px',
	   textDecoration:"none !important",
	},
    linkMobile:{
	   color:"#252a2d",
	   fontSize: '18px',
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
		paddingTop: "50px",
		color: theme.palette.secondary.main,
		fontWeight: 400,
	},
	media: {
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
	avatarImg: {
		width: "100%",
	},
	projectCards: {
		display: "flex",
		justifyContent: "center",
		margin: "40px auto",

		height: "auto",
	},
	contactIcons: {
		width: "2.6em",
		margin: "20px",
	},
	seeMore: {
		margin: "auto",
		marginTop: "20px",
	},
	highlight: {
		color: "#009dff",
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

function App() {
	const classes = useStyles();

	return (
		<div className="App">
			<NavBar/>
			<Fab size='medium' className={classes.top} color='secondary' href='#'>
  				<NavigationIcon className={classes.extendedIcon}/>
			</Fab>
			<Link href="#"/>
			<Home />
			<AboutMe/>
			<Projects/>
			<Contact />
			
			
		</div>
	 )
}


export default App;
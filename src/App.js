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
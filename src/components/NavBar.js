import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, AppBar, Toolbar, IconButton, Typography, MenuItem, Menu, Grid} from "@material-ui/core";
import {makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
	},
 	link:{
	   color:"white",
	   
	   textDecoration:"none !important",
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
	
}));



export default function Navbar (){

		const classes = useStyles();
	
		const [mobileMoreClick, setMobileMoreClick] = useState(null);
	
		const isMobileMenuOpen = Boolean(mobileMoreClick);
	
		const handleMobileMenuClose = () => {
			setMobileMoreClick(null);
		};
	
		const handleMobileMenuOpen = (event) => {
			setMobileMoreClick(event.currentTarget);
		};
	
		const mobileMenuId = "primary-search-account-menu-mobile";
		const renderMobileMenu = (
			<Menu
				anchorEl={mobileMoreClick}
				anchorOrigin={{ horizontal: "right", vertical: "top" }}
				id={mobileMenuId}
				keepMounted
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				open={isMobileMenuOpen}
				onClose={handleMobileMenuClose}
			>
				<MenuItem onClick={handleMobileMenuClose} className={classes.linkMobile} component={Link} href='#aboutme'>
					About Me
				</MenuItem>
				<MenuItem onClick={handleMobileMenuClose} className={classes.linkMobile} component={Link} href='#projects'>
						Projects
				</MenuItem>
				<MenuItem onClick={handleMobileMenuClose} className={classes.linkMobile} component={Link} href='#contact'>
					Contact
				</MenuItem>
			</Menu>
		);
		
	
		
		return (
			<div className="App">
				<Grid>
					<div className={classes.grow}>
						<AppBar position="static">
							<Toolbar >
								<img width='50px'src='./assets/logo.png' alt='logo'/>
								<div className={classes.grow} />
								<div className={classes.sectionDesktop}>
									<MenuItem className={ classes.link} component={Link} href="#aboutme">
											About Me
									</MenuItem>
									<MenuItem className={ classes.link} component={Link} href="#projects">
											Projects
									</MenuItem>
									<MenuItem className={ classes.link} component={Link} href="#contact">
											Contact
									</MenuItem>
								</div>
									<div className={classes.sectionMobile}>
									<IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
										<MenuIcon />
									</IconButton>
								</div>
							</Toolbar>
						</AppBar>
						{renderMobileMenu}
					</div>
				</Grid>
				</div>
		)
  }

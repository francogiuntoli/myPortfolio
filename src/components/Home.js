import React from "react";
import { IconButton, Typography, Avatar, Grid} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Typist from 'react-typist';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';






const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
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
	
}));


export default function Home (){
  const theme = useTheme();
  const classes = useStyles();

  const homeSection = {
		backgroundColor: "white",
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
    position:'relative'
	};

    return (
      <div>

        <Grid style={homeSection} id="home">
          <Grid style={{position:'absolute', zIndex:'1'}}>
            <div className={classes.root}>
              <Avatar alt="FG Img" src="../assets/FGiuntoli.jpg" className={classes.large} />
            </div>
            <br></br>
            <Typist avgTypingDelay={55} cursor={{show : true, hideWhenDone:true, hideWhenDoneDelay:0}}>
              <Typography variant="h5" style={{display: 'inline', color:'#2a520e'}}>
                My name is Franco Giuntoli
              </Typography>
                <br></br>
              <Typography variant="h6" style={{display: 'inline'}} color={theme.palette.secondary.main} >
                Fullstack JavaScript Developer
              </Typography>
            </Typist>
		  	<IconButton size='medium' href='#aboutme' color='primary'>
				  <ExpandMoreIcon fontSize='large' />
	        </IconButton>
          </Grid>
      </Grid>
    </div>
    );
  }

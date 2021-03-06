// Base
import React from 'react';

// Font CSS
import '../../Fonts.css';

// Pictures
import SolTown from '../../Pictures/SolTown.png';
import SolGame from '../../Pictures/SolGame.png';
import SolHouse from '../../Pictures/SolHouse.png';

// CSS & Material UI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			margin: 'auto',
			height: '100%',
			width: '100%',
			backgroundColor: '#E4E6E5',
		},
		image: {
			width: '100%',
			height: '100%',
		},
		img: {
			margin: 'auto',
			display: 'block',
			maxWidth: '100%',
			maxHeight: '100%',
		},
		title: {
			margin: 'auto',
			marginTop: '10px',
			display: 'block',
			maxWidth: '100%',
			maxHeight: '100%',
			textAlign: 'center',
		},
		description: {
			textAlign: 'center',
			paddingRight: '0px',
		},
		link: {
			textAlign: 'center',
			textDecoration: 'none',
		},
		page: {
			width: '98%',
			margin: 'auto',
		}
	}),
);

////////////////////////////////////////////
// App
function SolInfo() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper className={classes.paper} square>
				<div className={classes.page}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="Sol Buildings" src={SolTown} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm={6} container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Typography variant="h3" className={classes.title} style={{ fontFamily: "Neuton" }}>
										Sol
									</Typography>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										Developer
									</Typography>
									<p> </p>
									<Typography variant="body2" gutterBottom className={classes.description}>
										The Sol project was an attempt to design an emergant open world sandbox.
										The game had an array of features: town rebuilding, farming, crafting, harvesting,
										exploration, and combat. I worked as the primary developer for the inventory system
										and all interactions involving an item. This included: UI design, harvesting, farming,
										looting, crafting, equipment, resources, and town rebuilding.
										This project gave me experience working in a medium sized team and using the Agile
										software development process. Programmed within the Unity Engine using C# and was
										builted within a 10 person team.
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="body2" color="textSecondary" className={classes.description}>
										No github available :(
									</Typography>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={6}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="Sol Game" src={SolGame} />
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm={6}>
							<ButtonBase className={classes.image}>
								<img className={classes.img} alt="Sol 3D House" src={SolHouse} />
							</ButtonBase>
						</Grid>
					</Grid>
				</div>
			</Paper>
		</div>
	);
}

export default SolInfo;
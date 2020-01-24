import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import './TourListItem.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';





function TourListItem({tour, history, stateId, userId, handleDeleteTour}) { 
    
    const useStyles = makeStyles(theme => ({
        icon: {
          marginRight: theme.spacing(2),
        },
        heroContent: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(8, 0, 6),
        },
        heroButtons: {
          marginTop: theme.spacing(4),
        },
        cardGrid: {
          paddingTop: theme.spacing(8),
          paddingBottom: theme.spacing(8),
        },
        card: {
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        },
        cardMedia: {
          paddingTop: '56.25%', // 16:9
        },
        cardContent: {
          flexGrow: 1,
        },
        footer: {
          backgroundColor: theme.palette.background.paper,
          padding: theme.spacing(6),
        },
      }));
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const classes = useStyles();


return (
<div>
<Container className={classes.cardGrid} maxWidth="md">
    <Grid container spacing={4}>
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
             <Typography 
                gutterBottom variant="h5" 
                component="h2">
                {tour.name}
            </Typography>
                 <NavLink exact to='/addShow' className='NavBar-link'>Add Show</NavLink>  
                <Button variant="contained" color="primary" onClick={() => handleDeleteTour(tour._id, userId)}>
                                     DELETE
                    </Button>
            </CardContent>
        </Card>
    </Grid>
</Container>
</div>
);
}

export default TourListItem;
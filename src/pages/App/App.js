import React, {Component} from 'react';
import './App.css';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import * as tourAPI from '../../services/tours-api';
import * as showAPI from '../../services/shows-api';
import TourListPage from '../TourListPage/TourListPage';
import AddTourPage from '../AddTourPage/AddTourPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/NavBar/NavBar';
import { makeStyles } from '@material-ui/core/styles';
import AddShowPage from '../AddShowPage/AddShowPage';





// let nav = props.user ? something should tell the browser if there is a user or not then route to the signup or login 


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

class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null 
      user: userService.getUser(),
      tours: [],
      shows: []
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddTour = (name) => {
    //fetch request to controller responsible for Creating a tour
    //fetch is only making an api request, its the bellboy going to the kitchen for the user
    fetch('/api/tours', { //asks server (containing the routes) for this matching route to the controller,{} holds our sending payload
      method: 'POST',  
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(name)  //this is req.body.name
    }) 
    .then(jsonData => {
      this.setState(prevState => ({
      }))
    })
  }

  handleDeleteTour = async (id, userId) => {
    await tourAPI.deleteOne(id, userId);
    this.setState(state => ({
      tours: state.tours.filter(t => t._id !== id)
    }), () => this.props.history.push('/'));
  }

  handleAddShow = async (id, userId) => {
    await showAPI.addShow(id, userId);
    this.setState(state => ({
      shows: state.shows.filter(s => s._id !== id)
    }), () => this.props.history.push('/'));
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <Navbar handleLogout={this.handleLogout}   
                  user={this.state.user}    
                  handleSignupOrLogin={this.handleSignupOrLogin}
                  />
          <Route exact path='/tours' render={() => 
           <TourListPage
              handleLogout={this.handleLogout}
              tours={this.state.tours}
              handleDeleteTour={this.handleDeleteTour}
              user={this.state.user}
            />
          }/>
            <Route exact path='/add' render={() => 
                <AddTourPage 
                  tours={this.state.tours} 
                  user={this.state.user} 
                  handleAddTour={this.handleAddTour}
                  />
              } />
            <Route exact path='/addShow' render={() => 
                <AddShowPage 
                  tours={this.state.tours} 
                  user={this.state.user} 
                  handleAddShow={this.handleAddShow}
                  />
              } />
                
        </header>
        <Footer user={this.state.user}/>
      </div>
    );
  }
}



export default App;

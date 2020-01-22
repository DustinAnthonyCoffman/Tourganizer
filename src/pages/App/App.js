import React, {Component} from 'react';
import './App.css';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import * as tourAPI from '../../services/tours-api';

import TourListPage from '../TourListPage/TourListPage';
import AddTourPage from '../AddTourPage/AddTourPage';
// import TourDetailPage from '../TourDetailPage/TourDetailPage';
// import EditTourPage from '../EditTourPage/EditTourPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import Footer from '../Footer/Footer';
import Navbar from '../../components/NavBar/NavBar'







class App extends Component {
  constructor() {
    super();
    this.state = {
      // Initialize user if there's a token, otherwise null 
      user: userService.getUser(),
      tours: []
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleAddTour = ({name}) => {
    //fetch request to controller responsible for Creating a tour
    //fetch is only making an api request, its the bellboy going to the kitchen for the user
    fetch('/api/tours', { //asks server (containing the routes) for this matching route to the controller,{} holds our sending payload
      method: 'POST',  
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({name})  //this is req.body.name
    }) 
    .then(response => { //once you get the api response, convert it
      return response.json() //convert the api request to a json object so react can use it, if you dont convert you just get a readable stream
    }) 
    
    .then(jsonData => {
      this.setState(prevState => ({
      }))
    })
  }


  async componentDidMount() {
    const tours = await tourAPI.getAll();
    this.setState({tours});
  }


  render() {
    return (
      <div>
        <header className="App-header">
          Tourganizer
          <Navbar handleLogout={this.handleLogout}   
                  user={this.state.user}    
                  handleSignupOrLogin={this.handleSignupOrLogin}
                  />
          <Route exact path='/' render={() => 
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
        </header>
        <Footer user={this.state.user}/>
      </div>
    );
  }
}

export default App;

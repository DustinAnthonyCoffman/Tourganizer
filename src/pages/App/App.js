import React, {Component} from 'react';
import './App.css';
import { Route, Switch, Redirect, NavLink } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import TourListPage from '../TourListPage/TourListPage';
import AddTourPage from '../AddTourPage/AddTourPage';
import TourDetailPage from '../TourDetailPage/TourDetailPage';
import EditTourPage from '../EditTourPage/EditTourPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';














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
  
  render() {
    return (
      <div>
        <header className="App-header">
          Tourganizer
          <nav>
            <NavLink exact to='/'>Tour List</NavLink>
            <NavLink exact to='/add'>Add Tour</NavLink>
          </nav>
        </header>
            <TourListPage
              handleLogout={this.handleLogout}
              tours={this.state.tours}
              handleDeleteTour={this.handleDeleteTour}
              user={this.state.user}
            />
          <Route exact path='/add' render={() => 
            <AddTourPage />
          } />
        <Switch>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { Route, NavLink, Link, Switch } from 'react-router-dom';
import './NavBar.css';
import SignupPage from '../../pages/SignupPage/SignupPage';
import LoginPage from '../../pages/LoginPage/LoginPage';





const NavBar = (props) => {
  let nav = props.user ?
    <div className="NavBar">       
        <NavLink exact to='/tours' className='NavBar-link'>Tour List</NavLink>
        <NavLink exact to='/add' className='NavBar-link'>Add Tour</NavLink>  
        <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div className="NavBar">
       <NavLink exact to='/login' className='NavBar-link'>Login</NavLink>  
       <NavLink exact to='/signup' className='NavBar-link'>Signup</NavLink>  
        <br></br>
        <br></br>
        <Route 
        path='/signup' 
        className="NavBar-Link" 
        render={() => <SignupPage handleSignupOrLogin={props.handleSignupOrLogin} />} 
        /> 
        <br></br>
        <br></br>
        <Route 
        path='/login'
        className="NavBar-Link" 
        render={({history}) => <LoginPage history={history} handleSignupOrLogin={props.handleSignupOrLogin} />} 
        />

        
      
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;



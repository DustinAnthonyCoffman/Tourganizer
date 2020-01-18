import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Tour from '../../components/Tour/Tour'


const ToursPage = (props) => {
  return (
    <div>
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <div>
        <Tour />
        </div>
      </div>


);
};

export default ToursPage;
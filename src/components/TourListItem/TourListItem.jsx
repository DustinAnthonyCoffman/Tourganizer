import React from 'react';
import {Link} from 'react-router-dom';


function TourListItem({tour, handleDeleteTour}) { 
  return (
    <div>
      <div>
        <h3>{tour.name}</h3>
      </div>
      <div>
        <Link to={{
            pathname: '/details',
            state: {tour}
          }}
        >
          DETAILS
        </Link>
        <Link to={{
            pathname: '/edit',
            state: {tour}
          }}
        >
          EDIT
        </Link>
        <button onClick={() => handleDeleteTour(tour._id)}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default TourListItem;
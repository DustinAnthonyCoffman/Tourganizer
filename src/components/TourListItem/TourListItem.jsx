import React from 'react';
import {Link} from 'react-router-dom';
import './TourListItem.css';


function TourListItem({tour, userId, handleDeleteTour}) { 
return (
<div className="tour">
<h2 className="tourName">{tour.name}</h2>
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
    <button onClick={() => handleDeleteTour(tour._id, userId)}>
        DELETE
    </button>

</div>
);
}

export default TourListItem;
import React from 'react';
import {Link} from 'react-router-dom';


function TourListItem({tour, handleDeleteTour}) { 

return (
<div>
<h2>{tour.name}</h2>
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
);
}

export default TourListItem;
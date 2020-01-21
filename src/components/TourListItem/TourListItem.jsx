import React from 'react';
import {Link} from 'react-router-dom';


function TourListItem({tour, handleDeleteTour}) { 

return (
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
);
}

export default TourListItem;
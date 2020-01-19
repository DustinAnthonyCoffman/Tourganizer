import React from 'react';
import TourListItem from '../../components/TourListItem/TourListItem';

function TourListPage(props) {
  return (
    <>
      <h1>Tour List</h1>
      <div>
        {props.tours.map(tour => 
          <TourListItem
            tour={tour}
            handleDeleteTour={props.handleDeleteTour}
            key={tour._id}
          />
        )}
      </div>
    </>
  );
}
export default TourListPage;
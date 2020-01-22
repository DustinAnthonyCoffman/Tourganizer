import React, {Component} from 'react';
import TourListItem from '../../components/TourListItem/TourListItem';
import TourDetailPage from '../TourDetailPage/TourDetailPage';





function TourListPage (props) {

  return (
      <div>
      <h1>Tour List</h1>
        {props.tours.map(tour => 
          <TourListItem
            name={tour.name}
            tour={tour}
            handleDeleteTour={props.handleDeleteTour}
            key={tour._id}
          />
        )}
      </div>
  );
}

export default TourListPage;
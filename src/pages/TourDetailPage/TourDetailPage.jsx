import React from 'react';
import TourCard from '../../components/TourCard/TourCard';

function TourDetailPage(props) {
  const tour = props.location.state.tour;
  return (
    <>
      <h1>Tour Details</h1>
      <TourCard
        key={tour._id}
        tour={tour}
      />
    </>
  );
}
export default TourDetailPage;
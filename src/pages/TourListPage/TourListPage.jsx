import React from 'react';
import TourListItem from '../../components/TourListItem/TourListItem';
import { useState } from 'react';
import { useEffect } from 'react';



function TourListPage(props) {

  const [toursState, setTours] = useState([]) //hook arg 1 is state, arg2 is setstate function thats only linked to that state

  useEffect(() => {    //this is componentDidmount for function components, runs on a button click
    console.log('i am running')

      fetch('/').then(response => {
      return response.json()
    }).then(data => {
      console.log(data)
    }).catch(err => console.log(err))

  }, [])  //changes in items inside the array will trigger useEffect which causes a rerender, if nothing in array. works like componentDidmount


  return (
      <div>
      <h1>Tour List</h1>
        {props.tours.map(tour => 
          <TourListItem
            name={props.name}
            tour={tour}
            handleDeleteTour={props.handleDeleteTour}
            key={tour._id}
          />
        )}
      </div>
  );
}
export default TourListPage;
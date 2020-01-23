import React, {Component} from 'react';
import TourListItem from '../../components/TourListItem/TourListItem';
import * as tourAPI from '../../services/tours-api';




class TourListPage extends Component {

    state = {
      tours: this.props.tours
    }

// let getTours = props.user ? {} if there is no user dont run async

async componentDidMount() {
  try {
  const user = await tourAPI.getAll(this.props.user._id);
  const tours = user.tours
  this.setState({tours});
  } catch(error) {
    throw new Error(error)
  }
}

render() {
  return (
      <div>
        {this.state.tours.map(tour => 
          <TourListItem
            userId={this.props.user._id}
            name={tour.name}
            tour={tour}
            handleDeleteTour={this.props.handleDeleteTour}
            key={tour._id}
          />
        )}
      </div>
  );
}
}

export default TourListPage;
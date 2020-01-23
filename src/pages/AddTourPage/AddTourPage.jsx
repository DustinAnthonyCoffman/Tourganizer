import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';







class AddTourPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      user: this.props.user
    }
  };

  formRef = React.createRef();

  //e is the event object that is passed into any function that fires an event
  handleSubmit = e => {
    e.preventDefault(); //stops the page from refreshing, which is htmls default because of our shitty past
    this.props.handleAddTour(this.state.formData);  //updates the form as we type to overwrite formData declared in state
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };


render() {
  
return (
    <>
    <h1>Add Tour</h1>
    <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label>Tour Name</label>
        <input
            className="form-control"
            name="name"
            value={this.state.formData.name}
            onChange={this.handleChange}
        />
        <input type="hidden"
            name="user"
            value={this.props.user._id}
            onChange={this.handleChange}
        />
        </div>


        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="btn"
          disabled={this.state.invalidForm}
          >
          Add Tour
        </Button>
    </form>
    </>
);
}
}
export default AddTourPage;
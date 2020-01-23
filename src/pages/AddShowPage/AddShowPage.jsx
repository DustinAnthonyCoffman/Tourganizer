import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';



class AddShowPage extends Component {
    state = {
      invalidForm: true,
      formData: {
        lineup: '',
        address: '',
        city: '',
        state: '',
        pay: '',
        confirmed: '',
        user: this.props.user
      }
    };
  
    formRef = React.createRef();
  
    //e is the event object that is passed into any function that fires an event
    handleSubmit = e => {
      e.preventDefault(); //stops the page from refreshing, which is htmls default because of our shitty past
      this.props.handleAddShow(this.state.formData);  //updates the form as we type to overwrite formData declared in state
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
      <h1>Add Show</h1>


      <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
          <label>Lineup</label>
          <input
              className="form-control"
              name="lineup"
              value={this.state.formData.name}
              onChange={this.handleChange}
          />
            <br></br>
           <label>Address</label>
          <input
              className="form-control"
              name="address"
              value={this.state.formData.name}
              onChange={this.handleChange}
          />
            <br></br>
           <label>City</label>
          <input
              className="form-control"
              name="city"
              value={this.state.formData.name}
              onChange={this.handleChange}
          />
            <br></br>
           <label>State</label>
          <input
              className="form-control"
              name="state"
              value={this.state.formData.name}
              onChange={this.handleChange}
          />
            <br></br>
           <label>Pay</label>
          <input
              className="form-control"
              name="pay"
              value={this.state.formData.name}
              onChange={this.handleChange}
          />
            <br></br>
           <label>Confirmed</label>
          <input
              className="form-control"
              name="confirmed"
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
            Add Show
          </Button>
      </form>
      </>
  );
  }
  }
  export default AddShowPage;
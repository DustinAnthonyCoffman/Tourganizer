import React, {Component} from 'react';

class AddTourPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: ''
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
        </div>


        <button
        type="submit"
        className="btn"
        disabled={this.state.invalidForm}
        >
        ADD Tour
        </button>
    </form>
    </>
);
}
}
export default AddTourPage;
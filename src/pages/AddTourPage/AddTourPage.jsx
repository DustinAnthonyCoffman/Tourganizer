import React, {Component} from 'react';

class AddTourPage extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: ''
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAddTour(this.state.formData);
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
        <label>Tour Name (required)</label>
        <input
            className="form-control"
            name="name"
            value={this.state.formData.name}
            onChange={this.handleChange}
            required
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
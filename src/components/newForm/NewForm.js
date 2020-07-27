// import 'date-fns';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import  './NewForm.css';

class NewForm extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleDiscard: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      selectedDate: new Date(),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      description: nextProps.description,
    });
  }

  render() {
    return (
      <div className="formContainer2">
        <div className="heading"> {this.props.heading}</div>
        <Calendar
          className="react-calendar"
          value={this.state.selectedDate}
          onChange={value => this.setState({ selectedDate: value })}
        />
        <form>
          <div className="label">Title</div>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.props.handleChange}
            placeholder="Title"
          />
        <div className="label">Desciption</div>
          <textarea
            rows="5"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.props.handleChange}
            placeholder="Description"
          />
        <div className="buttonContainer">
            <button
              className="action"
              type="button"
              onClick={() => this.props.handleSave(this.state)}
              style={
                this.state.title === ''
                  ? { cursor: 'not-allowed' }
                  : { cursor: 'pointer' }
              }
              disabled={this.state.title === ''}
            >
              Save
            </button>
            <button
              className="action"
              type="button"
              onClick={this.props.handleDiscard}
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewForm;

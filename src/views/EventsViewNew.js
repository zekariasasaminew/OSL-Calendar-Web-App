import React, { Component } from "react";
import firebase from "../config";

class EventsViewNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventDate: "",
      eventCapacity: "", // New state for event capacity
    };
  }

  // Handle input change
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Handle form submit
  handleSubmit = (e) => {
    e.preventDefault();

    // Firebase database reference
    const eventsRef = firebase.database().ref(this.props.eventType);

    // Create event object
    const newEvent = {
      name: this.state.eventName,
      date: this.state.eventDate,
      capacity: this.state.eventCapacity, // Include capacity in the event object
    };

    // Push event object to Firebase
    eventsRef.push(newEvent);

    // Reset form fields
    this.setState({
      eventName: "",
      eventDate: "",
      eventCapacity: "",
    });
  };

  render() {
    return (
      <div>
        <h2>Add New Event</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={this.state.eventName}
            onChange={this.handleChange}
          /><br />

          <label htmlFor="eventDate">Event Date:</label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={this.state.eventDate}
            onChange={this.handleChange}
          /><br />

          {/* New input field for event capacity */}
          {this.props.showCapacityInput && (
            <div>
              <label htmlFor="eventCapacity">Event Capacity:</label>
              <input
                type="number"
                id="eventCapacity"
                name="eventCapacity"
                value={this.state.eventCapacity}
                onChange={this.handleChange}
              /><br />
            </div>
          )}

          <button type="submit">Add Event</button>
        </form>
      </div>
    );
  }
}

export default EventsViewNew;

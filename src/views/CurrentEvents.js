import React, { Component } from "react";

import EventsViewNew from "../components/events/EventsViewNew";

// File for managing the Current Events page

class CurrentEvents extends Component {
  // Render the Current Events page
  render() {
    return <EventsViewNew eventType={"/current-events"} showCapacityInput={true} />;
  }
}

export default CurrentEvents;

import React, { Component } from "react";
import classnames from "classnames";
import snakeCase from "lodash/snakeCase";

import Switch from "./components/ToggleSwitch";
import "./App.css";

const ACTIVITIES = [
  "News Feeds",
  "Likes and Comments",
  "Live Stream",
  "Upcoming Events",
  "Friend Requests",
  "Nearby Friends",
  "Birthdays",
  "Account Sign-In"
];

class App extends Component {
  state = {
    enabled: false,
    only: ACTIVITIES.map(snakeCase)
  };

  toggleNotifications = ({ enabled }) => {
    const { only } = this.state;
    this.setState({
      enabled,
      only: enabled ? only : ACTIVITIES.map(snakeCase)
    });
  };

  render() {
    const { enabled } = this.state;

    const headingClasses = classnames(
      "font-weight-light h2 mb-0 pl-4",
      enabled ? "text-dark" : "text-secondary"
    );

    return (
      <div className="App position-absolute text-left d-flex justify-content-center align-items-start pt-5 h-100 w-100">
        <div className="d-flex flex-wrap mt-5" style={{ width: 600 }}>
          <div className="d-flex p-4 border rounded align-items-center w-100">
            <Switch
              theme="default"
              className="d-flex"
              enabled={enabled}
              onStateChanged={this.toggleNotifications}
            />

            <span className={headingClasses}>Notifications</span>
          </div>

          {/_ ...Notification options here... _/}
        </div>
      </div>
    );
  }
}

export default App;

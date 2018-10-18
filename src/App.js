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

          {enabled && (
            <div className="w-100 mt-5">
              <div className="container-fluid px-0">
                <div className="pt-5">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="d-block font-weight-bold text-secondary small">
                      Email Address
                    </span>
                    <span className="text-secondary small mb-1 d-block">
                      <small>
                        Provide a valid email address with which to receive
                        notifications.
                      </small>
                    </span>
                  </div>

                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="mail@domain.com"
                      className="form-control"
                      style={{ fontSize: 14 }}
                    />
                  </div>
                </div>

                <div className="pt-5 mt-4">
                  <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                    <span className="d-block font-weight-bold text-secondary small">
                      Filter Notifications
                    </span>
                    <span className="text-secondary small mb-1 d-block">
                      <small>
                        Select the account activities for which to receive
                        notifications.
                      </small>
                    </span>
                  </div>

                  <div className="mt-5">
                    <div
                      className="row flex-column align-content-start"
                      style={{ maxHeight: 180 }}
                    >
                      {this.renderNotifiableActivities()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;

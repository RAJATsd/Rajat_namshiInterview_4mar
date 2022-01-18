import "./filters.styles.css";
import React, { Component } from "react";

export default class Filters extends Component {
  render() {
    return (
      <div className="filter-choices">
        <span className="filter-select-holder">
          Sources :{" "}
          <select
            defaultValue={this.props.source}
            onChange={this.props.handleSourceChange}
            className="filter-select"
            name="sources"
            id="sources"
          >
            <option value="any">Any</option>
            <option value="wired">wired</option>
            <option value="Engadget">Engadget</option>
            <option value="Reuters">Reuters</option>
          </select>{" "}
        </span>
      </div>
    );
  }
}

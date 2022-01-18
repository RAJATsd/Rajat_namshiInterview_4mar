import "./headerAndInput.styles.css";
import React from "react";
import { debounce } from 'lodash';

import AppLogo from "../../assets/images/hatch_KIDS_LOGO.svg";
import MountainPic from "../../assets/images/mountain.png";

class HeaderAndInput extends React.Component {
  render() {
    return (
      <div className="header-and-input-container">
        <div className="app-logo-container">
          <img className="app-logo-image" src={AppLogo} alt="hatch kids logo" />
        </div>
        <div className="info-and-search-input-container">
          <div className="appinfo">
            Discover AR / VR Apps created by our community members
          </div>
          <input
            onChange={debounce(this.props.handleInputChange,500)}
            className="keyword-filter-input"
            placeholder="Search Recent Events"
          />
        </div>
        <img src={MountainPic} alt="Mountain" className="mountain-pic" />
      </div>
    );
  }
}

export default HeaderAndInput;

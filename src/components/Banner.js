import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="profile_img_wrap">
          <img
            className="profile_img"
            src={require("../asssets/dance.jpeg")}
            alt="Chanchal Jaiswal"
          />
        </div>
        <p className="name"> Chanchal Jaiswal</p>
        <p className="line">
          <FontAwesome name="address-card" className="banner_icons" />
          923 Pine Knoll Ct Conroe TX 77384
        </p>
        <p className="line">
          <FontAwesome name="phone" className="banner_icons" />
          (469)-403-5401
        </p>
        <p>
          <a href="https://chat.whatsapp.com/CpgCaooXvLz6PGeKMyRdK6">
            Join Whatsapp Group for WIDC
          </a>
        </p>
      </div>
    );
  }
}

export default Banner;

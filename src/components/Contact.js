import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <h2 className="title">Contact</h2>
          <i class="fa fa-whatsapp" aria-hidden="true"></i>
          <a href="https://chat.whatsapp.com/CpgCaooXvLz6PGeKMyRdK6">
            Join Whatsapp Group for WIDCC
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;

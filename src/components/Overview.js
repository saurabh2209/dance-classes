import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Overview extends Component {
  render() {
    return (
      <section id="overview">
        <div className="container">
          <h2 className="title ml-5">Overview</h2>
          <p style={{ textAlign: "left" }}>
            Very excited to announce Woodland Indian Dance Classes for kids of
            all ages. We try to bring out the best in our students by sharing
            our dance knowledge and spreading love for Dance with all cultures.
            WIDC provides a unique and highly personalized method of learning,
            creating an environment to nurture, educate and encourage creative
            individuals to achieve the highest level of success. With a faculty
            of highly qualified, caring and ethnically diverse dance expert,
            students are trained seriously in technique and eventually blossom
            into graceful and versatile dancers as they mature and grow in the
            program.
          </p>
        </div>
      </section>
    );
  }
}

export default Overview;

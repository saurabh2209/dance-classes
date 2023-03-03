import React, { Component } from "react";
import { Row, Col, Card, CardText, CardBody, CardTitle } from "reactstrap";

class Classes extends Component {
  render() {
    return (
      <section id="dances">
        <div className="container">
          <h2 className="title">Dances</h2>
          <Row>
            <Col xs="12" md="6">
              <Card className="project_card">
                <CardBody>
                  <CardTitle>
                    <h4>Semi Classical</h4>
                  </CardTitle>
                  <CardText>
                    <p style={{ textAlign: "left" }}>
                      Semi-classical dance is an art form that features
                      extensive movements of your body while maintaining grace
                      along with expressions and speed. Interestingly, this
                      dance form breaks what is called a stylized structure in
                      the classical dance.
                    </p>
                  </CardText>
                  <div>
                    <div>
                      <b>Monday to Friday: 5pm</b>
                    </div>
                    <div>
                      <b>Saturday: 10am</b>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" md="6">
              <Card className="project_card">
                <CardBody>
                  <CardTitle>
                    <h4>Bollywood/Free Style</h4>
                  </CardTitle>
                  <CardText>
                    <p style={{ textAlign: "left" }}>
                      Bollywood/Free style dance form is derived from
                      combination of formal and folk Indian dance traditions and
                      music.
                    </p>
                  </CardText>
                  <div>
                    <div>
                      <b>Monday to Friday: 6pm</b>
                    </div>
                    <div>
                      <b>Saturday: 11am</b>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    );
  }
}

export default Classes;

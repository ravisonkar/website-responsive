import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <div className="container w-100 text-center">
              <h1 className="m-3">
                We are a DevOps first tech company specializing in mobile, web
                development and design.
              </h1>
            </div>
            <div className="text-center">
              <img className="w-75" src="assets/image/logo.png" />
            </div>
          </Row>
          <h1 className="mt-3 pt-3">Our Culture</h1>
          <Row>
            <Col className="mt-3" sm={12} xs={12}>
              At The Procedure, we celebrate people. We respect their ambitions
              and beliefs. With a team of 11, we drive business process
              automation with a goal to make human friendly softwares accessible
              to larger sections of society. We are quick to jump on new
              technologies and discard obsolete ones. We strongly believe in
              growing as a team so peer reviews are absolutely critical. We ship
              quality code without breaking stuff via Continuous Deployment and
              Test Driven Development (TDD). We believe in hiring individuals
              who will add to the culture and not just fit in it. Remember,
              whoever you are and whatever your beliefs are, if you are a
              problem solver looking for a good environment, you've found the
              sweet spot.
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default About;

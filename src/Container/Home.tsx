import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Home extends React.Component {
  render() {
    return (
      <Container className="title">
        <Row>
          <Col>
            <h1 className="text-center">Welcome To Procedure Technologies</h1>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <img className="w-50 " src="assets/image/logo.png" />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Home;

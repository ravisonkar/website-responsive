import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <footer className="fixed-bottom  bg-white">
      <div className="footer">
        <Container>
          <Row className="mt-3">
            <Col>
              <p>
                <a href="/">Terms & conditions</a> | Copyright
              </p>
            </Col>
            <Col>
              <div className="float-right">
                Made With Full Of Happiness By Team
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
export default Footer;

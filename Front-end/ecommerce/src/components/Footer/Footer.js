import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'

function Footer() {
  const primaryColor = "#ffffff";
  const secondaryColor = "#458217";
  //  const accentColor = "#f7892d";

  const footerStyle = {
    // backgroundColor: accentColor,
    backgroundColor: secondaryColor,
    // height: "170px",
  };
  return (
    <footer>
      <Container fluid style={footerStyle}>
        <Row className="mt-5" style={{ primaryColor }}>
          <Col className="text-center py-5" style={{ color: primaryColor }}>
            Copyright &copy; MOUNTAIN BOONS
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

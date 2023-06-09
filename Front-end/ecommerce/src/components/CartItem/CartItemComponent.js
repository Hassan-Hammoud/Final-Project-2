import React from "react";
import { ListGroup, Row, Col, Image, Form, Button } from "react-bootstrap";

function CartItemComponent() {
  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col md={2}>
            <Image crossOrigin="anonymous" src="/images/Carousel/pexels-2.jpg" fluid />
          </Col>
          <Col md={2}>
            Dairy products <br />
            Cheese
          </Col>
          <Col md={2}>
            <b>$10</b>
          </Col>
          <Col md={3}>
            <Form.Select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button
              type="button"
              variant="secondary"
              onClick={() => window.confirm("Are you sure?")}
            >
              <i className="bi bi-trash"></i>
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
      <br/>
    </>
  );
}

export default CartItemComponent;

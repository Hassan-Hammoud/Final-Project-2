import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../components/Admin/AdminLinksComponent";

function AdminOrdersPage() {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />{" "}
      </Col>
      <Col md={10}>
        <h1 className="mb-4"> Orders</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Date</th>
              <th>Total</th>
              <th>Delivered</th>
              <th>Payment Method</th>
              <th>Order Details</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>Hassan Hammoud</td>
                  <td>2023-5-25</td>
                  <td>$525</td>
                  <td>
                    <i className={item}></i>
                  </td>
                  <td>Credit Card</td>
                  <td>
                    <Link to="/admin/order-details"> Go to order</Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default AdminOrdersPage;

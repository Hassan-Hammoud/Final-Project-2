import React from "react";
import { Col, Row, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../components/Admin/AdminLinksComponent.js";
import "./AdminProductsPage.css";
const deleteHandler = () => {
  if (window.confirm("Are you sure?")) alert("product deleted!");
};

function AdminProductsPage() {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />{" "}
      </Col>
      <Col md={10}>
        <h1 className="mb-4">
          {" "}
          Product List
          <LinkContainer to="/admin/create-new-product">
            <Button className="ms-2">Create new</Button>
          </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Zaatar", price: "$12", category: "Zaatar" },
              { name: "Honey", price: "$50", category: "Honey" },
              { name: "Olive Oil", price: "$100", category: "Olive Oil" },
            ].map((item, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.category} </td>
                <td>
                  <Link to="/admin/edit-product">
                    <Button className="btn-sm" id="btn-edit">
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                  </Link>
                  {" / "}
                  <Button className="btn-sm" onClick={deleteHandler}>
                    <i className="bi bi-x-circle"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default AdminProductsPage;

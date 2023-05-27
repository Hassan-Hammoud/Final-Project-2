import React from "react";
import { Col, Row, Table, Button } from "react-bootstrap";
import AdminLinksComponent from "../../components/Admin/AdminLinksComponent.js";
import { Link } from "react-router-dom";

const deleteHandler = () => {
  if (window.confirm("Are you sure!")) alert("user deleted!");
};

function AdminUserPage() {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />{" "}
      </Col>
      <Col md={10}>
        <h1 className="mb-4">User List</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
              (item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>Hassan </td>
                  <td>Hammoud</td>
                  <td>Hssn@gmail.com</td>
                  <td>
                    <i className={item}></i>
                  </td>

                  <td>
                    <Link to="/admin/edit-user">
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
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default AdminUserPage;

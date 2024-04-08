import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <>
      <Container>
        <h2 className="md-auto text-center p-4">Admin Dashboard</h2>
        <Row className="mb-3">
          <Col className="mb-3">
            <Card border="secondary">
              <Card.Body>
                <Card.Title as="h4">Cuisines</Card.Title>
                <Button variant="outline-info" size="sm" className="me-3">
                  View Cuisines
                </Button>
                <Button variant="outline-info" size="sm" className="me-3">
                  Add Cuisine
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card border="secondary">
              <Card.Body>
                <Card.Title as="h4">Categories</Card.Title>
                <Button variant="outline-info" size="sm" className="me-3">
                  View Categories
                </Button>
                <Button variant="outline-info" size="sm" className="me-3">
                  Add Category
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card border="secondary">
              <Card.Body>
                <Card.Title as="h4">Restaurants</Card.Title>
                <Button variant="outline-info" size="sm" className="me-3">
                  View Restaurants
                </Button>
                <Button variant="outline-info" size="sm" className="me-3">
                  Add Restaurant
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col className="mb-3">
            <Card border="secondary">
              <Card.Body>
                <Card.Title as="h4">Food Items</Card.Title>
                <Button variant="outline-info" size="sm" className="me-3">
                  View Food Items
                </Button>
                <Button variant="outline-info" size="sm" className="me-3">
                  Add Food Item
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card border="secondary">
              <Card.Body>
                <Card.Title as="h4">Orders</Card.Title>
                <Button variant="outline-info" size="sm" className="me-3">
                  View Orders
                </Button>
                <Button variant="outline-info" size="sm" className="me-3">
                  Add Order
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card border="secondary">
              <Card.Body>
                <Card.Title as="h4">Users</Card.Title>
                <Button variant="outline-info" size="sm" className="me-3">
                  View Users
                </Button>
                <Button variant="outline-info" size="sm" className="me-3">
                  Add User
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
          <Card border="secondary">
              <Card.Body>
                <Card.Title as="h4">Restaurant Menu</Card.Title>
                <Button variant="outline-info" size="sm" className="me-3">
                  View Menu
                </Button>
                <Button variant="outline-info" size="sm" className="me-3">
                  Add Menu
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
};
export default AdminDashboard;

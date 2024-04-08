import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

  //console.log(loggedInUser);

  const handleSignOut = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("loggedInUser");
    window.location.reload();
  };
  const handleAdminDashboard = (event) => {
    event.preventDefault();
    window.location.reload();
  }

  return (
    <header>
      <Navbar
        bg="info"
        navbar="light"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Nav.Link>
            <Navbar.Brand>Food Order App</Navbar.Brand>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto">
              {loggedInUser && !loggedInUser.isAdmin && (<Nav.Link>
                <i className="bi bi-cart"> Cart</i>
              </Nav.Link>
              )}
              {loggedInUser && !loggedInUser.isAdmin && (
                <Nav.Link>
                  <i className="bi bi-bucket-fill"> Orders</i>
                </Nav.Link>
              )}

              {loggedInUser && (
                <Nav.Link>
                  <i className="bi bi-bucket-fill"> Profile</i>
                </Nav.Link>
              )}

              {loggedInUser && loggedInUser.isAdmin && (
                <Nav.Link onClick={(e) => handleAdminDashboard(e)}>
                  <i className="bi bi-gear"> AdminDashboard</i>
                </Nav.Link>
              )}

              {!loggedInUser && (
                <Nav.Link>
                  <i className="bi bi-box-arrow-in-right"> Log In</i>
                </Nav.Link>
              )}
              {loggedInUser && (
                <Nav.Link onClick={(e) => handleSignOut(e)}>
                  <i className="bi bi-box-arrow-in-right"> Sign Out</i>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

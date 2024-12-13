import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

// Step 1 - import the page you want to render
import Help from "./pages/help";
import Index from "./pages/index"
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";

// Footer Component
const Footer = () => {
  return (
      <footer className="footer bg-light mt-auto py-3">
          <Container className="text-center">
              <p className="mb-0">© 2024 React Template. All Rights Reserved.</p>
              <small>
                  <a href="/privacy" >Privacy Policy</a> | 
                  <a href="/terms" > Terms of Service</a>
              </small>
          </Container>
      </footer>
  );
};

// Step 2 - Add it to the menyu
const Menu = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">React Template</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Index</Nav.Link>
                        <Nav.Link href="/help">Help</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

// Step 3 - Make sure you create a route to that page

function App() {
    return (
        <Router>
            <Menu  />
            <div className="page-content">
                <Routes>
                    <Route exact path="/" element={<Index />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;

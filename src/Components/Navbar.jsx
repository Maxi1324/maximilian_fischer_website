import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar() {
    return (  
        <Navbar className="Navbar" expand="lg">
        <Container>
          <Navbar.Collapse className="text-center"id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              <Nav.Link className = "NavbarItems" href="#home">About me</Nav.Link>
              <Nav.Link className = "NavbarItems" href="#home">Skills</Nav.Link>
              <Nav.Link className = "NavbarItems" href="#link">Projects</Nav.Link>
              <Nav.Link className = "NavbarItems" href="#link">Education</Nav.Link>
              <Nav.Link className = "NavbarItems" href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;
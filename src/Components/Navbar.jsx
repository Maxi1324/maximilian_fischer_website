import { Container, Nav, Navbar } from "react-bootstrap";

function NavBar(props) {
    const NavbarItems = ["About me", "Skills", "Projects", "Education","Contact"]

    return (  
        <Navbar className="Navbar" expand="lg">
        <Container>
          <Navbar.Collapse className="text-center"id="basic-navbar-nav">
            <Nav className="me-auto text-center">
              {
                NavbarItems.map((o,i)=>{
                  return (<Nav.Link className = "NavbarItems" key = {i} onClick = {()=>{
                    props.CamPos.current = i
                    props.TextBoxen.current.AktPage(i)
                  }}>{o}</Nav.Link>)
                })
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default NavBar;
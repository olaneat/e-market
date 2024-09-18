import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  './navbar.scss'



function NavBar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid className='nav-container'>
        <Navbar.Brand href="#">Neat Collection</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  />
          <Navbar.Collapse id="navbarScroll">
          <Form className="me-auto my-1 my-lg-2 d-flex form_field">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-4"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav
              className="my-2 my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown title="Account" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">
                  Login
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Signup
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">Cart</Nav.Link>
              
            </Nav>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
      );
}

export default NavBar;
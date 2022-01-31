import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";

const Navigation = ({setCurrHashLink}) => (
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">BSC API Router</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home" onClick={() => setCurrHashLink('home')}>Home</Nav.Link>
      <Nav.Link href="#price" onClick={() => setCurrHashLink('price')}>Price</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
);

export default Navigation;
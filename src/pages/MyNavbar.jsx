import React from 'react'
import { Navbar,Nav,Container} from 'react-bootstrap';
function MyNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/home" className="text-warning">TRIP PLANNER</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home" className="text-warning">Home</Nav.Link>
          <Nav.Link href="/attractions" className="text-warning">Attractions</Nav.Link>
          <Nav.Link href="/hotels" className="text-warning">Hotels</Nav.Link>
          <Nav.Link href="/restaurants" className="text-warning">Restaurants</Nav.Link>
          <Nav.Link href="/map" className="text-warning">Map View</Nav.Link>
        </Nav>
        
      </Container>
    </Navbar>
  );
}
export default MyNavbar; // Replace 'Grid' with your component name if different

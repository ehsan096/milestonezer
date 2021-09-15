import "./LowerBar.css";
import location from "./location.svg";
import money from "./money.svg";
import local from "./local.svg";
import group from "./group.svg";
import nps from "./nps.svg";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const LowerBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="lowerBar">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1" className="mx-4 Cockpit">
            <img src={location} className="lowerBar-location" alt="logo" />
            Cockpit
          </Nav.Link>
          <Nav.Link href="#action2" className="mx-4">
            <img src={money} className="lowerBar-location" alt="logo" />
            Key Index
          </Nav.Link>
          <Nav.Link href="#action2" className="mx-4">
            <img src={local} className="lowerBar-location" alt="logo" />
            Products
          </Nav.Link>
          <Nav.Link href="#action2" className="mx-4">
            <img src={group} className="lowerBar-location" alt="logo" />
            Users
          </Nav.Link>
          <Nav.Link href="#action2" className="mx-4">
            <img src={nps} className="lowerBar-location" alt="logo" />
            NPS
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default LowerBar;

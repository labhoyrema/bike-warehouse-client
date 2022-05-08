import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Header = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="manageinventory">
                Manage Inventory
              </Nav.Link>
              <Nav.Link as={Link} to="additem">
                Add Item
              </Nav.Link>
              <Nav.Link as={Link} to={"/myitems"}>
                My Items
              </Nav.Link>
              <Nav.Link as={Link} to={"/Blog"}>
                Blog
              </Nav.Link>
              {user?.uid ? (
                <button onClick={() => signOut(auth)} className="btn-b">
                  LogOut
                </button>
              ) : (
                <Nav.Link as={Link} className="link-btn " to={"/login"}>
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

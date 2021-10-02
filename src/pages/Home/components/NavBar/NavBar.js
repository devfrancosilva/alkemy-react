import { Navbar, Button } from "react-bootstrap";
import { useAuthContext } from "../../../../contexts/Auth";

export const NavBar = () => {
  const { logout } = useAuthContext();
  return (
    <Navbar className="bg-dark py-3 mb-3 justify-content-between">
      <Navbar.Brand className="text-white">Alkemy React</Navbar.Brand>
      <Button variant="danger" onClick={() => logout()}>
        Logout
      </Button>
    </Navbar>
  );
};

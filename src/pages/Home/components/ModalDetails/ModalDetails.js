import {
  Modal,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { useHeroesContext } from "../../../../contexts/HeroesContext";

export const ModalDetails = () => {
  const { modalDetails, dispatchCloseModalDetails } = useHeroesContext();
  const handleClose = () => {
    dispatchCloseModalDetails();
  };
  return (
    <Modal show={modalDetails.show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Heroe details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md="6" className="d-flex">
            <Image src={modalDetails.data?.image.url} fluid />
          </Col>
          <Col md="6">
            <ListGroup>
              <ListGroupItem>Name: {modalDetails.data?.name}</ListGroupItem>
              <ListGroupItem>
                Aliases:{" "}
                {modalDetails.data?.biography.aliases.map((aliases, i) => {
                  if (i === modalDetails.data.biography.aliases.length - 1) {
                    return `${aliases}`;
                  } else {
                    return `${aliases}, `;
                  }
                })}
              </ListGroupItem>
              <ListGroupItem>
                Height: {modalDetails.data?.appearance.height[1]}
              </ListGroupItem>
              <ListGroupItem>
                Weight: {modalDetails.data?.appearance.weight[1]}
              </ListGroupItem>
              <ListGroupItem>
                Eye color: {modalDetails.data?.appearance["eye-color"]}
              </ListGroupItem>
              <ListGroupItem>
                Hair color: {modalDetails.data?.appearance["hair-color"]}
              </ListGroupItem>
              <ListGroupItem>
                Workplace: {modalDetails.data?.work.base}
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

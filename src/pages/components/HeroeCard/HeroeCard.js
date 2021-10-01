import { Button, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useHeroesContext } from "../../../contexts/HeroesContext";

export const HeroeCard = ({ name, img, powerStats, id }) => {
  const { dispatchRemoveHeroe } = useHeroesContext();

  return (
    <Col xs="12" sm="6" md="4">
      <Card className="mb-3 text-center">
        <Card.Header className="text-center">{name}</Card.Header>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Powerstats:</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Intelligence: <strong>{powerStats.intelligence}</strong>
            </ListGroupItem>
            <ListGroupItem>
              Strength: <strong>{powerStats.strength}</strong>
            </ListGroupItem>
            <ListGroupItem>
              Speed: <strong>{powerStats.speed}</strong>
            </ListGroupItem>
            <ListGroupItem>
              Durability: <strong>{powerStats.durability}</strong>
            </ListGroupItem>
            <ListGroupItem>
              Power: <strong>{powerStats.power}</strong>
            </ListGroupItem>
            <ListGroupItem>
              Combat: <strong>{powerStats.combat}</strong>
            </ListGroupItem>
          </ListGroup>
          <Button variant="info" className="mr-3">
            Details
          </Button>
          <Button variant="danger" onClick={() => dispatchRemoveHeroe(id)}>
            Remove
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

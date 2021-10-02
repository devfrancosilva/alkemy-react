import { Button, Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { useHeroesContext } from "../../../../contexts/HeroesContext";

export const HeroeCard = ({ heroe }) => {
  const { dispatchRemoveHeroe, dispatchShowModalDetails } = useHeroesContext();
  const { name, powerstats, image, id } = heroe;
  return (
    <Col xs="12" sm="6" md="4">
      <Card className="mb-3 text-center">
        <Card.Header className="text-center">{name}</Card.Header>
        <Card.Img variant="top" src={image.url} />
        <Card.Body>
          <Card.Title>Powerstats:</Card.Title>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Intelligence: <strong>{powerstats.intelligence}</strong>
            </ListGroupItem>
            <ListGroupItem>
              Strength: <strong>{powerstats.strength}</strong>
            </ListGroupItem>
            <ListGroupItem>
              Speed: <strong>{powerstats.speed}</strong>
            </ListGroupItem>
            <ListGroupItem>
              Durability: <strong>{powerstats.durability}</strong>
            </ListGroupItem>
            <ListGroupItem>
              Power: <strong>{powerstats.power}</strong>
            </ListGroupItem>
            <ListGroupItem>
              Combat: <strong>{powerstats.combat}</strong>
            </ListGroupItem>
          </ListGroup>
          <Button
            variant="info"
            className="mr-3"
            onClick={() => dispatchShowModalDetails(heroe)}
          >
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

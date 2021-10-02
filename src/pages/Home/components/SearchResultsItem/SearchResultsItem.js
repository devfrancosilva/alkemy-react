import { Col, Card, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useHeroesContext } from "../../../../contexts/HeroesContext";

export const SearchResultsItem = ({ heroe }) => {
  const { name, image } = heroe;
  const {
    dispatchAddHeroe,
    team,
    teamStats: { alignment },
  } = useHeroesContext();

  const handleAddHeroe = () => {
    if (team.length === 6) {
      return Swal.fire("Attention!", "The team is complete", "warning");
    }
    if (alignment[heroe.biography.alignment] === 3) {
      return Swal.fire(
        "Attention!",
        `Can't add a hero with ${heroe.biography.alignment} alignment`,
        "warning"
      );
    }

    dispatchAddHeroe(heroe);
  };
  return (
    <Col xs="12" sm="6" md="4">
      <Card>
        <Card.Header className="text-center">{name}</Card.Header>
        <Card.Img variant="top" src={image.url} />
        <Button variant="success" onClick={handleAddHeroe}>
          Add
        </Button>
      </Card>
    </Col>
  );
};

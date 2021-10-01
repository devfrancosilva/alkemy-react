import { Row } from "react-bootstrap";
import { useHeroesContext } from "../../../contexts/HeroesContext";
import { HeroeCard } from "../HeroeCard/HeroeCard";

export const HeroesGrid = () => {
  const { team } = useHeroesContext();

  return (
    <Row>
      {team.map((heroe) => (
        <HeroeCard
          key={heroe.id}
          id={heroe.id}
          name={heroe.name}
          img={heroe.image.url}
          powerStats={heroe.powerstats}
        />
      ))}
    </Row>
  );
};

import { Row } from "react-bootstrap";
import Loader from "react-loader-spinner";
import { useHeroesContext } from "../../../../contexts/HeroesContext";
import { HeroeCard } from "../HeroeCard/HeroeCard";

export const HeroesGrid = () => {
  const { team, loadingTeam } = useHeroesContext();

  if (loadingTeam)
    return (
      <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <Loader type="Puff" color="#343a40" height={200} width={200} />
        <p>Loading...</p>
      </div>
    );
  return (
    <Row>
      {team.map((heroe) => (
        <HeroeCard key={heroe.id} heroe={heroe} />
      ))}
    </Row>
  );
};

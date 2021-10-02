import { ProgressBar, Alert } from "react-bootstrap";
import { useHeroesContext } from "../../../../contexts/HeroesContext";

export const TeamStats = () => {
  const { teamStats, team } = useHeroesContext();

  if (team.length === 0)
    return (
      <Alert variant="danger" className="text-center">
        No team
      </Alert>
    );
  return (
    <div className="shadow p-3 my-5 bg-white rounded">
      <h3 className="text-center">Team Statistics</h3>
      <ProgressBar
        now={teamStats.intelligence}
        max={700}
        label={`Intelligence: ${teamStats.intelligence}`}
        className="mb-1"
      />
      <ProgressBar
        now={teamStats.strength}
        variant="danger"
        max={700}
        label={`Strength: ${teamStats.strength}`}
        className="mb-1"
      />
      <ProgressBar
        now={teamStats.speed}
        variant="success"
        max={700}
        label={`Speed: ${teamStats.speed}`}
        className="mb-1"
      />
      <ProgressBar
        now={teamStats.durability}
        variant="warning"
        max={700}
        label={`Durability: ${teamStats.durability}`}
        className="mb-1"
      />
      <ProgressBar
        now={teamStats.power}
        variant="info"
        max={700}
        label={`Power: ${teamStats.power}`}
        className="mb-1"
      />
      <ProgressBar
        now={teamStats.combat}
        variant="danger"
        max={700}
        label={`Combat: ${teamStats.combat}`}
        className="mb-1"
      />
      <ProgressBar
        now={teamStats?.averageHeight}
        variant="info"
        max={700}
        label={`Height: ${teamStats?.averageHeight?.toFixed(2)} cm`}
        className="mb-1"
      />
      <ProgressBar
        now={teamStats?.averageWeight}
        variant="info"
        max={700}
        label={`Weight: ${teamStats?.averageWeight?.toFixed(2)} kg`}
      />
    </div>
  );
};

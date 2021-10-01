import { REMOVE_HEROE, SET_TEAM } from "../actions/HeroesActions";

export const initialState = {
  team: [],
  teamStats: {},
};

export const HeroesReducer = (state, action) => {
  const calculateStats = (team) => {
    let intelligence = 0;
    let strength = 0;
    let speed = 0;
    let durability = 0;
    let power = 0;
    let combat = 0;
    let weight = 0;
    let height = 0;

    for (const heroe of team) {
      intelligence = intelligence + +heroe.powerstats.intelligence;
      strength = strength + +heroe.powerstats.strength;
      speed = speed + +heroe.powerstats.speed;
      durability = durability + +heroe.powerstats.durability;
      power = power + +heroe.powerstats.power;
      combat = combat + +heroe.powerstats.combat;
      weight = weight + +heroe.appearance.weight[1].split(" ")[0];
      height = height + +heroe.appearance.height[1].split(" ")[0];
    }

    let averageWeight = weight / team.length;
    let averageHeight = height / team.length;

    return {
      intelligence,
      strength,
      speed,
      durability,
      power,
      combat,
      averageHeight,
      averageWeight,
    };
  };

  switch (action.type) {
    case SET_TEAM:
      return {
        ...state,
        team: action.payload,
        teamStats: calculateStats(action.payload),
      };

    case REMOVE_HEROE:
      return {
        ...state,
        team: state.team.filter((heroe) => heroe.id !== action.payload),
        teamStats: calculateStats(
          state.team.filter((heroe) => heroe.id !== action.payload)
        ),
      };

    default:
      return state;
  }
};

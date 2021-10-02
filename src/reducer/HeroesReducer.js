import {
  ADD_HEROE,
  CLOSE_MODAL_DETAILS,
  REMOVE_HEROE,
  SET_SEARCH_LIST,
  SET_TEAM,
  SHOW_MODAL_DETAILS,
} from "../actions/HeroesActions";

export const initialState = {
  team: [],
  teamStats: {},
  searchList: [],
  modalDetails: {
    show: false,
    data: null,
  },
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
    let badCount = 0;
    let goodCount = 0;

    for (const heroe of team) {
      intelligence = intelligence + +heroe.powerstats.intelligence;
      strength = strength + +heroe.powerstats.strength;
      speed = speed + +heroe.powerstats.speed;
      durability = durability + +heroe.powerstats.durability;
      power = power + +heroe.powerstats.power;
      combat = combat + +heroe.powerstats.combat;
      weight = weight + +heroe.appearance.weight[1].split(" ")[0];
      height = height + +heroe.appearance.height[1].split(" ")[0];
      badCount = heroe.biography.alignment === "bad" ? badCount + 1 : badCount;
      goodCount =
        heroe.biography.alignment === "good" ? goodCount + 1 : goodCount;
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
      alignment: {
        bad: badCount,
        good: goodCount,
      },
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

    case SET_SEARCH_LIST:
      return {
        ...state,
        searchList: action.payload,
      };

    case ADD_HEROE:
      return {
        ...state,
        team: [...state.team, action.payload],
        teamStats: calculateStats([...state.team, action.payload]),
      };

    case SHOW_MODAL_DETAILS:
      return {
        ...state,
        modalDetails: {
          show: true,
          data: action.payload,
        },
      };

    case CLOSE_MODAL_DETAILS:
      return {
        ...state,
        modalDetails: {
          show: false,
          data: null,
        },
      };
    default:
      return state;
  }
};

export const SET_TEAM = "SET_TEAM";
export const REMOVE_HEROE = "REMOVE_HEROE";

export const setTeam = (team) => ({ type: SET_TEAM, payload: team });
export const removeHeroe = (id) => ({ type: REMOVE_HEROE, payload: id });

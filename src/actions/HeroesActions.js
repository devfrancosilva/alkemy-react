export const SET_TEAM = "SET_TEAM";
export const REMOVE_HEROE = "REMOVE_HEROE";
export const SET_SEARCH_LIST = "SET_SEARCH_LIST";
export const ADD_HEROE = "ADD_HEROE";
export const SHOW_MODAL_DETAILS = "SHOW_MODAL_DETAILS";
export const CLOSE_MODAL_DETAILS = "CLOSE_MODAL_DETAILS";

export const setTeam = (team) => ({ type: SET_TEAM, payload: team });
export const removeHeroe = (id) => ({ type: REMOVE_HEROE, payload: id });
export const setSearchList = (heroes) => ({
  type: SET_SEARCH_LIST,
  payload: heroes,
});
export const addHeroe = (heroe) => ({ type: ADD_HEROE, payload: heroe });
export const showModalDetails = (heroe) => ({
  type: SHOW_MODAL_DETAILS,
  payload: heroe,
});
export const closeModalDetails = () => ({ type: CLOSE_MODAL_DETAILS });

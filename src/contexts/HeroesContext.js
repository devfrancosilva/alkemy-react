import { createContext, useReducer, useEffect, useContext } from "react";
import { removeHeroe, setTeam } from "../actions/HeroesActions";
import { useFetchTeam } from "../hooks/useFetchTeam";
import { HeroesReducer, initialState } from "../reducer/HeroesReducer";

const HeroesContext = createContext();
const { Provider } = HeroesContext;

export const HeroesContextProvider = ({ children }) => {
  const [data, loading] = useFetchTeam();
  const [state, dispatch] = useReducer(HeroesReducer, initialState);

  const dispatchRemoveHeroe = (id) => {
    dispatch(removeHeroe(id));
  };

  useEffect(() => {
    if (!loading && data.length) {
      dispatch(setTeam(data));
    }
  }, [loading, data]);
  return (
    <Provider value={{ ...state, dispatchRemoveHeroe }}>{children}</Provider>
  );
};

export const useHeroesContext = () => {
  const context = useContext(HeroesContext);
  if (!context)
    throw new Error(
      "useHeroesContext must be used with a HeroesContextProvider"
    );
  return context;
};

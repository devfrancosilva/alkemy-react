import { createContext } from "react";
import { useFetchTeam } from "../hooks/useFetchTeam";

const HeroesContext = createContext();
const { Provider } = HeroesContext;

export const HeroesContextProvider = ({ children }) => {
  const [data, loading] = useFetchTeam();

  return <Provider>{children}</Provider>;
};

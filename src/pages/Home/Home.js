import { Container } from "react-bootstrap";
import { HeroesContextProvider } from "../../contexts/HeroesContext";
import { HeroesGrid } from "../components/HeroesGrid/HeroesGrid";
import { NavBar } from "../components/NavBar/NavBar";
import { Search } from "../components/Search/Search";
import { TeamStats } from "../components/TeamStats/TeamStats";

export default function Home() {
  return (
    <HeroesContextProvider>
      <NavBar />
      <Container>
        <Search />
        <TeamStats />
        <HeroesGrid />
      </Container>
    </HeroesContextProvider>
  );
}

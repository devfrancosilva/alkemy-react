import { Container } from "react-bootstrap";
import { HeroesContextProvider } from "../../contexts/HeroesContext";
import { HeroesGrid } from "./components/HeroesGrid/HeroesGrid";
import { ModalDetails } from "./components/ModalDetails/ModalDetails";
import { NavBar } from "./components/NavBar/NavBar";
import { Search } from "./components/Search/Search";
import { SearchResultsGrid } from "./components/SearchResultsGrid/SearchResultsGrid";
import { TeamStats } from "./components/TeamStats/TeamStats";

export default function Home() {
  return (
    <HeroesContextProvider>
      <NavBar />
      <Container>
        <Search />
        <SearchResultsGrid />
        <TeamStats />
        <HeroesGrid />
        <ModalDetails />
      </Container>
    </HeroesContextProvider>
  );
}

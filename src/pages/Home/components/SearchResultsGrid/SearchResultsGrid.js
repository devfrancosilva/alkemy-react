import { Row } from "react-bootstrap";
import { useHeroesContext } from "../../../../contexts/HeroesContext";
import { SearchResultsItem } from "../SearchResultsItem/SearchResultsItem";

export const SearchResultsGrid = () => {
  const { searchList } = useHeroesContext();
  return (
    <Row className="mt-3 justify-content-center">
      {searchList.length > 0
        ? searchList.map((heroe) => (
            <SearchResultsItem key={heroe.id} heroe={heroe} />
          ))
        : null}
    </Row>
  );
};

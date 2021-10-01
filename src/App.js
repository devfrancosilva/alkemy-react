import { AuthProvider } from "./contexts/Auth";
import { HeroesContextProvider } from "./contexts/HeroesContext";
import { Routes } from "./routes/Routes";

function App() {
  return (
    <AuthProvider>
      <HeroesContextProvider>
        <Routes />
      </HeroesContextProvider>
    </AuthProvider>
  );
}

export default App;

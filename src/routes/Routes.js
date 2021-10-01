import { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "../contexts/Auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import Login from "../pages/Login";
import Home from "../pages/Home";

export const Routes = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { authenticate } = useAuthContext();

  const verifyCommonAuth = useCallback(() => {
    if (localStorage.getItem("userAuth")) {
      authenticate(localStorage.getItem("userAuth"));
      return true;
    }
  }, [authenticate]);

  useEffect(() => {
    if (verifyCommonAuth()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setChecking(false);
  }, [verifyCommonAuth, isLoggedIn]);

  if (checking) return <h1>Cargando...</h1>;

  return (
    <Router>
      <Switch>
        <PublicRoute
          isLoggedIn={isLoggedIn}
          exact
          path="/login"
          component={Login}
        />
        <PrivateRoute isLoggedIn={isLoggedIn} exact path="/" component={Home} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
};

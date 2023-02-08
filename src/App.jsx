import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { SideMenu } from "./components/sidebar.jsx";
import { LandingPage } from "./pages/landingpage";
import { Empty } from "./components/empty";
import { Error404 } from "./components/error404";

export function App() {
  return (
    <Router>
      <div>
        <header>
          
        </header>
        <main>
          <Switch>
            {/* <Route exact path="/movies/:movieId">
              <MovieDetails />
            </Route> */}
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/">
              <Error404 />
            </Route>
          </Switch>
          
        </main>
      </div>
    </Router>
  );
}

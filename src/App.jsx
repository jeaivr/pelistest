import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/home.jsx";
export function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to="/"></Link>
        </header>
        <main>
          <Home />
        </main>
      </div>
    </Router>
  );
}

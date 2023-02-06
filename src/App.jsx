import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { SideMenu } from "./components/sidebar.jsx";
export function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to="/"></Link>
        </header>
        <main>
          <SideMenu />
          <Home />
        </main>
      </div>
    </Router>
  );
}

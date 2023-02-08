import { SideMenu } from "../components/sidebar.jsx";
import { useDebounce } from "../hooks/useDebounce.js";
import { useQuery } from "../hooks/useQuery.js";
import { Home } from "./home.jsx";

export function LandingPage() {

  const query = useQuery();
  const search = query.get("q");

  // const debouncedSearch = useDebounce(search, 300)

  return (
    <div>
      <SideMenu />
      <Home key={search} search={search}/>
    </div>
  );
}
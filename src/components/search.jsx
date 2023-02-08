import styles from "./search.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    // window.scrollTo(0, 0)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [searchText, setSearchText] = useState("");

  const history = useHistory();

  const query = useQuery();
  const search = query.get("q");

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?q=" + searchText);
    props.setValue(false);
  };

  return (
    <>
      <div className={styles.main}>
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
          <div className={styles.searchBox}>
            <input
              autoFocus
              className={styles.searchInput}
              type="text"
              value={searchText}
              placeholder="Buscar películas"
              aria-label="Buscar películas"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className={styles.searchButton} type="submit">
              <BiSearchAlt />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

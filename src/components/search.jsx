import styles from "./search.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";

export function Search() {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    // window.scrollTo(0, 0)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className={styles.main}>
        <form className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <input
              autofocus
              className={styles.searchInput}
              type="text"
              placeholder="Buscar películas"
              aria-label="Buscar películas"
            />
            <BiSearchAlt
              className={styles.searchButton}
              color="black"
              size={20}
            />
          </div>
        </form>
      </div>
    </>
  );
}

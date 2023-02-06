import styles from "./sidebar.module.css";
import { BiMoviePlay } from "react-icons/bi";

export function SideMenu() {
  return (
    <div>
      <header>
        <a className={styles.icon} active><BiMoviePlay /></a>
		<nav>
			<i className={styles.icon_filter} onclick="filter(this);"></i>
			<i className={styles.icon_search} onclick="searchClick(this);"></i>
			<i className={styles.icon_user} onclick="watchList(this);"></i>
			<a className={styles.icon_version + ' ' + styles.newVers} up-target="body"></a>
			<a className={styles.icon_userSet} up-target="body"></a>
		</nav>
		<b className={styles.alpha}>Alfa</b>
		<p className={styles.version}>0.1.0</p>
	</header>
    </div>
  );
}
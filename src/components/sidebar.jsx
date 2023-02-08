import styles from "./sidebar.module.css";
import { BiMoviePlay, BiSearch } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import { FiSave, FiInfo, FiUser } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineContactSupport } from "react-icons/md";

export function SideMenu() {
  return (
    <div>
      <header>
        <a className={styles.icon} active>
          <BiMoviePlay />
        </a>
        <a className={styles.icon} active>
          <GoSettings />
        </a>
        <a className={styles.icon}>
          <BiSearchAlt />
        </a>
        <a className={styles.icon}>
          <FiUser />
        </a>
        <a className={styles.icon + " " + styles.iconcontact}>
          <MdOutlineContactSupport />
        </a>
        <a className={styles.icon + " " + styles.iconinfo}>
			<FiInfo />
			</a>
        <b className={styles.alpha}>Alfa</b>
        <p className={styles.version}>© 2017</p>
      </header>
    </div>
  );
}

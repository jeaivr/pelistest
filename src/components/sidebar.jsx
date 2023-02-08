import styles from "./sidebar.module.css";
import { BsPlay } from "react-icons/bs";
import { MdFilterList } from "react-icons/md";
import { FiInfo, FiUser, FiSettings } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";

export function SideMenu() {
  return (
    <div>
      <header>
        <a className={styles.icon + ' ' + styles.iconplay + ' ' + styles.iconactive} autofocus>
          <BsPlay />
        </a>
        <a className={styles.icon + ' ' + styles.iconfilter}>
          <MdFilterList />
        </a>
        <a className={styles.icon}>
          <BiSearchAlt />
        </a>
        <a className={styles.icon}>
          <FiUser />
        </a>
        <a className={styles.icon + " " + styles.iconcontact}>
          <FiSettings />
        </a>
        <a className={styles.icon + " " + styles.iconinfo}>
			<FiInfo />
			</a>
        <b className={styles.alpha}>Alfa</b>
        <p className={styles.version}>© 2019</p>
      </header>
    </div>
  );
}

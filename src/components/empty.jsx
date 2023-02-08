import styles from "./empty.module.css";
import { useQuery } from "../hooks/useQuery";

export function Empty() {

  const query = useQuery();
  const search = query.get("q");

  return <div className={styles.empty}><p>La búsqueda de <strong>{search}</strong> no obtuvo ningún resultado</p></div>;
}

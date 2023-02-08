import { useQuery } from "../hooks/useQuery";
import { SideMenu } from "./sidebar";
import styles from "./empty.module.css";
import { useHistory} from 'react-router-dom';


export function Error404() {

    const history = useHistory()
    
  return (
    <>
      <SideMenu />
      <div className={styles.empty}>
        <p><strong>404.</strong> Ha habido un error{"\n"}</p>
        <br/>
        {"\n\n"}
        </div>
        <div className={styles.empty2}>
        <p>La URL solicitada <strong>{history.location.pathname}</strong> no ha sido encontrada en el servidor.</p>
      </div>

    </>
  );
}

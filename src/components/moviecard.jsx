import { Link } from "react-router-dom";
import { GetMovieImg } from "../utils/getMovieImg";
import styles from "./moviecard.module.css";
import genreNames from "./genres.json";

function replace(genre) {
  for (var i = 0; i < genreNames.genres.length; i++) {
    if (genreNames.genres[i].id === genre) {
      return genreNames.genres[i].name;
    }
  }
}

export function MovieCard({ movie }) {
  const imageUrl = GetMovieImg(movie.poster_path, 300);

  return (
    <div  className={styles.moviegrid} id={styles.articles}>
      {/* <Link to={"/movies/" + movie.id}>
        <div className={styles.movieinfo}>
          <p className={styles.movierelease}>
            {movie.release_date.substr(0, 4)}
          </p>
          <br></br>
          <p className={styles.movietitle}>{movie.title}</p>
          <p className={styles.moviegenres}>
            {movie.genre_ids.map((genre) => replace(genre)).join(",")}
          </p>
        </div>
        <img
          width={300}
          height={450}
          className={styles.movieimage}
          src={imageUrl}
          alt={movie.title}
        />
      </Link> */}

      <article>
        <div>
        <img
          width={300}
          height={450}
          className={styles.movieimage}
          src={imageUrl}
          alt={movie.title}
        />
        </div>
        <div className={styles.moreInfo}>
          <span className={styles.release}>{movie.release_date.substr(0, 4)}</span>
          <b className={styles.title}>{movie.title}</b>
          <span>
            <b>{movie.genre_ids.map((genre) => replace(genre)).join(", ")}</b>
          </span>
        </div>
      </article>
    </div>
  );
}

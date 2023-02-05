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
    <div id={styles.articles}>
      <article>
        <img
          width={300}
          height={450}
          className={styles.movieimage}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={styles.moreInfo}>
          <span className={styles.release}>
            {movie.release_date.substr(0, 4)}
          </span>
          <b className={styles.title}>{movie.title}</b>
          <span>
            <b>{movie.genre_ids.map((genre) => replace(genre)).join(", ")}</b>
          </span>
        </div>
      </article>
    </div>
  );
}

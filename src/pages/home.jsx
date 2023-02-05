import { useEffect, useState } from "react";
import { get } from "../utils/httpClient.js";
import styles from "./home.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "../components/empty.jsx";
import { Spinner } from "../components/spinner.jsx"
import { MovieCard } from "../components/moviecard.jsx"

export function Home({search}) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const searchArgs = "&language=es-ES&page=" + page;
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie?";
    get(searchUrl + searchArgs).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && movies.length === 0){
    return <Empty />
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={styles.moviesgrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}

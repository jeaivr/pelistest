import placeholder from "../img/placeholder.jpg";

export function GetMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}

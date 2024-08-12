import Movie from "./Movie";

export default function MoviesList({ handleSelectMovieId, movies }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie
          handleSelectMovieId={handleSelectMovieId}
          movie={movie}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
}

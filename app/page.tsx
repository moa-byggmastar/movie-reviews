import Link from "next/link";
import Search from "../components/Search";

export default async function HomePage() {
  const res = await fetch("http://localhost:3000/api/movies", {
    cache: "no-store" // för att hämta färska data varje gång
  });
  const movies = await res.json();

  return (
    <div>
      <h1>Filmrecensioner</h1>

      <Search movies={movies} />

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

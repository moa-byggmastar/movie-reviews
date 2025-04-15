import Link from "next/link";

export default async function HomePage() {
  const res = await fetch("http://localhost:3000/api/movies", {
    cache: "no-store"
  });
  const movies = await res.json();

  return (
    <div>
      <h1>Filmrecensioner</h1>
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

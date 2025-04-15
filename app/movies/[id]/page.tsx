import React from 'react'

export default async function MoviePage({ params }) {
    const res = await fetch('http://localhost:3000/api/movies', {
        cache: 'no-store'
    })
    const movies = await res.json()
    const movie = movies.find(m => m.id === params.id)

    if (!movie) {
        return <h1>Filmen hittades inte.</h1>
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>Recension: ★★★★☆</p>
            <p>Mer info om filmen {movie.title}...</p>
            <a href="/">Tillbaka</a>
        </div>
    )
}

export async function GET() {
    const movies = [
        { id: '1', title: 'Interstellar' },
        { id: '2', title: 'Inception' },
        { id: '3', title: 'The Matrix' },
        { id: '4', title: 'The Dark Knight' },
        { id: '5', title: 'Pulp Fiction' },
        { id: '6', title: 'Forrest Gump' }
    ]

    return Response.json(movies)
}
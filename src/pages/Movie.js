import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
function Movie() {
  const [movies, setMovies] = useState([])
  const params = useParams()
  const movieID = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieID}`)
    .then(res => res.json())
    .then(data => setMovies(data))
    .catch(error => console.error(error))
  }, [movieID])
    if(!movies.title) {
      return <h1>Loading...</h1>
    }
    const genres = movies.genres.map(genre => {
      return (
        <span key={genre.id}>{genre}</span>

      )
    })
  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>{movies.title}</h1>
        <p>{movies.time}</p>
        {genres}

      </main>
    </>
  );
};

export default Movie;

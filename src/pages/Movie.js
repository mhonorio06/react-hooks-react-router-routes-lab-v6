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
 
  return (
    <>
      <header>
        {<NavBar />}
      </header>
      <main>
        <h1>{movies.title}</h1>
        <p>Running Time : {movies.time}</p>
        <span>{movies.genres[0]}</span>
        <span>{movies.genres[1]}</span>
        <span>{movies.genres[2]}</span>

      </main>
    </>
  );
};

export default Movie;

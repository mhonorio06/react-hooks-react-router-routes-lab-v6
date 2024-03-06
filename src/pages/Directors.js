import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(res => res.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error))
  }, [])
    const directorList = directors.map(director => {
      return (
        <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              <li>{director.movies[0]}</li>
            </ul>
            <ul>
              <li>{director.movies[1]}</li>
            </ul>
            <ul>
              <li>{director.movies[2]}</li>
            </ul>
        </article>

      )
    })
  return (
    <>
      <header>
        {<NavBar/>}
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorList}
      </main>
    </>
  );
};

export default Directors;

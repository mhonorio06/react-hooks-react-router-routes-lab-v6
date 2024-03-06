import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(res => res.json())
    .then(data => setActors(data))
    .catch(error => console.error(error))
  }, [])
  const actorsList = actors.map(actor => {
    return (
      <article key={actor.id}>
          
          <h2>{actor.name}</h2>
          <ul><li>{actor.movies[0]}</li></ul>
          <ul><li>{actor.movies[1]}</li></ul>
          <ul><li>{actor.movies[2]}</li></ul>
      </article>
    )
  })
  
  return (
    <>
      <header>
        {<NavBar/>/* What component should go here? */}
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorsList}
      </main>
    </>
  );
};

export default Actors;

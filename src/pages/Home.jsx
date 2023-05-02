import React from "react";
import { MoviesFilms } from "../components/MoviesFilms";

export const Home = () => {
  return (
    <div className="App">
      <main>
        <section>
          <br />
          <h2>Popular Titles</h2>
        </section>
        <MoviesFilms />
      </main>
      <footer>
        <p>Pie de página</p>
      </footer>
    </div>
  );
};
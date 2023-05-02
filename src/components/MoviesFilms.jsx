import { Link } from 'react-router-dom';




export const MoviesFilms = () => {
  return (
    <section className="secciones">
    <div className="ContenedorMoviesSeries">
      <ul className="moviesSeries">
        <li className="movieSerie">
          <h3>Series</h3>
          <Link to="/series"><img src="https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg" alt="Pelicula"></img></Link>

          
        </li>
        <li className="movieSerie">
          <h3>Peliculas</h3>
          <Link to="/movies"><img src="https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg" alt="Pelicula"></img></Link>
        </li>
      </ul>
    </div>
  </section>
  )
}

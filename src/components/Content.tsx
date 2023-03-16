import { MovieCard } from './MovieCard';

import '../styles/content.scss';

interface ContentProps {
  movieData: {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }[];
  title: string;
}

export function Content({ movieData, title }: ContentProps) {
  // Complete aqui
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movieData.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}
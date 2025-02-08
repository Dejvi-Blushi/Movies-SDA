import React, { useState, useEffect } from 'react';

import MovieCard from './MovieCard';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(true); // Track loading state
  // const [error, setError] = useState(null); // Track error state

  useEffect(
    () => {
      const fetchMovies = async () => {
        axios
          .get('http://localhost:8080/movies')
          .then((response) => setMovies(response.data))
          .catch((err) => console.log('Error:', err.message));
      };

      fetchMovies();
    }, []);

  return (
    <>
      <div>
        <Link to='/'><span className='flex justify-center text-4xl text-blue-600 font-bold pt-2'> MoviesFlix</span></Link>

        <div className='flex gap-6 mb-4 flex-wrap p-4 justify-center'>
          {movies?.map((movie, index) => {
            return (
              <div className='flex-none' key={movie.id}>
                <MovieCard movieProps={movie} key={movie.id} />
              </div>
            );
          })}
        </div>
      </div >
    </>
  );
};

export default MoviesList;

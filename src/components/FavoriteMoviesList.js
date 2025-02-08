import React from 'react';
import { useFavoritesStore } from '../store/favoriteMovies';

const FavoriteMovies = () => {
  const favorites = useFavoritesStore((state) => state.favorites); // Access the favorites array

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Favorite Movies</h1>
      {favorites.length > 0 ? (
        <ul className="list-disc pl-5">
          {favorites.map((favorite, index) => (
            <li key={index} className="my-2">
              <h2 className="text-xl font-semibold">{favorite.title}</h2>
              <p>{favorite.description}</p>
              <img
                src={`http://localhost:8080/${favorite.image}`}
                alt={favorite.title}
                className="w-[20rem] h-[20rem] object-cover mt-2"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite movies added yet.</p>
      )}
    </div>
  );
};

export default FavoriteMovies;
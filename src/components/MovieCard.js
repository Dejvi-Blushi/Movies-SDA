import React, { useEffect, useState } from 'react';
import Hashtag from './Hashtag';
import { useNavigate } from 'react-router-dom';
import NavigateButton from './NavigateButton';
import { useFavoritesStore } from '../store/favoriteMovies';
import { useMovieLikes } from '../store/likeState';

import { useRouteLoaderData, useLocation } from 'react-router-dom';

const MovieCard = ({ movieProps }) => {
  const navigate = useNavigate();
  const addToFavorites = useFavoritesStore((state) => state.addToFavorites);
  const removeFromFavorites = useFavoritesStore((state) => state.removeFromFavorites);
  const favorites = useFavoritesStore((state) => state.favorites);
  const isAlreadyFavorite = favorites.some((fav) => fav.id === movieProps.id);

  const likedMovies = useMovieLikes((state) => state.likedMovies);
  const isAlreadyLiked = likedMovies.some((like) => like.id === movieProps.id);
  const addtoLikedMovies = useMovieLikes((state) => state.addToLiked);
  const removeFromLiked = useMovieLikes((state) => state.removeFromLiked);
  const location = useLocation();

  const token = useRouteLoaderData('root');
  const [activeButton, setActiveButton] = useState(location.pathname);


  useEffect(() => {
    // Update active button whenever the location changes
    setActiveButton(location.pathname);
    console.log(location.pathname);
  }, [location.pathname]);

  const handleClick = () => {
    navigate('/details', { state: { ...movieProps } });
  };

  const handleAddToLiked = () => {
    if (!isAlreadyLiked) {
      addtoLikedMovies(movieProps); // Add the current movie to likes
    } else {
      removeFromLiked(movieProps)
    }
  };

  const handleAddToFavorites = () => {
    if (!isAlreadyFavorite) {
      addToFavorites(movieProps); // Add the current movie to favorites
    } else {
      removeFromFavorites(movieProps)
    }
  };

  const handleAuthRedirect = () => {
    if (!token) {
      navigate('/auth');
    } else {
      handleAddToLiked();
    }
  };

  return (
    <div className='max-w-md rounded overflow-hidden shadow-lg h-full bg-[rgb(20,26,50)]'>
      <img
        className='w-full'
        src={`http://localhost:8080/${movieProps.image}`}
        alt='Sunset in the mountains'
        style={{ height: '400px' }}
      />
      <div className='px-2 py-4 flex items-center justify-evenly '>
        <button
          type='button'
          onClick={handleAuthRedirect}
        >

          {token ?
            isAlreadyLiked ? <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
              : <svg className="hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            : <svg className="hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>}
        </button>
        <NavigateButton label='See Details' onNavigate={handleClick} />
        {token && (<button onClick={handleAddToFavorites} className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded-full'>
          {isAlreadyFavorite ? 'Remove from Favorites ' : 'Add to Favorites'}
        </button>)}

        <span className='text-white font-bold text-lg'>Likes: {token ? isAlreadyLiked ? 1 : 0 : 0}</span>

      </div>
      <div className='px-6 pb-4'>
        <div className='font-bold text-xl'>{movieProps.title}</div>
        <p className='text-gray-400 text-base'>{movieProps.description}</p>
      </div>
      <div className='flex justify-evenly px-6 pt-3 pb-1 bg-[rgb(13,19,43)]'>
        <Hashtag tag1='SD' tag2='HD' tag3='4K' />
      </div>
    </div >
  );
};

export default MovieCard;

import { create } from 'zustand';

export const useMovieLikes = create((set) => ({
  likedMovies: [], // Initialize an empty array for favorites
  addToLiked: (movie) =>
    set((state) => ({
      likedMovies: [...state.likedMovies, movie], // Add the new movie to the favorites array
    })),
  removeFromLiked: (movie) =>
    set((state) => {
      const filteredliked = state.likedMovies.filter(
        (like) => like.id !== movie.id // Assuming each movie has a unique 'id' property
      );
      return {
        likedMovies: filteredliked, // Update the favorites array
      };
    }),
}));
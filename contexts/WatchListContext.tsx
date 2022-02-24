import Movie from '../types/Movie';
import React from 'react';

export interface WatchListContextInterface {
    movies: Array<Movie>,
    addMovie: (movie: Movie) => void,
    removeMovie: (movie: Movie) => void,
}

const watchListContext: WatchListContextInterface = {
    movies: [],
    addMovie: (movie) => {},
    removeMovie: (movie) => {},
};
const WatchListContext = React.createContext(watchListContext);
export default WatchListContext;

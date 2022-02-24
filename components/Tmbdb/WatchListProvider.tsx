import React, { useEffect, useLayoutEffect, useState } from 'react';
import Movie from '../../types/Movie';
import WatchListContext, { WatchListContextInterface } from '../../contexts/WatchListContext';

const WatchListProvider: React.FC = ({children}) => {
    const [movies, setMovies] = useState<Array<Movie>>([]);

    useLayoutEffect(() => {
        const sessionList = localStorage.getItem('watchList');
        if (sessionList !== null) {
            setMovies(JSON.parse(sessionList))
        } else {
            localStorage.setItem('watchList', JSON.stringify(movies))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(movies));
    }, [movies]);

    const watchListContext: WatchListContextInterface = {
        movies,
        addMovie: (movie) => {
            if (movies.find((element) => element.id === movie.id) === undefined) {
                setMovies(movies.concat([movie]))
            }
        },
        removeMovie: (movie) => setMovies(movies.filter((element) => element.id !== movie.id)),
    };

    return (
        <WatchListContext.Provider value={watchListContext}>
            {children}
        </WatchListContext.Provider>
    );
};
export default WatchListProvider;

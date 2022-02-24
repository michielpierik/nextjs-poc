import React, { useContext } from 'react';
import {Row} from "reactstrap";
import MovieCard from "./MovieCard";
import WatchListContext from '../../contexts/WatchListContext';
const WatchListComponent: React.FC = () => {
    const watchList = useContext(WatchListContext);

    return (
        <React.Fragment>
            <Row xs={4}>
                {watchList.movies.map((movie) => (
                    <MovieCard
                        buttonText="Remove"
                        key={movie.id}
                        movie={movie}
                        onSelect={(movie) => watchList.removeMovie(movie)}/>
                ))}
            </Row>
        </React.Fragment>
    )
}

export default WatchListComponent

import React, {useEffect, useLayoutEffect, useState} from "react";
import {Row} from "reactstrap";
import MovieCard from "./MovieCard";
import Movie from "../../types/Movie";
const WatchListComponent: React.FC = () => {
    const [watchList, setWatchList] = useState<Array<Movie>>([])

    useLayoutEffect(() => {
        const sessionList = localStorage.getItem('watchList');
        if (sessionList !== null) {
            setWatchList(JSON.parse(sessionList))
        } else {
            localStorage.setItem('watchList', JSON.stringify(watchList))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('watchList', JSON.stringify(watchList));
    }, [watchList]);

    return (
        <React.Fragment>
            <Row xs={4}>
                {watchList.map((movie) => (
                    <MovieCard
                        buttonText="Remove"
                        key={movie.id}
                        movie={movie}
                        onSelect={(movie) => setWatchList(watchList.filter((element) => element.id !== movie.id))}/>
                ))}
            </Row>
        </React.Fragment>
    )
}

export default WatchListComponent

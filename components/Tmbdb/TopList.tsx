import React, { useContext } from 'react';
import { Button, Row } from 'reactstrap';
import MovieCard from './MovieCard';
import Movie from '../../types/Movie';
import useSWRInfinite from 'swr/infinite';
import axios from 'axios';
import WatchListContext from '../../contexts/WatchListContext';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const getKey = (pageIndex: number, previousPageData: { total_pages: number}) => {
    if (previousPageData !== null && pageIndex > previousPageData.total_pages) return null // reached the end
    return `/api/movielist?page=${pageIndex+1}`                    // SWR key
}
const TopList: React.FC = () => {
    const watchList = useContext(WatchListContext);

    const { data, size, setSize } = useSWRInfinite(getKey, fetcher)
    if (!data){
        return <p>Loading..</p>
    }
    return (
        <React.Fragment>
            <Row xs={4}>
                {data.map((pages) => {
                    return pages.results.map((movie: Movie) => (
                        <MovieCard
                            onSelect={(movie) => watchList.addMovie(movie)}
                            key={movie.id}
                            movie={movie}/>
                    ))
                })}
            </Row>
            <Button
                color="primary"
                onClick={() => setSize(size+1)}
            >
                Laad meer
            </Button>
        </React.Fragment>
    );
};

export default TopList;

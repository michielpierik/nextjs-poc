import React, { useState } from 'react';
import { Button, Card, CardBody, CardTitle, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Image from 'next/image';
import Movie from '../../types/Movie';

type Props = {
    buttonText?: string,
    movie: Movie,
    onSelect: (movie: Movie) => void
}
const MovieCard: React.FC<Props> = (
    {
        buttonText = 'Add to list!',
        movie,
        onSelect,
    }
) => {
    const [open, setOpen] = useState(false);
    return (
        <Card className="text-center">
            <CardBody>
                <CardTitle tag="h5">{movie.original_title}</CardTitle>
                {movie.poster_path
                    && <Image
                        alt="Movie poster"
                        width="200"
                        height={300}
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        priority
                    />
                }
                <Button onClick={() => setOpen(true)}>More info</Button>
                <Button color="primary" onClick={() => onSelect(movie)}>{buttonText}</Button>
            </CardBody>
            <Modal isOpen={open}>
                <ModalHeader>
                    {movie.title}
                </ModalHeader>
                <ModalBody className="text-center">
                    {movie.poster_path
                        && <Image
                            alt="Movie poster"
                            width="200"
                            height={300}
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            priority
                        />
                    }
                    <p>{movie.overview}</p>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </ModalFooter>
            </Modal>
        </Card>);
};
export default MovieCard;
